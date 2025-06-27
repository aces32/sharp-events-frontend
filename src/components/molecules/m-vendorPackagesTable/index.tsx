import { useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/a-button';

interface DataProps {
  id: string;
  bundleName: string;
  service: string;
  price: string;
}
const data: DataProps[] = [
  {
    id: '001',
    bundleName: 'Wedding Essentials Package',
    service: 'Wedding Photography Package, Wedding Cake',
    price: '₦ 200,000',
  },
  {
    id: '002',
    bundleName: 'Birthday Bash Bundle',
    service: 'Birthday Party Catering (30 guests), Event Decoration (Basic)',
    price: '₦ 70,000',
  },
  {
    id: '003',
    bundleName: 'Corporate Kickoff Package',
    service: 'Corporate Event Catering (50 guests), Meeting Room Rental',
    price: '₦ 150,000',
  },
  {
    id: '004',
    bundleName: 'Family Celebration Bundle',
    service: 'Family Portrait Session,  Small Party Catering',

    price: '₦ 80,000',
  },
  {
    id: '005',
    bundleName: 'Graduation Day Package',
    service: 'Graduation Ceremony Photography (Full Event),  Party Venue Rental',
    price: '₦ 180,000',
  },
];
const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('bundleName', {
    header: 'Bundle Name',
  }),
  columnHelper.accessor('service', {
    header: 'Services Included',
  }),
  columnHelper.accessor('price', {
    header: 'Bundle Price',
    cell: (info) => <span className="block w-full text-justify">{info.getValue()}</span>,
  }),
];
const VendorPackagesTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
              item.service.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              item.bundleName.trim().toLowerCase().includes(search.trim().toLowerCase()),
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
      <h3 className="pb-4 font-Rubik text-base font-semibold">Bundles/Packages</h3>

      <div
        className=" flex  w-full items-center justify-between gap-1 rounded-lg bg-[#F3F3F3] px-1 py-4 lg:px-3
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
          <Link to="/dashboard/vendor/createBundle">
            <Button type="button" label="Create Bundle" className="w-full" />
          </Link>
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

export default VendorPackagesTable;
