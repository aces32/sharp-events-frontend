import SpecialModal from 'hoc/special-modal';
import { Dispatch, SetStateAction } from 'react';

interface EventCenterImages {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  eventCenterImages: Array<{
    id: string;
    url: string;
  }>;
}

const DisplayAllEventImages = ({ isOpen, setIsOpen, eventCenterImages }: EventCenterImages) => {
  return (
    <SpecialModal isOpen={isOpen} setIsOpen={setIsOpen} title="">
      <section className="space-y-4 px-5 pb-5">
        {eventCenterImages?.map((images) => (
          <img
            src={images?.url}
            key={images?.id}
            className="size-full rounded-md border object-cover"
            alt="even center piture"
          />
        ))}
      </section>
    </SpecialModal>
  );
};
export default DisplayAllEventImages;
