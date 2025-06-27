import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

interface DataProps {
  eventCenterLocations?: {
    address: string;
    city: string;
    area: string;
    state: {
      name: string;
    };
    country: string;
    longtitude: string;
    latitude: string;
  };
}

const EventDetailsAddress = ({ eventCenterLocations }: DataProps) => {
  return (
    <div className="space-y-4 py-4">
      <p className="font-Rubik text-[0.875rem] font-bold"> Address</p>
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">Address</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterLocations?.address}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">Zip/Postal Code</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">NA</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">City</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterLocations?.city}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">Area</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterLocations?.area}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">State</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterLocations?.state?.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className=" font-Rubik text-[0.75rem] font-semibold">Country</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterLocations?.country}
          </p>
        </div>
      </div>
      <div className="h-[50dvh]">
        <APIProvider apiKey="AIzaSyBWI4bfxL0x2CXiggGP1px6AUKi0x8g1c4">
          <Map
            defaultZoom={3}
            zoom={15}
            center={{
              lat: eventCenterLocations?.latitude
                ? parseFloat(eventCenterLocations?.latitude)
                : 6.458985,
              lng: eventCenterLocations?.longtitude
                ? parseFloat(eventCenterLocations?.longtitude)
                : 3.601521,
            }}
          >
            <Marker
              position={{
                lat: eventCenterLocations?.latitude
                  ? parseFloat(eventCenterLocations?.latitude)
                  : 6.458985,
                lng: eventCenterLocations?.longtitude
                  ? parseFloat(eventCenterLocations?.longtitude)
                  : 3.601521,
              }}
            />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};
export default EventDetailsAddress;
