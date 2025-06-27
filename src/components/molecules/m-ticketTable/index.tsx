import { FaSearch, FaFilter, FaSort, FaEllipsisV } from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataProps {
  id: string;
  ticketId: string;
  eventCenter: string;
  ticketSale: number;
  ticketRevenue: number;
  dateCreated: string;
}
const data: DataProps[] = [
  {
    id: '001',
    ticketId: '#012345',
    eventCenter: 'Oniru',
    ticketSale: 1200,
    ticketRevenue: 600000,
    dateCreated: '28/07/2024',
  },
  {
    id: '002',
    ticketId: '#012345',
    eventCenter: 'D-Place',
    ticketSale: 1000,
    ticketRevenue: 500000,
    dateCreated: '20/07/2024',
  },
  {
    id: '003',
    ticketId: '#012345',
    eventCenter: 'Arise',
    ticketSale: 1500,
    ticketRevenue: 600000,
    dateCreated: '17/07/2024',
  },
  {
    id: '004',
    ticketId: '#012345',
    eventCenter: 'Fortune',
    ticketSale: 2500,
    ticketRevenue: 1250000,
    dateCreated: '14/07/2024',
  },
  {
    id: '005',
    ticketId: '#012345',
    eventCenter: 'Celina',
    ticketSale: 2000,
    ticketRevenue: 1000000,
    dateCreated: '07/07/2024',
  },
];
const ActionMenu = ({ id }: { id: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
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
                onClick={() => navigate(`/dashboard/user/ticket/${id}`)}
                className="cursor-pointer px-4 py-2 "
              >
                View
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
  }),
  columnHelper.accessor((row) => row.ticketId, {
    header: 'Ticket Id',
  }),
  columnHelper.accessor('eventCenter', {
    header: 'Event Center',
  }),
  columnHelper.accessor('ticketSale', {
    header: 'Ticket Sale',
    cell: (info) => <span>&#8358;{info.getValue()}</span>,
  }),
  columnHelper.accessor('ticketRevenue', {
    header: 'Ticket Revenue',
    cell: (info) => <span>&#8358;{info.getValue()}</span>,
  }),
  columnHelper.accessor('dateCreated', {
    header: 'Date Created',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <ActionMenu id={info.row.original.id} />,
  }),
];

const TicketTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter((item) =>
            item.eventCenter.trim().toLowerCase().includes(search.trim().toLowerCase()),
          )
        : data,
    );
  }, [search]);
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full rounded-lg bg-white px-3 py-9 lg:px-6">
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

        <div className="hidden items-center lg:flex lg:gap-5">
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
              <tr key={headerGroup.id} className="text-center ">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className=" bg-[#FAFAFA] px-4 py-2 font-Rubik text-sm font-semibold text-[#000000]"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-center">
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
    </div>
  );
};

export default TicketTable;
