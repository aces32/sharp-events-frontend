import Memory from 'assets/images/memory.png';
import DynamicReview from '../m-dynamic-review';

const ReviewCard = () => {
  const randomRating = (Math.random() * 5).toFixed(1);
  return (
    <div className="m-2 w-auto rounded-2xl border-none bg-white px-3 py-4 drop-shadow-lg md:w-[30%] lg:w-[30%]">
      <div className="flex flex-row">
        <div className="mt-1 size-[2.781rem]">
          <img src={Memory} alt="memory" className="rounded-full" />
        </div>
        <div className="ml-2">
          <p className=" font-Roboto text-[1.081rem] font-bold text-black ">Name of Users</p>
          <p className=" font-Roboto text-[0.987rem] font-semibold  text-[#000000]/50">
            Occupation
          </p>
        </div>
      </div>
      <div className="py-2">
        <DynamicReview AverageRating={randomRating} />
      </div>
      <div>
        <p className=" line-clamp-3 font-Roboto text-[1rem] font-medium leading-[1.248rem] text-[#000000]/70">
          I was a bit nervous about the process, but Sharp Event provided invaluable support. The
          memories i have with them are priceless.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
