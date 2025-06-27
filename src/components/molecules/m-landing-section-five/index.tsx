import ClientVector from 'assets/Icon/client-vector';
import ReviewCard from '../m-review-card';

const LandingSectionFive = () => {
  return (
    <section className="bg-layoutbg">
      <section className="px-7 py-5">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <ClientVector /> <ClientVector />
          </div>
          <p className="font-Roboto  text-[3rem] font-bold text-[#434343]">What our clients say</p>
        </div>
        <div className="hidden py-24 lg:block">
          <div className=" flex flex-row flex-wrap justify-center  px-8 ">
            {[1, 2, 3].map((data: number) => (
              <ReviewCard key={data} />
            ))}
          </div>
          <div className=" flex flex-row flex-wrap justify-center pl-20  ">
            {[1, 2, 3].map((data: number) => (
              <ReviewCard key={data} />
            ))}
          </div>
        </div>
        <div className=" flex flex-row flex-wrap justify-center px-8 py-24 lg:hidden">
          {[1, 2, 3, 4, 5, 6].map((data: number) => (
            <ReviewCard key={data} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default LandingSectionFive;
