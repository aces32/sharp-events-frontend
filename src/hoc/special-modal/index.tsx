/* eslint-disable jsx-a11y/control-has-associated-label */
import { Dispatch, SetStateAction, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import SpecialCancel from 'assets/Icon/specialCancel';
import { FaTimes } from 'react-icons/fa';

interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  file?: boolean;
}

const SpecialModal = ({ title, isOpen, setIsOpen, children, file }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 opacity-50" aria-hidden="true" />
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center p-4  font-sans">
              <Dialog.Panel
                className={` mx-auto rounded-2xl bg-white px-7 py-5 shadow-[0px_30px_40px_0px_rgba(0,0,0,0.05)] ${
                  file ? 'w-[55rem]' : ' w-full md:w-2/3 lg:w-2/5'
                }`}
              >
                <div className=" flex flex-row-reverse items-center justify-between">
                  <button
                    type="button"
                    className="rounded-md border-2 bg-white p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes />
                  </button>
                  <Dialog.Title className=" font-Inter text-xl font-bold text-black">
                    <p className=" ">{title}</p>
                  </Dialog.Title>
                </div>
                <div className="">{children}</div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SpecialModal;
