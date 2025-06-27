import Carousel from 'components/atoms/a-carousel';
import useFetchHook from 'hooks/useFetchHook';
import { useEffect } from 'react';

const LandingSectionThree = () => {
  const [state, getState] = useFetchHook('states/get-all-states');
  useEffect(() => {
    getState.Get();
  }, []);
  const targetStates = ['Lagos', 'Abuja (FCT)', 'Ogun', 'Kano', 'Rivers', 'Oyo'];
  const stateNames =
    state?.data
      ?.filter((stateEl: { name: string; id: string }) => targetStates.includes(stateEl.name))
      ?.map((states: { name: string; id: string }) => ({
        name: states.name,
        id: states.id,
      })) || [];
  console.log(stateNames);
  return (
    <section className="px-7 py-5">
      <section className="space-y-10 md:p-10 lg:pt-20">
        <p className="text-center font-Roboto   text-[1.5rem] font-bold leading-[30px] text-black md:text-[3rem] md:leading-[56.25px]">
          Search For Exclusive Event Based On Location
        </p>
        <div className="m-auto w-auto lg:w-4/5">
          <Carousel locations={stateNames} />
        </div>
      </section>
    </section>
  );
};
export default LandingSectionThree;
