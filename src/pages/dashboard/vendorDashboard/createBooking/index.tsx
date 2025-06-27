import Label from 'components/atoms/a-input-label';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import LabeledInput from 'components/molecules/m-labeled-input';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'store';

const CreateBooking = () => {
  const location = useLocation();
  const { id, date, status, client, service } = location.state || {};
  const { userFirstName, userLastName } = useAppSelector((state) => state.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (val: any) => {
    console.log(val);
  };
  return (
    <div>
      <DashboardHeader
        header={`Welcome ${userFirstName} ${userLastName}`}
        title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
        rightSection={
          <select className="rounded-lg border border-[#00000066] px-4 py-3">
            <option value="month">Filter by Month</option>
            <option value="year">Filter by Year</option>
          </select>
        }
      />
      <div className="">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Booking
            </h3>
            <LabeledInput
              label="Booking ID"
              name="bookingID"
              id="bookingID"
              type="text"
              htmlFor="bookingID"
              register={register}
              placeholder={id}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['bookingID', 'message'], errors)}
              disabled
            />
            <Label label="Booking Status" htmlFor="bookingStatus" />
            <select className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none">
              <option value="">Confirmed</option>
              <option value="">Pending</option>
              <option value="">Complete</option>
            </select>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              <LabeledInput
                label="Booking Date"
                name="bookingDate"
                id="bookingDate"
                type="text"
                htmlFor="bookingDate"
                register={register}
                placeholder={date}
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
                error={path(['bookingDate', 'message'], errors)}
                disabled
              />
              <LabeledInput
                label="Booking Time"
                name="bookingTime"
                id="bookingTime"
                type="text"
                htmlFor="bookingTime"
                register={register}
                placeholder={date}
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
                error={path(['bookingTime', 'message'], errors)}
                disabled
              />
            </div>
            <LabeledInput
              label="Date Created"
              name="dateCreated"
              id="dateCreated"
              type="text"
              htmlFor="dateCreated"
              register={register}
              placeholder={date}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['dateCreated', 'message'], errors)}
              disabled
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Client Information
            </h3>
            <LabeledInput
              label="Client ID"
              name="clientID"
              id="clientID"
              type="text"
              htmlFor="clientID"
              register={register}
              placeholder={id}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['clientID', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Client Name"
              name="clientName"
              id="clientName"
              type="text"
              htmlFor="clientName"
              register={register}
              placeholder={client}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['clientName', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Phone"
              name="phone"
              id="phone"
              type="text"
              htmlFor="phone"
              register={register}
              placeholder="08012345678"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['phone', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Email"
              name="email"
              id="email"
              type="email"
              htmlFor="email"
              register={register}
              placeholder="aisha.musa@example.com"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['email', 'message'], errors)}
              disabled
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Service Information
            </h3>
            <LabeledInput
              label="Service Name"
              name="serviceName"
              id="serviceName"
              type="text"
              htmlFor="serviceName"
              register={register}
              placeholder={service}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['serviceName', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Service Quantity"
              name="serviceQuantity"
              id="serviceQuantity"
              type="number"
              htmlFor="serviceQuantity"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['serviceQuantity', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Service Provider"
              name="serviceProvider"
              id="serviceProvider"
              type="text"
              htmlFor="serviceProvider"
              register={register}
              placeholder="08012345678"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['serviceProvider', 'message'], errors)}
              disabled
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Booking Location
            </h3>
            <LabeledInput
              label="Location Name"
              name="locationName"
              id="locationName"
              type="text"
              htmlFor="locationName"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['locationName', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Location Address"
              name="locationAddress"
              id="locationAddress"
              type="text"
              htmlFor="locationAddress"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['locationAddress', 'message'], errors)}
              disabled
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Payment Information
            </h3>
            <LabeledInput
              label="Payment Status"
              name="paymentStatus"
              id="paymentStatus"
              type="text"
              htmlFor="paymentStatus"
              register={register}
              placeholder={status}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['paymentStatus', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Payment Method"
              name="paymentMethod"
              id="paymentMethod"
              type="text"
              htmlFor="paymentMethod"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['paymentMethod', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Amount Paid"
              name="amountPaid"
              id="amountPaid"
              type="text"
              htmlFor="amountPaid"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['amountPaid', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Payment Due Date"
              name="paymentDueDate"
              id="paymentDueDate"
              type="text"
              htmlFor="paymentDueDate"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['paymentDueDate', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Transaction ID"
              name="transactionID"
              id="transactionID"
              type="text"
              htmlFor="transactionID"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['transactionID', 'message'], errors)}
              disabled
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Additional Details
            </h3>
            <LabeledInput
              label="Special Instructions"
              name="specialInstructions"
              id="specialInstructions"
              type="text"
              htmlFor="specialInstructions"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['specialInstructions', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Notes/Messages"
              name="note"
              id="note"
              type="text"
              htmlFor="note"
              register={register}
              placeholder="Aisha Musa"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#DDDDDD] px-[16px] py-2 font-medium outline-none placeholder:text-[#000000B2]"
              error={path(['note', 'message'], errors)}
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
