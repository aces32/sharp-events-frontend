import user from 'assets/images/profile.png';
import { format } from 'date-fns';

interface ChatDashboardProps {
  selectedId: string | null;
}
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
const ChatDashboard = ({ selectedId }: ChatDashboardProps) => {
  const selectedChat = data.find((chat) => chat.id === selectedId);
  if (!selectedChat) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border bg-white p-6">
        <p className="text-gray-400">Select a conversation to view messages</p>
      </div>
    );
  }

  if (!selectedChat) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border bg-white p-6">
        <p className="text-gray-400">Select a conversation…</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-lg border bg-white">
      <div className="flex items-center gap-4 border-b px-6 py-4">
        <img
          src={selectedChat.image}
          alt={selectedChat.client}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-Rubik font-bold">{selectedChat.client}</p>
          <p className="text-sm text-gray-500">{selectedChat.status}</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-6 py-4">
        <div className="flex items-start gap-4">
          <img
            src={selectedChat.image}
            alt={selectedChat.client}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs text-gray-500">{format(new Date(selectedChat.date), 'p')}</p>
            {(Array.isArray(selectedChat.message)
              ? selectedChat.message
              : [selectedChat.message]
            ).map((msg) => (
              <div
                key={msg}
                className="mt-2 max-w-md rounded-lg bg-[#F9F9F9] px-4 py-3 font-Rubik text-base font-medium text-[#00000099]"
              >
                {msg}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-md rounded-lg bg-[#F9F9F9] px-4 py-3 font-Rubik text-base font-medium text-[#00000099]">
            {selectedChat.reply}
          </div>
        </div>
      </div>

      <form className="border-t px-6 py-4">
        <div className="flex gap-3">
          <textarea
            rows={1}
            className="flex-1 resize-none rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Type your reply…"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ChatDashboard;
