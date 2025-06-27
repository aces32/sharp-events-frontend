import Button from 'components/atoms/a-button';
import Subscribe from 'assets/images/subscribe.png';

const LandingSectionSix = () => {
  const handleClick = () => {};

  return (
    <section className="px-7 py-5">
      <section className="mb-10 mt-8 lg:flex lg:justify-center lg:px-10">
        <div className=" lg:flex lg:flex-row">
          <img
            src={Subscribe}
            alt="poster"
            className="w-full object-cover lg:z-40 lg:h-[31rem] lg:w-[25rem] "
          />
          <div className="my-5 w-auto self-end rounded-xl border bg-primary p-5 lg:-left-8 lg:-top-2 lg:z-0 lg:my-0 lg:items-center lg:justify-center lg:rounded-r-2xl   lg:p-8">
            <div className="flex items-center justify-center">
              <h1 className="  text-center  font-Roboto text-[1.5rem]  font-bold text-white lg:w-4/5 lg:text-[3rem]">
                Get the latest news and special offers for you
              </h1>
            </div>
            <form onSubmit={handleClick} className="mt-8 flex items-center justify-center ">
              <div className=" relative m-auto w-full rounded-xl  text-primary lg:w-4/5">
                <input
                  className="ml-2 mt-1  h-16 w-full  rounded-xl lg:h-[4.823rem] "
                  type="text"
                />
                <Button
                  type="submit"
                  label="Subscribe"
                  className=" absolute right-0 top-4 bg-[#2E6DFE] text-center font-Inter text-[1rem]  font-bold lg:top-5 lg:text-[1.25rem] "
                  handleClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingSectionSix;
