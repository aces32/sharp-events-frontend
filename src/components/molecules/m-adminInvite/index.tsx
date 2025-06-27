import Button from 'components/atoms/a-button';
import { useState } from 'react';
import Logo from 'assets/Icon/logo';
import { FaPlus } from 'react-icons/fa';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import Input from 'components/atoms/a-input';
import Label from 'components/atoms/a-input-label';
import useFetchHook from 'hooks/useFetchHook';
import { toast } from 'react-toastify';
import ProgressBar from '../m-progress';

interface Props {
  setAdminTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'invite' | 'welcome'>>;
  companyName: string;
  companyId: string;
}

const AdminInvite = ({ setAdminTab, companyName, companyId }: Props) => {
  const [progress, setProgress] = useState(80);
  const [emails, setEmails] = useState<string[]>(['']);
  const {
    formState: { errors },
    register,
    handleSubmit,
    // reset,
  } = useForm();
  const [, inviteStaff] = useFetchHook('authentication/invite-event-staffs');
  console.log(errors);
  console.log(companyId);
  const onSubmit = async (val: any) => {
    console.log(val);
    const extractedEmails = Object.keys(val)
      .filter((key) => key.startsWith('email'))
      .map((key) => val[key])
      .filter((email: string) => email?.trim() !== '');
    const response = await inviteStaff.Post({
      companyId,
      companyName,
      email: extractedEmails,
    });
    if (response?.code === '00') {
      setProgress(60);
      setAdminTab('welcome');
      toast(response?.description);
    } else {
      toast(response?.description);
    }
  };
  const handleAddMore = () => {
    setEmails([...emails, '']);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center pt-10 text-center ">
      <div className="relative h-full w-full px-5  md:w-2/3 md:px-0 lg:w-1/2 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">Invite your team</h3>
        <p className="text-base font-semibold">Start collaborating with your team</p>
        <form
          className="mt-5 flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full text-left">
            <Label label="Email address" htmlFor={`${emails}`} className="text-sm font-bold" />
            {emails.map((email, index) => {
              const id = `email${index}`;
              return (
                <Input
                  key={id}
                  name={`email${index}`}
                  id={`email${index}`}
                  type="email"
                  register={register}
                  placeholder="e.g. olaide@gmail.com"
                  className="mb-3 w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                  error={path([`email${index}`, 'message'], errors)}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleAddMore}
            className="flex items-center justify-center gap-x-2 self-start text-sm font-medium !text-black"
          >
            <FaPlus /> Add more
          </button>
          <Button
            label="skip"
            type="button"
            handleClick={() => {
              setAdminTab('welcome');
              setProgress(60);
            }}
            className="mt-2 w-full border border-primary bg-transparent !text-primary "
          />
          <Button type="submit" label="Continue" className="mt-2 w-full" />
        </form>
        <ProgressBar progress={progress} segments={5} className="mt-24 px-10  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default AdminInvite;
