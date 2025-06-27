import EventImage from 'assets/images/event-host.png';
import Button from 'components/atoms/a-button';

const LandingSectionFour = () => {
  return (
    <section className=" items-center justify-center px-7 py-5 lg:flex">
      <section className="flex flex-wrap space-x-5 md:p-20 lg:w-[95%]">
        <div className="size-full lg:w-[45%]">
          <img src={EventImage} alt="memory" className="object-fill" />
        </div>
        <div className="flex items-center justify-center pt-8 md:w-full lg:w-[45%]">
          <div className="">
            <p className="font-Roboto  text-[2rem] font-semibold leading-[42px] md:text-[3rem] md:leading-[63.3px]">
              Become an event host and earn
            </p>
            <p className="pt-5  font-Roboto text-[1.5rem] font-medium leading-[28.13px] text-[#434343] md:pt-10">
              Earn an extra income by uploading your space to open doors to personal and
              professional gatherings and events.
              <br />
              Stay organized, manage leads and track your earnings.
            </p>
            <div className=" ">
              <Button
                type="button"
                label="List Your Space"
                className="mt-8 py-[0.635rem] font-Inter text-[2rem] font-bold  leading-[2.421rem] lg:w-4/5  "
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingSectionFour;
