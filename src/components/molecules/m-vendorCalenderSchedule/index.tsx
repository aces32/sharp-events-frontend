import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import userImage from 'assets/images/user-image.png';
import RenderEventContent from '../m-renderEventContent';

const Data = [
  {
    id: '1',
    title: 'Wedding',
    start: '2025-06-01T09:00:00',
    end: '2025-06-01T11:00:00',
    backgroundColor: '#22c55e',
    avatars: [userImage, userImage],
  },
  {
    id: '2',
    title: 'Choosing A Cookware Set',
    start: '2025-06-04T13:00:00',
    end: '2025-06-04T15:00:00',
    backgroundColor: '#facc15',
    avatars: [userImage],
  },
  {
    id: '3',
    title: 'Video Chat',
    start: '2025-06-07T16:00:00',
    end: '2025-06-07T17:00:00',
    backgroundColor: '#60a5fa',
    avatars: [userImage, userImage, userImage],
  },
];

const VendorCalenderSchedule = () => {
  return (
    <div className="w-full">
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'today',
          center: 'prev title next',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        allDaySlot={false}
        slotMinTime="09:00:00"
        slotMaxTime="18:00:00"
        events={Data}
        eventContent={RenderEventContent}
        height="auto"
      />
    </div>
  );
};

export default VendorCalenderSchedule;
