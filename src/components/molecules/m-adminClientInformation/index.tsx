import Button from 'components/atoms/a-button';
import LabeledInput from '../m-labeled-input';

const AdminClientInformation = ({ name, email, phone, status }: any) => {
  return (
    <div className="w-full rounded-lg bg-white px-3 py-5 lg:px-6">
      <h3 className="font-Rubik text-2xl font-bold">Client Information</h3>
      <hr className="py-1" />
      <form className="mt-4 flex w-full flex-col items-start gap-3 text-left">
        <LabeledInput
          label="Client Name"
          name={name}
          id="email"
          type="text"
          htmlFor="email"
          // register={register}
          labelClassName="flex w-full flex-col gap-1 font-Rubik text-[14px] font-bold text-black"
          placeholder={name}
          className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
          // error={path(['email', 'message'], errors)}
          disabled
        />
        <div className="flex w-full items-center justify-between gap-5">
          <LabeledInput
            label="Phone number*"
            name={phone}
            id={phone}
            type="text"
            htmlFor="email"
            // register={register}
            labelClassName="flex w-full flex-col gap-1 font-Rubik text-[14px] font-bold text-black"
            placeholder={phone}
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            // error={path(['email', 'message'], errors)}
            disabled
          />
          <LabeledInput
            label="Email"
            name={email}
            id={email}
            type="text"
            htmlFor={email}
            // register={register}
            labelClassName="flex w-full flex-col gap-1 font-Rubik text-[14px] font-bold text-black"
            placeholder={email}
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            // error={path(['email', 'message'], errors)}
            disabled
          />
        </div>
        <Button
          type="button"
          label={status}
          disabled
          className="rounded-lg !bg-[#B5F7C9] px-[41px] py-[16px] font-Rubik text-xs font-semibold !text-[#06BE04]"
        />
      </form>
    </div>
  );
};

export default AdminClientInformation;
