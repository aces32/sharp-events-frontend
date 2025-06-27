/* eslint-disable react/no-danger */
import { useNavigate } from 'react-router-dom';

interface CardCardProps {
  image: any;
  id: string;

  name: string;
  description: string;
  address: string;
  state: string;
  facility: number;
  price: number;
}

const EventsCard = ({
  image,
  name,
  description,
  id,
  address,
  state,
  facility,
  price,
}: CardCardProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`event-details/${id}`);
  };
  return (
    <div className="lp:w-[19rem] m-2 w-80 space-y-2 rounded-3xl bg-white p-2 shadow-md">
      <img src={image} alt="poster" className="h-[12.1rem] w-full rounded-3xl" />

      <p className=" line-clamp-2 h-12 text-[1rem] font-[500] uppercase text-[#000]">{name}</p>
      <p className=" line-clamp-2 h-12 text-[0.9rem]  uppercase text-gray-500">
        {address} , {state}
      </p>
      <p
        id="popin"
        className="line-clamp-3 h-16 text-[0.9rem] text-[#585570]"
        dangerouslySetInnerHTML={{
          __html: description || '',
        }}
      />

      <div className="flex justify-between pb-2 ">
        <button
          type="button"
          className="flex space-x-4 rounded-lg bg-primary px-4 py-2 text-white"
          onClick={handleNavigate}
        >
          <p>View</p>{' '}
        </button>
        <p className="px-4 py-2">
          {' '}
          {facility} {facility > 1 ? 'Facilites' : 'Facility'}{' '}
        </p>
        <p className="px-4 py-2"> ₦ {price?.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default EventsCard;
