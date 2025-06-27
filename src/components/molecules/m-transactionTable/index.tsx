import { useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaEllipsisV } from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

interface DataProps {
  id: string;
  service: string;
  date: string;
  client: string;
  status: string;
  paymentStatus: string;
}
const data: DataProps[] = [
  {
    id: '001',
    service: 'Basic Portrait Session',
    date: '2025-04-27 10:00 AM',
    client: 'Sadiq Abdullahi',
    status: 'Confirmed',
    paymentStatus: 'paid',
  },
  {
    id: '002',
    service: 'conference',
    date: '2025-05-01 12:00 PM',
    client: 'Ahmed Yusuf',
    status: 'Confirmed',
    paymentStatus: 'paid',
  },
  {
    id: '003',

    service: 'Event Catering (50 guests)',

    date: '2025-05-05 06:00 PM',
    client: 'Omar Suleiman',
    status: 'Pending',
    paymentStatus: 'pending',
  },
  {
    id: '004',

    service: 'Birthday Party Planning (Basic Package)',

    date: '2025-05-10 02:00 PM',
    client: 'Mustapha Hassan',
    status: 'Completed',
    paymentStatus: 'paid',
  },
  {
    id: '005',

    service: 'Graduation Videography (Highlight Reel)',

    date: '2025-05-15 09:00 AM',
    client: 'Abubakar Khadija',
    status: 'Cancelled',
    paymentStatus: 'Refunded',
  },
];
interface ActionMenuProps {
  id: string;
  status: string;
  date: string;
  client: string;
  service: string;
}
const ActionMenu = ({ id, status, date, client, service }: ActionMenuProps) => {
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
                onClick={() =>
                  navigate(`/dashboard/vendor/createBooking/${id}`, {
                    state: {
                      id,
                      status,
                      date,
                      client,
                      service,
                    },
                  })
                }
                className="cursor-pointer px-4 py-2 "
              >
                View
              </button>
            </li>
            <li>
              <button className="cursor-pointer px-4 py-2 " type="button">
                Download
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
    header: 'Booking ID',
  }),
  columnHelper.accessor('client', {
    header: 'Client Name',
  }),
  columnHelper.accessor('service', {
    header: 'Service',
    cell: (info) => {
      const service = info.getValue() as string;
      const preview = service.length > 20 ? `${service.slice(0, 20)}...` : service;
      return <span>{preview}</span>;
    },
  }),
  columnHelper.accessor('date', {
    header: 'Date & Time',
  }),
  columnHelper.accessor('paymentStatus', {
    header: 'Payment Status',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => (
      <ActionMenu
        id={info.row.original.id}
        status={info.row.original.status}
        date={info.row.original.date}
        client={info.row.original.client}
        service={info.row.original.service}
      />
    ),
  }),
];
const TransactionTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.service.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              item.client.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              item.status.trim().toLowerCase().includes(search.trim().toLowerCase()),
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
      <h3 className="pb-4 font-Rubik text-base font-semibold">Transaction History</h3>

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
                    className=" bg-[#FAFAFA] px-4 py-2 text-left font-Rubik text-sm font-semibold text-[#000000]"
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
    </div>
  );
};

export default TransactionTable;
