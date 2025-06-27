import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import DynamicReview from 'components/molecules/m-dynamic-review';

interface CardCardProps {
  image: any;
  id: string;

  name: string;

  state?: string;
  capacity: number;
  price: number;
}

const NewEventsCard = ({
  image,
  name,

  id,

  state,
  capacity,
  price,
}: CardCardProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event-details/${id}`);
  };
  const randomRating = (Math.random() * 5 + 0.5).toFixed(1);

  return (
    <div
      className="   m-3 w-[21rem] cursor-pointer rounded-3xl bg-white drop-shadow-md"
      onClick={handleNavigate}
      role="none"
    >
      <img src={image} alt="poster" className=" z-0 h-[12.1rem] w-full rounded-t-3xl" />

      <div className=" z-20 -mt-10  w-full space-y-2 rounded-3xl bg-white p-2">
        <p className=" line-clamp-2 h-12 font-Roboto text-[1.2rem] font-bold uppercase text-[#000]">
          {name}
        </p>
        <div className="flex divide-x-2 divide-[#4B4B4B] font-Inter font-bold text-[#4B4B4B] ">
          <p className=" line-clamp-2 pr-3 text-[0.9rem]  uppercase text-gray-500">{state}</p>
          <p className=" line-clamp-2 pl-3 text-[0.9rem]  uppercase text-gray-500">Midtown</p>
        </div>

        <div className="flex justify-between pb-2 ">
          <p className="font-Inter font-semibold text-black"> ₦ {price?.toLocaleString()}</p>
          <p className=" flex  ">
            {' '}
            <span className="pt-0.5 ">
              <FaUserAlt className="text-[#4B4B4B]" />
            </span>
            <span className="px-3 font-Inter font-bold text-[#4B4B4B]">{capacity}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <DynamicReview AverageRating={randomRating} />{' '}
          <span className="    pt-2 font-Inter  text-[0.6rem]  font-semibold text-[#4B4B4B] lg:pt-1.5 lg:text-[0.8rem]">
            Respond within an hour
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewEventsCard;
