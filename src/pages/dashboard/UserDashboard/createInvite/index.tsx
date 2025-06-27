import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';
import LabeledInput from 'components/molecules/m-labeled-input';
import QuillEditor from 'hoc/react-quill';
import { path } from 'ramda';
import { Controller, useForm } from 'react-hook-form';

const CreateInvite = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();
  const onSubmit = async (val: any) => {
    console.log(val);
    reset({});
  };
  return (
    <div>
      <h3 className="font-Rubik text-3xl font-bold">Create invitation</h3>
      <p className="font-Rubik text-base font-semibold">invite people to your evnt</p>
      <div className="mt-5 w-full bg-white px-3 py-7 md:px-9">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <LabeledInput
            label="Name"
            name="name"
            id="name"
            type="text"
            htmlFor="name"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" Olaide"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['name', 'message'], errors)}
          />

          <LabeledInput
            label="Email"
            name="email"
            id="email"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder="Enter Email"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['email', 'message'], errors)}
          />
          <div className="w-full">
            <Label
              htmlFor="inviteDescription"
              label="Invite Description *"
              className="mb-1 flex w-full flex-col font-sans text-[14px] font-bold text-black"
            />
            <Controller
              name="tickeDescription"
              control={control}
              render={({ field }) => (
                <QuillEditor
                  handleChange={(e) => field.onChange(e)}
                  value={field.value as string}
                  placeholder="Invite Description"
                />
              )}
            />
          </div>
          <Button type="submit" label="Send invites" className="mt-5 w-full font-Rubik font-bold" />
        </form>
      </div>
    </div>
  );
};

export default CreateInvite;
