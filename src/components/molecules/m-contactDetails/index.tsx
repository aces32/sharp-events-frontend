import Input from 'components/atoms/a-input';
import { FaTimes } from 'react-icons/fa';

interface ContactDetailsProps {
  showContact: boolean;
  onClose: () => void;
  register: any;
}
const ContactDetails = ({ showContact, onClose, register }: ContactDetailsProps) => {
  return (
    <div className="w-full">
      {showContact && (
        <div
          className="flex w-full flex-col gap-3  rounded-lg border border-[#00000066] bg-[#F7F9FA] p-2
        "
        >
          <div className="flex w-full items-center justify-between">
            <h3 className="font-Rubik text-base font-bold capitalize">your contact details</h3>
            <button type="button" aria-label="close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          <div className="flex w-full items-center justify-between capitalize">
            <p className="font-Rubik text-xs font-medium">
              For any enquiry, reach out via email at
            </p>
            <Input
              className="rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              type="email"
              name="email"
              register={register}
              placeholder="your email"
            />
            <p className="font-Rubik text-xs font-medium">Call on</p>
            <Input
              className=" rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              type="text"
              name="phone"
              register={register}
              placeholder="Phone number"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
