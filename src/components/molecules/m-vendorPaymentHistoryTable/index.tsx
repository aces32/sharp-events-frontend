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
  activity: string;
  date: string;
  details: string;
  relationship: string;
  initiation: string;
}
const data: DataProps[] = [
  {
    id: '001',
    activity: 'New Message',
    date: '28/07/2024',
    details: 'From: Fatima Bello',
    relationship: 'Quotation #QT-2025-002',
    initiation: 'Fatima Bello',
  },
  {
    id: '002',
    activity: 'Booking Confirmed',
    date: '2025-04-23 06:10',
    details: 'Client: Aisha Musa',
    relationship: 'Service: Basic Portrait',
    initiation: 'Fatima Bello',
  },
  {
    id: '003',
    activity: 'Quotation Viewed',
    date: '2025-04-22 20:30',
    details: 'By: Chinedu Okoro',
    relationship: 'Quotation #QT-2025-004',
    initiation: 'Fatima Bello',
  },
  {
    id: '004',
    activity: 'Rating Received',
    date: '2025-04-22 14:20',
    details: 'Client: Aisha Musa',
    relationship: 'Service: Wedding Photo',
    initiation: 'Ngozi Adebayo',
  },
  {
    id: '005',
    activity: 'Quotation Sent',
    date: '2025-04-22 09:00',
    details: 'To: Emeka Obi',
    relationship: 'Quotation #QT-2025-005',
    initiation: 'John Smith',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('activity', {
    header: 'Activity',
  }),
  columnHelper.accessor('details', {
    header: 'Details',
    cell: (info) => <span className="block w-full text-justify">{info.getValue()}</span>,
  }),
  columnHelper.accessor('relationship', {
    header: 'Related To',
  }),
  columnHelper.accessor('date', {
    header: 'Date & Time',
  }),
  columnHelper.accessor('initiation', {
    header: 'Initiated By',
  }),
];
const VendorActivityStreamTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.activity.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              item.details.trim().toLowerCase().includes(search.trim().toLowerCase()),
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
      <h3 className="pb-4 font-Rubik text-base font-semibold">Recent Activity Stream</h3>

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

        <div className="hidden items-center lg:flex lg:gap-5 ">
          <div className="flex items-center gap-3 rounded-md border border-[#00000066] bg-white px-4 py-2">
            <FaFilter className="text-gray-500" />
            <select
              name="filter"
              id="filter"
              className="w-full border-none bg-transparent text-gray-700 outline-none placeholder:text-gray-400 focus:ring-0"
            >
              <option value="all">All</option>
              <option value="messages">Messages</option>
              <option value="bookings">Bookings</option>
              <option value="quotations">Quotations</option>
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
    </div>
  );
};

export default VendorActivityStreamTable;
