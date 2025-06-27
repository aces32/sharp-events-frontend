import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';
import LabeledInput from 'components/molecules/m-labeled-input';
import QuillEditor from 'hoc/react-quill';
import { path } from 'ramda';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddTicket = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();
  const onSubmit = async (val: any) => {
    console.log(val);
    console.log('Selected File:', file);
    reset({});
  };
  return (
    <div>
      <h3 className="font-Rubik text-3xl font-bold">Add new ticket</h3>
      <p className="font-Rubik text-base font-semibold">
        Create different ticket type for your event with ease
      </p>
      <div className=" mt-5 w-full bg-white px-3 py-7 md:px-9">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <LabeledInput
            label="Event name*"
            name="EventName"
            id="EventName"
            type="text"
            htmlFor="EventName"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" Olaide"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['EventName', 'message'], errors)}
          />

          <LabeledInput
            label="Ticket Type"
            name="TicketType"
            id="TicketType"
            type="text"
            htmlFor="TicketType"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" Regular"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['TicketType', 'message'], errors)}
          />
          <div className="grid w-full grid-cols-2 gap-x-3 md:gap-x-10">
            <LabeledInput
              label="Quantity*"
              name="Quantity"
              id="Quantity"
              type="text"
              htmlFor="Quantity"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="Enter  Ticket quantity"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['Quantity', 'message'], errors)}
            />
            <LabeledInput
              label="Price"
              name="Price"
              id="Price"
              type="text"
              htmlFor="Price"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="Enter Ticket Price"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['Price', 'message'], errors)}
            />
          </div>
          <div className="w-full">
            <Label
              htmlFor="ticketDescription"
              label="Ticket Description *"
              className="mb-1 flex w-full flex-col font-sans text-[14px] font-bold text-black"
            />
            <Controller
              name="ticketDescription"
              control={control}
              render={({ field }) => (
                <QuillEditor
                  handleChange={(e) => field.onChange(e)}
                  value={field.value as string}
                  placeholder="Ticket Description"
                />
              )}
            />
            <Label
              htmlFor="attachment"
              label="Attachment *"
              className="mb-1 mt-5 flex w-full flex-col font-sans text-[14px] font-bold text-black"
            />
            <input
              type="file"
              id="attachment"
              onChange={handleFileChange}
              className="w-full rounded border border-[#00000099] bg-[#F1F1F1] p-5
"
            />
          </div>

          <Button
            type="submit"
            label="CREATE EVENT TICKETS"
            className="mt-5 w-full font-Rubik font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTicket;
