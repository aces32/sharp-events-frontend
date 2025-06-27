import { useEffect } from 'react';
import useFetchHook from 'hooks/useFetchHook';
import NewEventsCard from '../m-new-events-card';

interface NearByCenterProps {
  eventCenterLocations?: {
    longtitude: string;
    latitude: string;
  };
}
const NearByCenter = ({ eventCenterLocations }: NearByCenterProps) => {
  const [data, FetchNearByCenter] = useFetchHook('event-center/get-nearby-eventcenter');
  useEffect(() => {
    if (eventCenterLocations?.latitude && eventCenterLocations?.longtitude) {
      const queryString = new URLSearchParams({
        latitude: eventCenterLocations.latitude,
        longtitude: eventCenterLocations.longtitude,
      }).toString();
      FetchNearByCenter.GetPayload(queryString);
    }
  }, [eventCenterLocations]);

  return (
    <div className="py-5">
      <h3 className="font-Rubik text-2xl font-semibold">Nearby Similar Event Center</h3>
      <div className="flex flex-col justify-start gap-4 md:flex-row">
        {Array.isArray(data?.data)
          ? Array.from(
              new Map(
                data.data.map((center: { name: string }) => [center.name.toLowerCase(), center]),
              ).values(),
            )
              .sort((a, b) =>
                (a as { name: string }).name.localeCompare((b as { name: string }).name),
              )
              .map((item: any) => (
                <NewEventsCard
                  price={item.price}
                  capacity={item.capacity}
                  //   state={item.state.name}
                  name={item.name}
                  image={item.images?.at(0)?.url}
                  id={item.id ?? 'ef872a25-3c1e-45c5-72be-08dbb7c44a43'}
                  key={item.id}
                />
              ))
          : []}
      </div>
    </div>
  );
};
export default NearByCenter;
