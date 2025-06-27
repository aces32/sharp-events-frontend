import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

interface ViewEventAddressProps {
  address?: {
    address: string;
    latitude: string;
    longtitude: string;
    area: string;
    city: string;
    country: string;
    state: { name: string; id: number };
  };
}
const ViewEventAddress = ({ address }: ViewEventAddressProps) => {
  return (
    <div className="my-5">
      <h3 className="font-Rubik text-2xl font-bold">Address</h3>

      <div className=" grid grid-cols-2 gap-6 md:gap-2">
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Address</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {address?.address ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Area</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {address?.area ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">City</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {address?.city ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Country</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {address?.country ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">State</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {address?.state?.name ?? 'NA'}
          </p>
        </div>
      </div>

      <div className="mt-5 h-[50dvh]">
        <APIProvider apiKey="AIzaSyBWI4bfxL0x2CXiggGP1px6AUKi0x8g1c4">
          <Map
            defaultZoom={3}
            zoom={15}
            center={{
              lat: address?.latitude ? parseFloat(address?.latitude) : 6.458985,
              lng: address?.longtitude ? parseFloat(address?.longtitude) : 3.601521,
            }}
          >
            <Marker
              position={{
                lat: address?.latitude ? parseFloat(address?.latitude) : 6.458985,
                lng: address?.longtitude ? parseFloat(address?.longtitude) : 3.601521,
              }}
            />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default ViewEventAddress;
