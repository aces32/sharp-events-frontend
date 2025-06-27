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
  client: string;
  subject: string;
  message: string;
  date: string;
  status: string;
  email: string;
  phone: string;
  reply: string;
}

const data: DataProps[] = [
  {
    id: '001',
    client: 'Adamu Rukayya',
    subject: 'Request to Reschedule',
    message:
      'Hello, I urgently need assistance! My wedding event is scheduled for this weekend, but I received an email saying the venue might not be available due to a double booking. Can you please confirm this immediately and let me know if there’s anything we need to do to ensure the booking is secure? This is very time-sensitive.',
    date: '2025-04-06 08:30 AM',
    status: 'Active',
    email: 'Adamur@example.com',
    phone: '123-456-7890',
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },
  {
    id: '002',
    client: 'Mohammed Zainab',
    subject: 'Payment Issue',
    message: 'I have a payment issue',
    date: '2025-04-06 08:30 AM',
    status: 'Inactive',
    email: 'Mzainab@example.com',
    phone: '123-456-7890',
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '003',
    client: 'Abdullahi Nafisa',
    subject: 'Request to Reschedule',
    message: 'I need to reschedule my event',
    date: '2025-04-06 08:30 AM',
    status: 'Inactive',
    email: 'Abdullahi.n@example.com',
    phone: '123-456-7890',
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '004',
    client: 'Jibril Amina',
    subject: 'Request to Reschedule',
    message: 'I need to reschedule my event',
    date: '2025-04-06 08:30 AM',
    status: 'Active',
    email: 'j.amina@example.com',
    phone: '123-456-7890',
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '005',
    client: 'Abubakar Khadija',
    subject: 'Request to Reschedule',
    message: 'I need to reschedule my event',
    date: '2025-04-06 08:30 AM',
    status: 'Active',
    email: 'Akhadija@example.com',
    phone: '123-456-7890',
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },
];
interface ActionMenuProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  date: string;
  reply: string;
  status: string;
}
const ActionMenu = ({ id, name, message, date, phone, email, reply, status }: ActionMenuProps) => {
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
                  navigate(`/dashboard/admin/support/${id}`, {
                    state: {
                      id,
                      name,
                      phone,
                      email,
                      date,
                      message,
                      reply,
                      status,
                    },
                  })
                }
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
  columnHelper.accessor('client', {
    header: 'Client Name',
  }),

  columnHelper.accessor('subject', {
    header: 'Subject',
    cell: (info) => {
      const subject = info.getValue() as string;
      const preview = subject.length > 10 ? `${subject.slice(0, 10)}...` : subject;
      return <span>{preview}</span>;
    },
  }),
  columnHelper.accessor('message', {
    header: 'Message',
    cell: (info) => {
      const message = info.getValue() as string;
      const preview = message.length > 10 ? `${message.slice(0, 10)}...` : message;
      return <span>{preview}</span>;
    },
  }),
  columnHelper.accessor('date', {
    header: 'Date Submitted',
    // cell: (info) => <span>&#8358;{info.getValue()}</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Booking Status',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => (
      <ActionMenu
        id={info.row.original.id}
        name={info.row.original.client}
        phone={info.row.original.phone}
        date={info.row.original.date}
        message={info.row.original.message}
        email={info.row.original.email}
        reply={info.row.original.reply}
        status={info.row.original.status}
      />
    ),
  }),
];

const AdminSupportTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setFilteredData(
      search
        ? data.filter(
            (item) =>
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
      <h3 className="pb-4 font-Rubik text-base font-semibold">Support Requests</h3>
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

export default AdminSupportTable;
