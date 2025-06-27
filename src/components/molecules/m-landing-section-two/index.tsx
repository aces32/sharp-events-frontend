// import { v4 } from 'uuid';
import MyTabs, { EventType } from 'hoc/Tabs';

import useFetchHook from 'hooks/useFetchHook';
import { useEffect } from 'react';
import NewEventsCard from 'components/molecules/m-new-events-card';

const LandingSectionTwo = () => {
  // const [data, FetchAllEvents] = useFetchHook('EventCenter/GetAllEventCenters?page=1&size=10');
  const [data, FetchAllEvents] = useFetchHook('event-center/get-all-event-center');
  const [eventType, getEventType] = useFetchHook('event-center/get-all-event-types');
  useEffect(() => {
    FetchAllEvents.Get();
    getEventType.Get();
  }, []);

  return (
    <section className="px-7 py-5">
      <section className="space-y-4  py-10 md:p-10 md:py-0">
        <p className="text-center font-Roboto text-[2rem] font-bold leading-[56.25px] text-black md:text-[3rem]">
          Find, Book, Meet And Create Memories
        </p>
        <MyTabs
          tabList={
            Array.from(
              new Map(
                (eventType?.data || []).map((item: EventType) => [item.name.toLowerCase(), item]),
              ).values(),
            )
              .slice(0, 21)
              .sort((a, b) =>
                (a as { name: string }).name.localeCompare((b as { name: string }).name),
              ) as EventType[]
          }
        />
        <div className="flex flex-row flex-wrap justify-start">
          {Array.isArray(data?.data?.eventCenters)
            ? Array.from(
                new Map(
                  data.data.eventCenters.map((center: { name: string }) => [
                    center.name.toLowerCase(),
                    center,
                  ]),
                ).values(),
              )
                .sort((a, b) =>
                  (a as { name: string }).name.localeCompare((b as { name: string }).name),
                )
                .map((item: any) => (
                  <NewEventsCard
                    price={item.price}
                    capacity={item.capacity}
                    state={item.state.name}
                    name={item.name}
                    image={item.images?.at(0)?.url}
                    id={item.id ?? 'ef872a25-3c1e-45c5-72be-08dbb7c44a43'}
                    key={item.id}
                  />
                ))
            : []}
        </div>
      </section>
    </section>
  );
};

export default LandingSectionTwo;
