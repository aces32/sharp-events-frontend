import Admin from 'assets/Icon/admin';

import User from 'assets/Icon/user';
import Button from 'components/atoms/a-button';

import { toast } from 'react-toastify';
import Input from 'components/atoms/a-input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import UserDashboard from 'assets/images/userDashboard';
import ProgressBar from '../m-progress';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [progress, setProgress] = useState(25);

  const handleContinue = () => {
    if (!selectedRole) {
      toast('Please select a role');
      return;
    }

    setProgress(50);

    if (selectedRole === 'admin') {
      navigate('/register/admin');
    } else if (selectedRole === 'user') {
      navigate('/register/user');
    } else if (selectedRole === 'vendor') {
      navigate('/register/vendor');
    }
  };
  return (
    <div className="relative block h-screen w-full justify-between bg-[#F6F7F9] lg:flex">
      <div className="relative h-full w-full bg-white px-10 pt-10 md:px-28 lg:w-2/5 lg:px-8">
        <h3 className="pb-1 text-2xl font-bold">Create an account</h3>
        <p className="pb-5 text-base font-semibold">
          Browse and book from our extensive list of event centers and save your favorite venues for
          future reference
        </p>
        <button
          type="button"
          className={`mb-5 flex w-full justify-between rounded border p-2 text-left ${
            selectedRole === 'user' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setSelectedRole('user')}
        >
          <div className="flex gap-x-3 ">
            <User />
            <div>
              <p className="text-sm font-bold">User</p>
              <p className="text-sm font-medium">I’m planning an event</p>
            </div>
          </div>
          <Input type="radio" name="user" id="user" checked={selectedRole === 'user'} readOnly />
        </button>
        <button
          type="button"
          className={`mb-5 flex w-full justify-between rounded border p-2 text-left ${
            selectedRole === 'admin' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setSelectedRole('admin')}
        >
          <div className="flex gap-x-3 ">
            <Admin />
            <div>
              <p className="text-sm font-bold">Event Center Manager</p>
              <p className="text-sm font-medium">I own an Event Center</p>
            </div>
          </div>
          <Input type="radio" name="role" id="admin" checked={selectedRole === 'admin'} readOnly />
        </button>
        <button
          type="button"
          className={`mb-5 flex w-full justify-between rounded border p-2 text-left ${
            selectedRole === 'vendor' ? 'border-primary' : 'border-gray-300'
          }`}
          onClick={() => setSelectedRole('vendor')}
        >
          <div className="flex gap-x-3 ">
            <Admin />
            <div>
              <p className="text-sm font-bold">Vendors</p>
              <p className="text-sm font-medium">Service providers (Dj, etc)</p>
            </div>
          </div>
          <Input
            type="radio"
            name="role"
            id="vendor"
            checked={selectedRole === 'vendor'}
            readOnly
          />
        </button>

        <Button type="button" label="Continue" className="w-full" handleClick={handleContinue} />
        {selectedRole === 'admin' ? (
          <ProgressBar
            progress={progress}
            segments={5}
            className="mt-24 px-10 md:mt-20  md:px-28 lg:px-5"
          />
        ) : (
          <ProgressBar progress={progress} className="mt-24 px-10 md:mt-20  md:px-28 lg:px-5" />
        )}
      </div>
      <div className="hidden w-3/5 flex-col items-center justify-center pt-10 lg:flex">
        <UserDashboard />
      </div>
    </div>
  );
};

export default CreateAccount;
