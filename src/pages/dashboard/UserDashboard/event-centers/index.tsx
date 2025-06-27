import useFetchHook from 'hooks/useFetchHook';
import { useEffect, useState } from 'react';
import Toast from 'components/atoms/a-Toast';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/a-button';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import DeleteEventModal from 'components/molecules/m-deleteEventModal';
// import { useAppSelector } from 'store';

const EventCenters = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const [eventCenters, fetchEventCenters] = useFetchHook('event-center/get-company-event-center');
  const [, deleteEventCenter] = useFetchHook('event-center/delete-event-center');
  // const { companyEmail, eventUserId } = useAppSelector((state) => state.user);
  // const { eventUserId } = useAppSelector((state) => state.user);

  useEffect(() => {
    fetchEventCenters.Get();
    // fetchEventCenters.Get(`companyEmail=${companyEmail}&page=1&size=10`);
  }, []);
  const handleDelete = async (id: string) => {
    const response = await deleteEventCenter.DeletePayload(id);
    if (response?.success) {
      Toast(response?.message, { type: 'success' });
      navigate(0);
    }
  };

  // console.log(eventCenters);
  return (
    <section className="w-full p-5">
      <DashboardHeader
        header="MY Event Center"
        title="Customize event center settings to suit your needs, including layout, services, and integrations"
        rightSection={
          <div className="flex items-center gap-5">
            <Button
              type="button"
              label="Create Event Center"
              handleClick={() => navigate('/dashboard/admin/settings')}
            />
          </div>
        }
      />

      <section className="my-5 grid w-full grid-cols-1  gap-10 rounded-lg bg-white px-3 py-9 text-secondaryText lg:grid-cols-2 lg:px-6 ">
        {eventCenters?.data?.map(
          (item: {
            name: string;
            id: string;
            images: { url: string }[];
            city: string;
            capacity: number;
            types: { id: string; name: string };
          }) => (
            <div key={item?.id} className="">
              <img src={item?.images?.at(0)?.url} alt="eventImage" className="h-80 w-full" />
              <div className="p-3">
                <div>
                  <p className=" font-Rubik text-base font-medium capitalize text-[#1E1E1ECC]">
                    {item?.types?.name}
                  </p>
                  <p className=" font-Rubik text-2xl font-bold text-[#1E1E1E]">{item?.name}</p>
                  <p className="font-Rubik text-xs font-medium text-[#1E1E1ECC]">
                    {item.capacity} guests
                  </p>
                </div>
                <div className="mt-3 grid w-full grid-cols-3 gap-5">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-[#008000] py-3 font-Rubik text-xs font-semibold text-[#008000]"
                    onClick={() => navigate(`/dashboard/admin/view-event/${item?.id}`)}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-[#008000] py-3 font-Rubik text-xs font-semibold text-[#008000]"
                    onClick={() => navigate(`/dashboard/admin/tour/${item?.id}`)}
                  >
                    View Tour
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-[#FF0000] py-3 font-Rubik text-xs font-semibold text-[#FF0000]"
                    onClick={() => {
                      setSelectedEventId(item?.id);
                      setIsOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </section>
      <DeleteEventModal
        isOpen={isOpen}
        selectedEventId={selectedEventId}
        onDelete={handleDelete}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default EventCenters;
