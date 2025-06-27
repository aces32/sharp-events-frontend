import { useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface DataProps {
  id: string;
  bookingDate: string;
  eventDate: string;
  amountPaid: string;
  balance: string;
  status: string;
}
const data: DataProps[] = [
  {
    id: '001',
    eventDate: '28/07/2024',
    bookingDate: '16/07/2024',
    amountPaid: '₦ 500,000',
    balance: '₦ 100,000',
    status: 'Confirmed',
  },
  {
    id: '002',
    eventDate: '20/07/2024',
    bookingDate: '10/07/2024',
    amountPaid: '₦ 400,000',
    balance: '₦ 100,000',
    status: 'Pending',
  },
  {
    id: '003',
    eventDate: '28/07/2024',
    bookingDate: '07/07/2024',
    amountPaid: '₦ 90,000',
    balance: '₦ 10,000',
    status: 'Canceled',
  },
  {
    id: '004',
    eventDate: '28/07/2024',
    bookingDate: '01/07/2024',
    amountPaid: '₦ 1,000,000',
    balance: '₦ 250,000',
    status: 'Confirmed',
  },
  {
    id: '005',
    eventDate: '28/07/2024',
    bookingDate: '07/06/2024',
    amountPaid: '₦ 1,000,000',
    balance: '₦ 0',
    status: 'Pending',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('bookingDate', {
    header: 'Booking Date',
  }),
  columnHelper.accessor('eventDate', {
    header: 'Event Date',
  }),

  columnHelper.accessor('amountPaid', {
    header: 'Amount Paid',
  }),
  columnHelper.accessor('balance', {
    header: 'Balance Due',
  }),
  columnHelper.accessor('status', {
    header: 'Payment Status',
  }),
];
const AdminBookingHistoryTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter((item) =>
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
    <div className="mt-5 w-full rounded-lg bg-white px-3 py-9 lg:px-6">
      <h3 className="pb-4 font-Rubik text-base font-semibold">Booking History</h3>
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
              <tr key={headerGroup.id} className="text-left ">
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
    </div>
  );
};

export default AdminBookingHistoryTable;
