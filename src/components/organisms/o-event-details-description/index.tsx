interface DataProps {
  eventCenterTypes?: {
    price: number;
    capacity: number;
    sqaureFoot: number;
    yearBuilt: number;
    facilities: {
      facility: {
        name: string;
      };
      capacity: number;
      id: string;
    }[];
  };
  rating: string;
}

const EventDetailsDescription = ({ eventCenterTypes, rating }: DataProps) => {
  return (
    <div className="space-y-4 py-4">
      <p className="font-Rubik text-[0.875rem] font-bold"> Event Description</p>
      <div className=" grid grid-cols-2 gap-6 md:gap-2">
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Price</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            ₦{eventCenterTypes?.price?.toLocaleString()}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Seat</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {eventCenterTypes?.capacity ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Event Size</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {eventCenterTypes?.sqaureFoot ?? 'NA'}
          </p>
        </div>
        {eventCenterTypes?.facilities?.map(
          (items: { id: string; facility: { name: string }; capacity: number }) => (
            <div key={items?.id} className="grid grid-cols-4 ">
              <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">
                {items?.facility.name}
              </p>
              <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
                {items?.capacity}
              </p>
            </div>
          ),
        )}
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Year</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
            {' '}
            {eventCenterTypes?.yearBuilt ?? 'NA'}
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Rating</p>
          <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]"> {rating}</p>
        </div>
      </div>
    </div>
  );
};
export default EventDetailsDescription;
