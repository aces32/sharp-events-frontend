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
  vendorName: string;
  location: string;
  service: string;
  contactInfo: string;
  rating: string;
  bookingStatus: string;
}
const data: DataProps[] = [
  {
    id: '001',
    vendorName: 'Alex Ben',
    location: '7, Ademolu streeet off',
    service: 'Catering',
    contactInfo: '09067680035',
    rating: '3.5',
    bookingStatus: 'Available',
  },
  {
    id: '002',

    location: '103, Aderigbe street',

    vendorName: 'Nico Williams',

    service: 'Dj',
    contactInfo: '09067680035',
    rating: '3.5',
    bookingStatus: 'Booked',
  },
  {
    id: '003',

    location: '5, wemimo street ladi',

    vendorName: 'Ojo deborah',

    service: 'Photography',
    contactInfo: '09129738825',
    rating: '3.8',
    bookingStatus: 'Pending',
  },
  {
    id: '004',

    location: '7, Ademolu streeet off',

    vendorName: 'Aina Oreoluwa',

    service: 'Mc',
    contactInfo: '09112896446',
    rating: '4.2',
    bookingStatus: 'Cancelled',
  },
  {
    id: '005',

    vendorName: 'Salam Aisha',
    location: '7, Ademolu streeet off',
    service: 'Event Planner',
    contactInfo: '08180073054',
    rating: '4.4',
    bookingStatus: 'Available',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('id', {
    header: 'S/N',
  }),

  columnHelper.accessor('vendorName', {
    header: 'Vendor name',
  }),
  columnHelper.accessor('location', {
    header: 'Location',
  }),
  columnHelper.accessor('service', {
    header: 'Service',
  }),

  columnHelper.accessor('contactInfo', {
    header: 'Contact Info',
  }),
  columnHelper.accessor('rating', {
    header: 'Rating',
  }),
  columnHelper.accessor('bookingStatus', {
    header: 'Booking Status',
  }),
];
const ServiceProviderTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.service.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              item.bookingStatus.trim().toLowerCase().includes(search.trim().toLowerCase()),
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
              <tr key={headerGroup.id} className="text-center">
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

export default ServiceProviderTable;
