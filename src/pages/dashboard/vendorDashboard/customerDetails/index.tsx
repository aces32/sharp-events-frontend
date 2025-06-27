import Button from 'components/atoms/a-button';
import ProgressBar from 'components/molecules/m-progress';
import VerificationModal from 'components/molecules/m-verificationModal';
import { useState } from 'react';

const CustomerDetails = ({
  setTab,
}: {
  setTab: (tab: 'verify' | 'identity' | 'image' | 'details') => void;
}) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(100);
  return (
    <div className="relative w-full rounded-lg bg-white px-3 py-9  text-center md:px-10 lg:px-0 ">
      <div className=" m-auto w-full lg:w-2/3">
        <div className="mb-8">
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h3 className=" pb-3 font-Rubik text-2xl font-bold">Review your information</h3>
            <p className="font-Rubik text-base font-semibold">
              Please review all the information you have provided. Ensure everything is accurate
              before submitting.
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-5 text-left">
            <h3 className="border-b border-[#0000004D] pb-2 font-Rubik text-2xl font-bold">
              Identity Details
            </h3>
            <table className="w-full font-Rubik text-base font-semibold">
              <tr>
                <td>Name</td>
                <td className="text-right">Musa Hajara</td>
              </tr>

              <tr>
                <td>Email address</td>
                <td className="text-right">musahajara@gmail.com</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td className="text-right">DD/MM/YY</td>
              </tr>
              <tr>
                <td>Address</td>
                <td className="text-right">7, only godknows street, we’ll meet later.</td>
              </tr>
            </table>

            <h3 className="border-b border-[#0000004D] pb-2 font-Rubik text-2xl font-bold">
              Proof of Identity
            </h3>
            <table className="w-full font-Rubik text-base font-semibold">
              <tr>
                <td>Document Type</td>
                <td className="text-right">National ID Card</td>
              </tr>
              <tr>
                <td>Document Number</td>
                <td className="text-right">**********</td>
              </tr>
              <tr>
                <td>Uploaded Documents</td>
                <td className="text-right">Hajara</td>
              </tr>
            </table>

            <h3 className="border-b border-[#0000004D] pb-2 font-Rubik text-2xl font-bold">
              Payout Bank Account Details
            </h3>
            <table className="w-full font-Rubik text-base font-semibold">
              <tr>
                <td>Bank Name</td>
                <td className="text-right">Access Bank Plc</td>
              </tr>
              <tr>
                <td>Account name</td>
                <td className="text-right">Musa Hajara</td>
              </tr>
              <tr>
                <td>Account Number</td>
                <td className="text-right">******1234</td>
              </tr>
            </table>
          </div>
          <p className="pt-5 text-left font-Rubik text-base font-medium capitalize">
            By clicking &#39;Complete Verification&#39;, you agree to Sharp Event&#39;s{' '}
            <span className="text-primary">Terms of Service </span> and{' '}
            <span className="text-primary">Privacy Policy</span>
          </p>
          <div className="flex w-full items-center justify-between gap-x-10">
            <Button
              label="Back"
              type="button"
              handleClick={() => {
                setTab('image');
                setProgress(75);
              }}
              className="w-1/2 border border-primary bg-white !text-primary"
            />
            <Button
              label="Complete"
              type="button"
              className="w-1/2"
              handleClick={() => setShow(true)}
            />
          </div>
        </div>
      </div>
      <VerificationModal show={show} />
    </div>
  );
};

export default CustomerDetails;
