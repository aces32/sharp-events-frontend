import { useState } from 'react';
import { path } from 'ramda';
import { FaChevronDown, FaChevronUp, FaPlus, FaTimes } from 'react-icons/fa';
import LabeledInput from '../m-labeled-input';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  register: any;
  errors: any;
}
const AddClientModal = ({ isOpen, onClose, register, errors }: AddClientModalProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
            <div className="flex w-full items-center justify-between border-b py-2 ">
              <h4 className="font-Rubik text-base font-bold">Add New client</h4>
              <button type="button" aria-label="close" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <div className="flex w-full items-center justify-between py-4 ">
              <h4 className="font-Rubik text-base font-bold">Basic information</h4>
              <button type="button" aria-label="close" onClick={() => setShow(!show)}>
                {show ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {show && (
              <div>
                <label
                  htmlFor="upload"
                  className="flex w-full cursor-pointer flex-col items-center gap-2 border bg-transparent px-4 py-8 font-Rubik text-sm font-medium text-[#00000099]"
                >
                  <input
                    name="upload"
                    id="upload"
                    type="file"
                    {...register('upload')}
                    className="hidden"
                  />
                  <FaPlus />
                  <p>Upload Logo</p>
                  <p>JPG or PHG, dimensions 1080 x 1080px and file size up to 20MB</p>
                </label>
                <div
                  className=" grid w-full grid-cols-1 flex-col justify-between gap-x-5 gap-y-2 py-3 text-left md:grid-cols-2
                "
                >
                  <LabeledInput
                    label="Client name*"
                    name="clientName"
                    id="clientName"
                    type="text"
                    htmlFor="clientName"
                    register={register}
                    placeholder="BK-2025-001"
                    labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                    className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                    error={path(['clientName', 'message'], errors)}
                  />
                  <LabeledInput
                    label="Client email*"
                    name="clientEmail"
                    id="clientEmail"
                    type="email"
                    htmlFor="clientEmail"
                    register={register}
                    placeholder="sharp event center"
                    labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                    className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                    error={path(['clientEmail', 'message'], errors)}
                  />
                  <LabeledInput
                    label="Client id*"
                    name="clientId"
                    id="clientId"
                    type="text"
                    htmlFor="clientId"
                    register={register}
                    placeholder="sharp event center"
                    labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                    className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                    error={path(['clientId', 'message'], errors)}
                  />
                  <LabeledInput
                    label="Phone number*"
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    htmlFor="phoneNumber"
                    register={register}
                    placeholder="sharp event center"
                    labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                    className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                    error={path(['phoneNumber', 'message'], errors)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClientModal;
