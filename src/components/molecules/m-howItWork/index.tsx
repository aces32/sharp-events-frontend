import Steps from '../m-steps';

const HowItWork = () => {
  const Data = [
    {
      id: 1,
      header: 'Find Your Perfect Match',
      title: 'Step 1: Discover & Connect',
      text: 'Explore a curated network of stunning event centers and trusted service providers across Nigeria.',
    },
    {
      id: 2,
      header: 'Streamline Your Plans',
      title: 'Step 2: Plan & Collaborate',
      text: 'Connect directly with venues and professionals, discuss details, and receive tailored quotes effortlessly.',
    },
    {
      id: 3,
      header: 'Bring Your Vision to Life',
      title: 'Step 3: Execute & Celebrate',
      text: 'Secure your bookings and work with vetted experts to create a truly unforgettable and seamless event experience.s',
    },
  ];
  return (
    <div className="w-full">
      <div className=" m-auto flex flex-col items-center justify-center gap-y-3 text-center md:w-3/4 lg:w-1/2">
        <p className="mb-5 font-Rubik text-sm font-bold">HOW IT WORKS</p>
        <h3 className="font-Rubik text-4xl font-bold">Your Event Journey in 3 Simple Steps</h3>
        <p className="px-5 font-Roboto text-lg font-medium">
          Sharp Event simplifies every aspect of planning, managing, and connecting for your next
          unforgettable occasion.
        </p>
      </div>
      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:gap-10">
        {Data.map((item) => {
          return <Steps key={item.id} header={item.header} title={item.title} text={item.text} />;
        })}
      </div>
      <div className="my-10 h-96 w-full   rounded-lg bg-[#0166FF] ">
        <div className="m-auto flex h-full flex-col items-center justify-center gap-y-10 text-center text-white md:w-1/2">
          <p className="font-Rubik text-sm font-bold">Ready to Get Started?</p>
          <h3 className="font-Rubik text-5xl font-bold capitalize">
            Where Your dreams become reality
          </h3>
          <button
            className="rounded-lg bg-white px-9 py-6 font-Inter text-base font-bold text-primaryText"
            type="button"
          >
            Start Your Event Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
