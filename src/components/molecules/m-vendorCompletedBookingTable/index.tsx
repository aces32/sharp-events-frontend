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
  eventType: string;
  date: string;
  client: string;
  rating: string;
  status: string;
}
const data: DataProps[] = [
  {
    id: '001',
    eventType: 'wedding',
    date: '28/07/2024',
    client: 'Sadiq Abdullahi',
    status: 'Confirmed',
    rating: '4.5/5.0',
  },
  {
    id: '002',
    eventType: 'conference',
    date: '20/07/2024',
    client: 'Ahmed Yusuf',
    status: 'Pending',
    rating: '4.0/5.0',
  },
  {
    id: '003',

    eventType: 'Birthday',

    date: '28/07/2024',
    client: 'Omar Suleiman',
    status: 'Canceled',
    rating: '3.5/5.0',
  },
  {
    id: '004',

    eventType: 'Burial',

    date: '28/07/2024',
    client: 'Mustapha Hassan',
    status: 'Confirmed',
    rating: '4.5/5.0',
  },
  {
    id: '005',

    eventType: 'Reunion',

    date: '28/07/2024',
    client: 'Abubakar Khadija',
    status: 'Pending',
    rating: '4.0/5.0',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('id', {
    header: 'Booking ID',
  }),
  columnHelper.accessor('client', {
    header: 'Client Name',
  }),
  columnHelper.accessor('eventType', {
    header: 'Event Type',
    cell: (info) => <span className="block w-full text-justify">{info.getValue()}</span>,
  }),
  columnHelper.accessor('date', {
    header: 'Event Date',
  }),
  columnHelper.accessor('rating', {
    header: 'Rating',
  }),
  columnHelper.accessor('status', {
    header: 'Booking Status',
  }),
];
const VendorCompletedBookingTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.eventType.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
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
    <div className="mt-5 w-full rounded-lg bg-white px-3 py-9 lg:px-6">
      <h3 className="pb-4 font-Rubik text-base font-semibold">Completed Bookings</h3>

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

        <div className="flex items-center gap-1 lg:gap-5 ">
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
              <tr key={headerGroup.id} className=" ">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className=" bg-[#FAFAFA] px-4 py-2 text-left">
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
                  <td key={cell.id} className="border-b border-[#00000033] px-4 py-2">
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

export default VendorCompletedBookingTable;
