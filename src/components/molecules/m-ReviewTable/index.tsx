import React, { FC, useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaStar } from 'react-icons/fa';
import user from 'assets/Icon/user';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface DataProps {
  id: string;
  rating: string;
  eventType: string;
  date: string;
  name: string;
  review: string;
  service: string;
  image: string | FC<React.SVGProps<SVGSVGElement>>;
}

const data: DataProps[] = [
  {
    id: '001',
    eventType: 'wedding',
    date: '28/07/2024',
    name: 'Sadiq Abdullahi',
    service: 'Wedding Photography Package',
    image: user,
    rating: '4.5/5.0',
    review:
      'David was amazing! He was professional, punctual, and delivered stunning photos. I highly recommend him.',
  },
  {
    id: '002',
    eventType: 'conference',
    date: '20/07/2024',
    name: 'Ahmed Yusuf',
    service: 'Wedding Photography Package',
    image: user,
    rating: '4.0/5.0',
    review:
      'David was amazing! He was professional, punctual, and delivered stunning photos. I highly recommend him.',
  },
  {
    id: '003',
    eventType: 'Birthday',
    date: '28/07/2024',
    name: 'Omar Suleiman',
    service: 'Wedding Photography Package',
    image: user,
    rating: '3.5/5.0',
    review: 'Sarah was good, but there was a slight delay. The photos were beautiful, though.',
  },
  {
    id: '004',
    eventType: 'Burial',
    date: '28/07/2024',
    name: 'Mustapha Hassan',
    service: 'Catering.',
    image: user,
    rating: '4.5/5.0',
    review: 'Sarah was good, but there was a slight delay. The photos were beautiful, though.',
  },
  {
    id: '005',
    eventType: 'Reunion',
    date: '28/07/2024',
    name: 'Abubakar Khadija',
    service: 'Catering.',
    image: user,
    rating: '4.0/5.0',
    review:
      'John is the best caterer I have ever worked with. The food was delicious, and the service was impeccable.',
  },
];

const columnHelper = createColumnHelper<DataProps>();
const columns = [
  columnHelper.accessor('image', {
    cell: (info) => {
      const Img = info.getValue();
      return <Img />;
    },
  }),

  columnHelper.accessor('name', {
    cell: (info) => {
      return (
        <span>
          <h3 className="font-Rubik text-xl font-semibold">{info.getValue()}</h3>
          <p className="font-Rubik text-xs font-semibold">Service</p>
          <p className="font-Rubik text-xs font-medium text-[#00000099]">
            {info.row.original.service}
          </p>
        </span>
      );
    },
  }),

  columnHelper.accessor('review', {
    cell: (info) => {
      return (
        <span className="flex max-w-[500px] flex-col gap-2">
          <div className="flex items-center justify-start gap-5">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => {
                const rating = parseFloat(info.row.original.rating);
                return (
                  <FaStar key={i} className={i < rating ? 'text-[#FABB2F]' : 'text-gray-300'} />
                );
              })}
              {/* ({info.row.original.rating}) */}
            </div>
            <p className="font-Rubik text-sm font-medium">{info.row.original.date}</p>
          </div>
          <p className="font-Rubik text-sm font-medium text-[#00000099]">{info.getValue()}</p>
          <div className="flex gap-5">
            <button
              type="button"
              className="rounded-lg border p-3 font-Rubik text-xs font-medium text-[#00000066]"
            >
              Public Comment
            </button>
            <button
              type="button"
              className="rounded-lg border p-3 font-Rubik text-xs font-medium text-[#00000066]"
            >
              Direct Message
            </button>
          </div>
        </span>
      );
    },
  }),
];

const ReviewTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      search
        ? data.filter((item) =>
            item.name.trim().toLowerCase().includes(search.trim().toLowerCase()),
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
      <div className="flex w-full items-center justify-between gap-1 rounded-lg bg-[#F3F3F3] px-1 py-4 lg:px-3">
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
        <table className="min-w-full border-collapse">
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

export default ReviewTable;
