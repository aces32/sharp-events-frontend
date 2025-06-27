import { SetStateAction, useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaStar, FaEllipsisV } from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Button from 'components/atoms/a-button';
import { Link, useNavigate } from 'react-router-dom';
import useFetchHook from 'hooks/useFetchHook';

import { toast } from 'react-toastify';
import Pagination from '../m-pagination';
import DeleteServiceModal from '../m-deleteService';

interface DataProps {
  id: string;
  serviceName: string;
  service: {
    name: string;
  };
  vendor: {
    status: string;
  };
  prices: string;
  rating: number;
  featured: boolean;
}
interface ActionMenuProps {
  id: string;
}

const ActionMenu = ({ id }: ActionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedServiceId, setSeletedServiceId] = useState<string | null>(null);
  const [, deleteService] = useFetchHook('services-offered');
  const navigate = useNavigate();

  const handleDelete = async (deleteId: string) => {
    const response = await deleteService.DeletePayload(deleteId);
    if (response?.success) {
      toast.success(response?.message || 'Service deleted successfully');
      navigate(0); // Refresh page
    } else {
      toast.error(response?.message || 'Failed to delete service');
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
              <button
                type="button"
                onClick={() => navigate(`/dashboard/vendor/editservice/${id}`)}
                className="cursor-pointer px-4 py-2 "
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSeletedServiceId(id);
                  setIsOpen(true);
                }}
                className="cursor-pointer px-4 py-2 "
                type="button"
              >
                Delete
              </button>
            </li>
          </ul>
          <DeleteServiceModal
            isOpen={isOpen}
            selectedServiceId={selectedServiceId}
            onDelete={handleDelete}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('serviceName', {
    header: 'Service Name',
  }),
  columnHelper.accessor('service.name', {
    header: 'Category',
  }),
  columnHelper.accessor('prices', {
    header: 'Price',
    cell: (info) => <span className="block w-full text-justify">{info.getValue()}</span>,
  }),
  columnHelper.accessor('rating', {
    header: 'Rating',
    cell: (info) => {
      const rating = Math.round(info.getValue());
      const stars = [];
      for (let i = 0; i < 5; i += 1) {
        if (i < rating) {
          stars.push(<FaStar key={i} className="text-gray-500" />);
        } else {
          stars.push(<FaStar key={i} className="text-gray-300" />);
        }
      }
      return (
        <div className="flex items-center">
          {stars} ({info.getValue()?.toFixed(1) || 0})
        </div>
      );
    },
  }),
  columnHelper.accessor('featured', {
    header: 'Featured',
    cell: (info) => <input type="checkbox" checked={info.getValue()} readOnly />,
  }),
  columnHelper.accessor('vendor.status', {
    header: 'Status',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <ActionMenu id={info.row.original.id} />,
  }),
];
const VendorServiceListingTable = () => {
  const [, getServiceOffered] = useFetchHook('services-offered');
  const [search, setSearch] = useState('');
  const [serviceOffered, setServiceOffered] = useState([]);
  const [filteredData, setFilteredData] = useState(serviceOffered);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchServiceOffered = async () => {
      try {
        const queryString = new URLSearchParams({
          page: currentPage.toString(),
          pageSize: itemsPerPage.toString(),
        }).toString();
        const response = await getServiceOffered.GetPayload(queryString);
        setServiceOffered(response.data);
        setTotalPages(Math.ceil(response.pagination.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching service offered:', error);
      }
    };
    fetchServiceOffered();
  }, [currentPage]);

  useEffect(() => {
    setFilteredData(
      search
        ? serviceOffered.filter(
            (item: DataProps) =>
              item.service.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.serviceName.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.vendor.status.toLowerCase().includes(search.trim().toLowerCase()),
          )
        : serviceOffered,
    );
  }, [search, serviceOffered]);
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const table = useReactTable({
    data: filteredData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full rounded-lg bg-white px-3 py-9 lg:px-6">
      <h3 className="pb-4 font-Rubik text-base font-semibold">Service Listings</h3>

      <div
        className=" flex w-full items-center justify-between gap-1 rounded-lg bg-[#F3F3F3] px-1 py-4 lg:px-3
    "
      >
        <div className="flex w-1/2 items-center gap-3 rounded-md border border-[#00000066] bg-white py-2 pl-5 lg:w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-1 lg:gap-5 ">
          <div className="hidden items-center gap-3 rounded-md border border-[#00000066] bg-white px-4 py-2 lg:flex">
            <FaFilter className="text-gray-500" />
            <select
              name="filter"
              id="filter"
              className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
            >
              <option value="month">Filter by Month </option>
            </select>
          </div>
          <div className="hidden items-center rounded-md border border-[#00000066] bg-white px-4 py-2 lg:flex">
            <FaSort className="text-gray-500" />
            <select
              name="sort"
              id=""
              className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
            >
              <option value="">Sort by</option>
            </select>
          </div>
          <Link to="/dashboard/vendor/createService">
            <Button type="button" label="Create Service" className="w-full" />
          </Link>
        </div>
      </div>

      <div className="overflow-x-scroll">
        <table className="min-w-full border-collapse ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className=" ">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="bg-[#FAFAFA] px-4 py-2 text-left font-Rubik text-sm font-semibold text-[#000000]"
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
  );
};

export default VendorServiceListingTable;
