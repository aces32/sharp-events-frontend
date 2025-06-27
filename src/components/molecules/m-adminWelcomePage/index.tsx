import Logo from 'assets/Icon/logo';
import Button from 'components/atoms/a-button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../m-progress';

const AdminWelcomePage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(100);
  const handleFinish = () => {
    setProgress(0);
    navigate('/login');
  };
  return (
    <div className="relative flex h-screen w-full items-center justify-center pt-10 text-center ">
      <div className="relative h-full w-full px-5 md:w-3/4  lg:w-[42%] lg:px-0 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">WELCOME TO SHARPEVENT</h3>
        <p className="text-base font-semibold">Manage your bookings and events in one place</p>
        <Button
          label="finish Up"
          type="button"
          className="mt-5 w-full"
          handleClick={handleFinish}
        />
        <ProgressBar progress={progress} segments={5} className="mt-24  px-5 md:mt-20 lg:px-0" />
      </div>
    </div>
  );
};

export default AdminWelcomePage;
