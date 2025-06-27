import Logo from 'assets/Icon/logo';
import Button from 'components/atoms/a-button';
import { useEffect, useRef, useState } from 'react';

import useFetchHook from 'hooks/useFetchHook';
import { toast } from 'react-toastify';
import ProgressBar from '../m-progress';

interface Props {
  setUserTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'welcome'>>;
  email: string;
}
const UserVerification = ({ setUserTab, email }: Props) => {
  const [timer, setTimer] = useState(300);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [progress, setProgress] = useState(75);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);
  const [, verifyOtp] = useFetchHook('authentication/confirm-registration');
  const [, resendOtp] = useFetchHook('otp/generateOtp');
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
    const otpString = otp.join('');
    const response = await verifyOtp.Post({
      email,
      otp: otpString,
    });
    console.log(response);
    if (response?.code === '00') {
      setUserTab('welcome');
      setProgress(100);
      toast(response?.message);
    } else {
      toast(response?.message);
    }
  };
  const handleResend = async () => {
    const response = await resendOtp.Post({
      email,
    });
    console.log(response);
    if (response?.code === '00') {
      toast(response?.message);
      setResendDisabled(true);
      setTimer(300);
    } else {
      toast(response?.message);
    }
  };
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 1000 * 60 * 5;

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = Math.max(0, Math.floor((endTime - currentTime) / 1000));
      setTimer(remainingTime);

      if (resendDisabled && remainingTime === 0) {
        setResendDisabled(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
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
          Didn’t get a code?
          <button
            type="button"
            onClick={handleResend}
            disabled={resendDisabled}
            className={`ml-1 font-semibold ${
              resendDisabled ? 'cursor-not-allowed text-gray-400' : 'text-primary'
            }`}
          >
            {resendDisabled ? `Resend in ${formatTime(timer)}` : 'Click to resend'}
          </button>
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
        <ProgressBar progress={progress} className="mt-24 px-5  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default UserVerification;
