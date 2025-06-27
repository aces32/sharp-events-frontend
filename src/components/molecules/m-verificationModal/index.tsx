import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VerificationModal = ({ show }: { show: boolean }) => {
  const navigate = useNavigate();
  return (
    <div>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-3 w-full max-w-xl rounded bg-white p-6 shadow-lg md:mx-0">
            <div className="flex w-full items-center justify-between py-2 ">
              <div className="flex flex-col items-center gap-3 text-center">
                <FaCheckCircle className=" text-4xl text-[#00EA00] " />
                <h3 className="font-Rubik text-lg font-bold">
                  Verification Submitted Successfully!
                </h3>
                <p className="font-Rubik text-sm font-medium">
                  Your details are now under review. We will notify you via email within 24/48
                  business hours/days once your identity and bank account are verified. Thank you
                  for your patience!
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/dashboard/vendor')}
                  className="mt-5 w-full rounded-lg bg-[#008000] py-2 font-Rubik text-sm font-semibold text-white"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationModal;
