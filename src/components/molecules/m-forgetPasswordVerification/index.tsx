import Logo from 'assets/Icon/logo';
import Button from 'components/atoms/a-button';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../m-progress';

interface Props {
  setForgetPasswordTab: React.Dispatch<
    React.SetStateAction<'details' | 'verify' | 'newPassword' | 'resetPassword'>
  >;
}
const ForgetPasswordVerification = ({ setForgetPasswordTab }: Props) => {
  const [progress, setProgress] = useState(50);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setForgetPasswordTab('newPassword');
    setProgress(75);
  };

  const isOtpComplete = otp.every((digit) => digit !== '');
  return (
    <div className="relative flex h-screen w-full items-center justify-center pt-10 text-center ">
      <div className="relative h-full w-full px-5 md:w-2/3 md:px-0 lg:w-2/5 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">Verify your email</h3>
        <p className="text-base font-semibold">Provide your email and choose a password</p>
        <div className="mt-5 flex w-full justify-center gap-x-3 ">
          {otp.map((digit, index) => {
            const id = `otp-${index}`;
            return (
              <input
                key={id}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                className={`h-12 w-12 rounded-xl border text-center text-xl font-bold focus:border-blue-500 focus:outline-none ${
                  digit ? 'border-blue-500' : 'border-gray-300'
                }`}
              />
            );
          })}
        </div>
        <p className="mt-3 text-sm font-semibold">
          Didn’t get a code?{' '}
          <Link to="/" className="cursor-pointer text-primary ">
            click to resend
          </Link>
        </p>
        <Button
          type="button"
          label="Continue"
          handleClick={handleSubmit}
          disabled={!isOtpComplete}
          className={`mt-5 w-full ${
            isOtpComplete ? 'bg-blue-600' : 'cursor-not-allowed bg-gray-400'
          }`}
        />
        <p className="pt-5 font-Rubik text-sm font-medium capitalize">
          Already have an account?{' '}
          <Link to="/login" className="text-primaryText">
            Log in
          </Link>
        </p>
        <ProgressBar progress={progress} className="px-5 md:px-0" />
      </div>
    </div>
  );
};

export default ForgetPasswordVerification;
