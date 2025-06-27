import { SetStateAction, useEffect, useState } from 'react';
import {
  FaSearch,
  FaFilter,
  FaSort,
  FaCalendarCheck,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaHeart,
  FaEllipsisV,
} from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import useFetchHook from 'hooks/useFetchHook';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'components/atoms/a-button';

import { LineGraph } from 'components/organisms/o-graph';
import { toast } from 'react-toastify';
import Pagination from '../m-pagination';
import DashboardHeader from '../m-dashboardHeader';

interface DataProps {
  id: string;
  name: string;
  tourType: string;
  tourDate: string;
  tourTime: string;
  isApproved: boolean;
}
interface ActionMenuProps {
  id: string;
}
const ActionMenu = ({ id }: ActionMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const [, approveTour] = useFetchHook('event-tour/approve');
  const handleApprove = async () => {
    try {
      const response = await approveTour.PostPayload(id);
      if (response?.success) {
        toast(response?.message);
        setShowMenu(false);
        // Optional: refresh tour list
      }
    } catch (error) {
      console.error('Error approving tour:', error);
    }
  };
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        className="rounded-md p-2 hover:bg-gray-200"
        aria-label="Open action menu"
      >
        <FaEllipsisV className="text-gray-600" />
      </button>

      {showMenu && (
        <div className="absolute right-0 top-0 z-10 mt-2 w-28 rounded-lg border bg-white shadow-md hover:border-gray-100">
          <ul className="py-1 text-gray-700">
            <li>
              <button type="button" onClick={handleApprove} className="cursor-pointer px-4 py-2 ">
                Approve
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('id', {
    header: 'S/N',
    cell: (info) => info.row.index + 1,
  }),

  columnHelper.accessor('name', {
    header: 'Client Name',
    // cell: (info) => <span className="block w-full text-justify">{info.getValue()}</span>,
  }),
  columnHelper.accessor('tourType', {
    header: 'Tour Type',
  }),
  columnHelper.accessor('tourTime', {
    header: 'Tour Time',
    cell: (info) => {
      const time = new Date(`2000-01-01T${info.getValue()}`);
      return time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    },
  }),
  columnHelper.accessor('tourDate', {
    header: 'Date',
    cell: (info) =>
      new Date(info.getValue()).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
  }),
  columnHelper.accessor('isApproved', {
    header: 'Event Status',
    cell: (info) => (info.getValue() ? 'Confirmed' : 'Pending'),
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <ActionMenu id={info.row.original.id} />,
  }),
];
const AdminTourRequestTable = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 10;
  const [tourRequest, GetTourRequest] = useFetchHook('event-tour/event-center');
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    if (tourRequest?.data?.eventTours) {
      const approved = tourRequest.data.eventTours.filter(
        (item: DataProps) => item.isApproved,
      ).length;
      const pending = tourRequest.data.eventTours.filter(
        (item: DataProps) => !item.isApproved,
      ).length;

      setApprovedCount(approved);
      setPendingCount(pending);
    }
  }, [tourRequest?.data?.eventTours]);
  const stats = [
    {
      id: 1,
      title: 'Total Tour',
      value: tourRequest?.data?.total || 0,
      icon: <FaMoneyBillWave />,
      bgColor: 'bg-yellow-100',
    },
    {
      id: 2,
      title: 'Approved Tour',
      value: approvedCount,
      icon: <FaCalendarCheck />,
      bgColor: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Pending Tour',
      value: pendingCount,
      icon: <FaHourglassHalf />,
      bgColor: 'bg-red-100',
    },
    {
      id: 4,
      title: 'Canceled Tour request',
      value: pendingCount,
      icon: <FaHeart />,
      bgColor: 'bg-pink-100',
    },
  ];
  const [lineChartData, setLineChartData] = useState<
    { month: string; PHYSICAL: number; VIRTUAL: number }[]
  >([]);

  useEffect(() => {
    if (tourRequest?.data?.eventTours) {
      const monthMap: Record<string, { PHYSICAL: number; VIRTUAL: number }> = {};

      tourRequest.data.eventTours.forEach(
        (tour: DataProps & { tourDate: string; tourType: string }) => {
          const date = new Date(tour.tourDate);
          const month = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
          const type = tour.tourType.toUpperCase();

          if (!monthMap[month]) {
            monthMap[month] = { PHYSICAL: 0, VIRTUAL: 0 };
          }

          if (type === 'PHYSICAL') {
            monthMap[month].PHYSICAL += 1;
          } else if (type === 'VIRTUAL') {
            monthMap[month].VIRTUAL += 1;
          }
        },
      );

      const transformed = Object.entries(monthMap)
        .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime()) // Ensure month order
        .map(([month, counts]) => ({
          month,
          PHYSICAL: counts.PHYSICAL,
          VIRTUAL: counts.VIRTUAL,
        }));

      setLineChartData(transformed);
    }
  }, [tourRequest?.data?.eventTours]);

  useEffect(() => {
    const fetchTourRequest = async () => {
      try {
        if (!id) return;
        const queryString = new URLSearchParams({
          page: currentPage.toString(),
          pageSize: itemsPerPage.toString(),
          eventCenterId: id,
        }).toString();
        console.log('Query String:', queryString);
        const response = await GetTourRequest.GetPayload(queryString);
        console.log('API Response:', response);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTourRequest();
  }, [currentPage, itemsPerPage, id]);
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<DataProps[]>([]);

  useEffect(() => {
    if (tourRequest?.data?.eventTours) {
      setFilteredData(
        search
          ? tourRequest.data.eventTours.filter(
              (item: DataProps) =>
                item.tourType.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
                item.name.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
                (item.isApproved ? 'Confirmed' : 'Pending')
                  .toLowerCase()
                  .includes(search.trim().toLowerCase()),
            )
          : tourRequest.data.eventTours,
      );
    }
  }, [search, tourRequest?.data?.eventTours]);
  const table = useReactTable({
    data: filteredData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <DashboardHeader
        header="Tour Request"
        title="Customize event center settings to suit your needs, including layout, services, and integrations"
        stats={stats}
        rightSection={
          <div className="flex items-center gap-5">
            <Button
              type="button"
              label="View Event Details"
              className="!bg-[#008000] font-Rubik text-base font-semibold"
              handleClick={() => navigate(`/dashboard/admin/view-event/${id}`)}
            />
          </div>
        }
        className="md:grid-cols-2 lg:grid-cols-4"
      />

      <div className="rounded-lg bg-white p-4 shadow-md">
        <h3 className="font-Rubik  text-base font-semibold">Tour Growth</h3>
        <hr className="py-1" />
        <LineGraph
          lineChartData={lineChartData}
          xKey="month"
          yKey="PHYSICAL"
          secondYKey="VIRTUAL"
          color="red"
        />
      </div>
      <div className="mt-5 w-full rounded-lg bg-white px-3 py-9 lg:px-6">
        <h3 className="pb-4 font-Rubik text-base font-semibold">Tour Requests</h3>
        <div
          className="flex w-full items-center justify-between gap-1 rounded-lg bg-[#F3F3F3] px-1 py-4 lg:px-3
    "
        >
          <div className="flex items-center gap-3 rounded-md border border-[#00000066] bg-white py-2 pl-5">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="hidden items-center gap-1 lg:flex lg:gap-5 ">
            <div className="flex items-center gap-3 rounded-md border border-[#00000066] bg-white px-4 py-2">
              <FaFilter className="text-gray-500" />
              <select
                name="filter"
                id="filter"
                className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
              >
                <option value="month">Filter by Month </option>
              </select>
            </div>
            <div className="flex items-center rounded-md border border-[#00000066] bg-white px-4 py-2">
              <FaSort className="text-gray-500" />
              <select
                name="sort"
                id=""
                className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
              >
                <option value="">Sort by</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <table className="min-w-full border-collapse ">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="text-left">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="bg-[#FAFAFA] px-4 py-2 font-Rubik text-sm font-semibold text-[#000000]"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="text-left">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-b border-[#00000033] px-4 py-2 font-Rubik text-sm font-medium text-[#00000099]"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Pagination page={currentPage} totalCount={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminTourRequestTable;
