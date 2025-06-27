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
  eventCenter: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: string;
}
const data: DataProps[] = [
  {
    id: '001',
    eventCenter: 'Oniru',
    date: '28/07/2024',
    time: '12:42pm',
    location: '7, Ademolu streeet off',
    attendees: 0,
    status: 'Upcoming',
  },
  {
    id: '002',
    eventCenter: 'D-Place',
    date: '20/07/2024',
    time: '2:00pm',
    location: '103, Aderigbe street',
    attendees: 100,
    status: 'In-progress',
  },
  {
    id: '003',

    eventCenter: 'Arise',

    date: '28/07/2024',
    time: '12:42pm',
    location: '5, wemimo street ladi',
    attendees: 150,
    status: 'Completed',
  },
  {
    id: '004',

    eventCenter: 'Fortune',

    date: '28/07/2024',
    time: '12:42pm',
    location: '7, Ademolu streeet off',
    attendees: 200,
    status: 'Completed',
  },
  {
    id: '005',

    eventCenter: 'Celina',

    date: '28/07/2024',
    time: '1:00pm',
    location: '7, Ademolu streeet off',
    attendees: 300,
    status: 'Completed',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('id', {
    header: 'S/N',
  }),

  columnHelper.accessor('eventCenter', {
    header: 'Event Name',
  }),
  columnHelper.accessor('date', {
    header: 'Date',
  }),
  columnHelper.accessor('time', {
    header: 'Time',
  }),
  columnHelper.accessor('location', {
    header: 'Location',
  }),
  columnHelper.accessor('attendees', {
    header: 'Attendees',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
];
const EventTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.eventCenter.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
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

export default EventTable;
