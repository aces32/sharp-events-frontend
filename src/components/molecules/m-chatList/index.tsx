import { FaSearch } from 'react-icons/fa';
import { format } from 'date-fns';

import { useEffect, useState } from 'react';
import user from 'assets/images/profile.png';

interface DataProps {
  id: string;
  client: string;

  message: string | string[];
  date: string;
  status: 'Offline' | 'Online';

  reply: string;
  image: string;
  unread: boolean;
}
const data: DataProps[] = [
  {
    id: '001',
    client: 'Adamu Rukayya',
    message: [
      'Hello, I urgently need assistance! My wedding event is scheduled for this weekend, but I received an email saying the venue might not be available due to a double booking. Can you please confirm this immediately and let me know if there’s anything we need to do to ensure the booking is secure? This is very time-sensitive.',
    ],
    date: '2025-04-06 08:30 AM',
    status: 'Online',

    image: user,
    unread: false,
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },
  {
    id: '002',
    client: 'Mohammed Zainab',
    message: ['I have a payment issue'],
    date: '2025-04-06 09:00 AM',
    status: 'Offline',

    image: user,
    unread: false,
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '003',
    client: 'Abdullahi Nafisa',
    message: ['I need to reschedule my event'],
    date: '2025-04-06 10:30 AM',
    status: 'Offline',

    image: user,
    unread: false,
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '004',
    client: 'Jibril Amina',
    message: [
      'I need to reschedule my event',
      "Hello, I'd like to inquire about your wedding photography package for my wedding on July 20th.",
    ],
    date: '2025-04-06 12:30 AM',
    status: 'Online',

    image: user,
    unread: true,
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },

  {
    id: '005',
    client: 'Abubakar Khadija',
    message: ['I need to reschedule my event'],
    date: '2025-04-06 01:30 AM',
    status: 'Offline',

    image: user,
    unread: false,
    reply:
      'Hi Michael, Thank you for reaching out. I understand how stressful this situation can be, and I apologize for the confusion. I’ve reviewed your booking and confirmed that your venue is available and your reservation is secure. There is no double booking issue. You’re all set for the event on the 15th. If you need further assistance, please let me know.',
  },
];

interface ChatListProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}
const ChatList = ({ selectedId, setSelectedId }: ChatListProps) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      search
        ? data.filter((item) => {
            const messageText = Array.isArray(item.message) ? item.message.join(' ') : item.message;
            return (
              item.client.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
              messageText.trim().toLowerCase().includes(search.trim().toLowerCase())
            );
          })
        : data,
    );
  }, [search]);

  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-4">
      <div className="flex items-center gap-3 rounded-md border px-3 py-2">
        <FaSearch className="text-gray-500" />
        <input
          className="flex-1 border-none bg-transparent outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="mt-4 flex-1 space-y-2 overflow-y-auto pr-2">
        {filteredData.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`flex w-full items-start justify-between gap-3 rounded-lg p-2 text-left transition
                ${isSelected ? 'border bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.client}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p
                    className={`truncate font-Rubik text-xs ${
                      item.unread ? 'font-bold' : 'font-semibold text-gray-800'
                    }`}
                  >
                    {item.client}
                  </p>
                  <p className="truncate font-Rubik text-xs text-gray-500">
                    {(Array.isArray(item.message)
                      ? item.message[item.message.length - 1]
                      : item.message
                    ).slice(0, 20)}
                    ...
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end text-xs text-gray-500">
                <span>{format(new Date(item.date), 'p')}</span>
                {item.unread && (
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    {Array.isArray(item.message) ? item.message.length : 1}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </ul>
    </div>
  );
};
export default ChatList;
