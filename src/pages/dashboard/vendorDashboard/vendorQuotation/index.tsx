import Button from 'components/atoms/a-button';
import Input from 'components/atoms/a-input';
import AddClientModal from 'components/molecules/m-addClientModal';
import AddDiscription from 'components/molecules/m-addDiscription';
import ContactDetails from 'components/molecules/m-contactDetails';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import LabeledInput from 'components/molecules/m-labeled-input';
import QuotationTerms from 'components/molecules/m-quotationTerms';
import { path } from 'ramda';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaEdit, FaPlus, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VendorQuotation = () => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState('Quotation');
  const [editSubTitle, setEditSubTitle] = useState(false);
  const [subTitle, setSubTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [addDiscription, setAddDiscription] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: [
        { id: '1', text: 'Payment must be made within 7 days.' },
        { id: '2', text: 'Cancellation must be done 48 hours in advance.' },
      ],
      items: [{ service: '', quantity: 0, rate: 0, amount: 0 }],
      title,
      subTitle,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const items = watch('items');
  const total = items?.reduce((acc, item) => {
    const quantity = item?.quantity || 0;
    const rate = item?.rate || 0;
    return acc + quantity * rate;
  }, 0);

  const navigate = useNavigate();
  const onSubmit = async (val: any) => {
    navigate('/dashboard/vendor/quotationDesign', { state: { ...val, total } });
  };

  return (
    <div>
      <DashboardHeader
        header="Create New Quotation"
        title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
        rightSection={
          <select className="rounded-lg border border-[#00000066] px-4 py-3">
            <option value="month">Filter by Month</option>
            <option value="year">Filter by Year</option>
          </select>
        }
      />
      <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
        <h3 className="pb-1 text-center font-Rubik text-2xl font-bold">Create new quotation</h3>
        <div className="flex items-center justify-center gap-x-16">
          <p className="flex items-center gap-x-[18px] font-Rubik text-base font-medium">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1  text-white shadow">
              1
            </span>
            Quotation Details
          </p>

          <p className="flex items-center gap-x-[18px] font-Rubik text-base font-medium">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border bg-transparent p-1  text-black shadow">
              2
            </span>
            Design & share
          </p>
        </div>
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center gap-x-2">
            {editTitle ? (
              <input
                type="text"
                {...register('title')}
                defaultValue={title}
                onBlur={(e) => {
                  setTitle(e.target.value);
                  setEditTitle(false);
                }}
                className="rounded-md border border-gray-300 px-2 py-1 font-Rubik text-lg font-bold"
              />
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                <h3 className="border-b border-dashed border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
                  {title}
                </h3>
                <button type="button" aria-label="edit title" onClick={() => setEditTitle(true)}>
                  <FaEdit />
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-x-2">
            {editSubTitle ? (
              <input
                type="text"
                {...register('subTitle')}
                defaultValue={subTitle}
                onBlur={(e) => {
                  setSubTitle(e.target.value);
                  setEditSubTitle(false);
                }}
                className="rounded-md border border-gray-300 px-2 py-1 font-Rubik text-lg font-bold"
              />
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                <button
                  type="button"
                  aria-label="edit subtitle"
                  onClick={() => setEditSubTitle(true)}
                  className="flex items-center justify-center gap-x-2 text-sm font-medium !text-black"
                >
                  <FaPlus /> Add subtitle
                </button>
              </div>
            )}
          </div>
          <div className="block w-full justify-between gap-x-10 md:flex">
            <div className="pb-5 md:w-1/2">
              <LabeledInput
                label="quotation no*"
                name="quotationNo"
                id="quotationNo"
                type="text"
                htmlFor="quotationNo"
                register={register}
                placeholder="BK-2025-001"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['quotationNo', 'message'], errors)}
              />
              <LabeledInput
                label="quotation Date*"
                name="quotationDate"
                id="quotationDate"
                type="date"
                htmlFor="quotationDate"
                register={register}
                placeholder="sharp event center"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['quotationDate', 'message'], errors)}
              />
              <LabeledInput
                label="Valid till Date*"
                name="validtillDate"
                id="validtillDate"
                type="date"
                htmlFor="validtillDate"
                register={register}
                placeholder="sharp event center"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['validtillDate', 'message'], errors)}
              />
            </div>
            <div className="flex flex-col items-end md:w-1/2">
              <div className="rounded-md border border-dashed border-[#00000099] bg-[#F7F9FA] px-1 py-3 text-center lg:w-1/2 ">
                <p className="font-Rubik text-sm font-medium">Add Business Logo</p>
                <p className="font-Rubik text-sm font-medium">
                  Resolution up to 1080 x 1080px. PNG or JPEG file.
                </p>
                <Input
                  type="file"
                  name="addLogo"
                  register={register}
                  className="mt-2 w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-lg border bg-[#F7F9FA] p-4">
              <h4 className="pb-2  font-Rubik text-xl font-bold">Quotation from</h4>
              <select className="w-full rounded-md border p-2">
                <option>Dayo Catering</option>
              </select>
              <div className="mt-2 rounded-lg border px-4 py-2 text-sm text-gray-600">
                <h4 className="pb-1 font-Rubik text-sm font-bold">Business details</h4>
                <p className="font-Rubik text-sm font-medium">
                  <strong>Business Name:</strong> Dayo Catering
                </p>
                <p className="font-Rubik text-sm font-medium">
                  <strong>Address:</strong> 123, Lagos Nigeria
                </p>
                <p className="font-Rubik text-sm font-medium">
                  <strong>Email:</strong> dayocatering@gmail.com
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-[#F7F9FA] p-4">
              <h4 className="pb-2  font-Rubik text-xl font-bold">Quotation for</h4>
              <select className="w-full rounded-md border p-2">
                <option>Select a Client</option>
              </select>
              <div className="relative mt-2 flex flex-col items-center justify-center gap-y-1 rounded-lg border p-2 text-center text-sm text-gray-600">
                <p className="font-Rubik text-sm font-medium">
                  Select client/business from the list
                </p>
                <p className="font-Rubik text-sm font-medium">OR</p>
                <Button
                  label="+ Add New Client"
                  type="button"
                  className="!px-4 !py-2"
                  handleClick={() => setIsOpen(true)}
                />
                <AddClientModal
                  register={register}
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  errors={errors}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-3/4 justify-between gap-x-5 text-left">
              <Button
                type="button"
                label="%   Add VAT"
                className="w-full  border bg-transparent text-[#00000099]"
              />
              <select className="w-full rounded-md border p-2">
                <option>Nigerian Naira (NGN, N)</option>
              </select>
              <select className="w-full rounded-md border p-2">
                <option>123 Number and currency Formal</option>
              </select>
            </div>
          </div>
          <div className="grid w-full grid-cols-4 rounded-t-md bg-primary p-3 font-Rubik text-base font-medium text-white">
            <div>Item / Description</div>
            <div>Quantity</div>
            <div>Rate</div>
            <div>Amount</div>
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="flex w-full flex-col gap-y-2 bg-[#F7F9FA] p-2 ">
              <div className=" flex w-full items-center justify-between gap-3">
                <input
                  {...register(`items.${index}.service`)}
                  placeholder="Description"
                  className="rounded-md border p-2"
                />
                <input
                  type="number"
                  {...register(`items.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                  placeholder="0"
                  className="rounded-md border p-2"
                />
                <input
                  type="number"
                  {...register(`items.${index}.rate`, {
                    valueAsNumber: true,
                  })}
                  placeholder="0.00"
                  className="rounded-md border p-2"
                />
                {/* <div className="flex items-center gap-2"> */}
                <input
                  type="number"
                  {...register(`items.${index}.amount`, {
                    valueAsNumber: true,
                  })}
                  readOnly
                  className="w-full rounded-md border bg-gray-100 p-2"
                  value={watch(`items.${index}.quantity`) * watch(`items.${index}.rate`) || 0}
                />

                <button type="button" aria-label="remove item" onClick={() => remove(index)}>
                  <FaTimes />
                </button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex w-1/2 justify-between">
                  <button type="button">+ Add Discription</button>
                  <button type="button">Add Thumbnail</button>
                </div>
                <button type="button" onClick={() => append(item)}>
                  ⎘ Duplicate
                </button>
              </div>
              <div className="flex w-1/2 justify-between">
                <button type="button">Add Unit</button>
                <select className="w-1/2 rounded-md border p-2">
                  <option>Product</option>
                </select>
              </div>
            </div>
          ))}
          <div className="w-full">
            <button
              type="button"
              onClick={() => append({ service: '', quantity: 0, rate: 0, amount: 0 })}
              className="w-1/2 rounded-lg border border-dashed border-black p-2"
            >
              + Add New Line
            </button>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex flex-col gap-y-3 md:w-1/2 lg:w-2/5">
              <p className="font-Rubik text-sm font-medium">Add discounts/Additional charges</p>
              <p className="font-Rubik text-sm font-medium">Hide Totals</p>
              <p className="font-Rubik text-sm font-medium">Summarize Total Quantity</p>
              <div className="flex justify-between border-y border-[#00000066] py-3 font-Rubik text-2xl font-medium">
                <h3>Total (NGN)</h3>
                <p>₦ {Number(total).toLocaleString('en-NG', { minimumFractionDigits: 2 })}</p>
              </div>
              <p className="font-Rubik text-sm font-medium">Add more fields</p>
              <p className="font-Rubik text-sm font-medium">Show Total in words</p>
              <button
                type="button"
                className="w-full rounded-lg border border-dashed border-black p-2 font-Rubik text-sm font-medium"
              >
                Add signature
              </button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-between gap-x-2 gap-y-5 md:grid-cols-3 md:gap-x-10">
            <button
              type="button"
              className="w-full rounded-lg border border-dashed border-black p-2 font-Rubik text-sm font-medium"
            >
              Add note
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-dashed border-black p-2 font-Rubik text-sm font-medium"
            >
              Add Attachments
            </button>
            <button
              type="button"
              onClick={() => setAddDiscription(!addDiscription)}
              className="w-full rounded-lg border border-dashed border-black p-2 font-Rubik text-sm font-medium"
            >
              Additional Info
            </button>
            <button
              type="button"
              onClick={() => setShowContact(!showContact)}
              className="rounded-lg border border-dashed border-black p-2 font-Rubik text-sm font-medium "
            >
              Add contact details
            </button>
          </div>

          <div
            className="w-full rounded-lg border border-[#00000066] bg-[#F7F9FA]
"
          >
            <QuotationTerms register={register} control={control} />
          </div>
          <div className="w-full">
            <ContactDetails
              register={register}
              showContact={showContact}
              onClose={() => setShowContact(false)}
            />
          </div>
          <AddDiscription addDiscription={addDiscription} control={control} />

          <div className="mt-4 flex w-full gap-x-4">
            <Button
              type="button"
              label="Save as draft"
              className="rounded border bg-transparent px-6 py-2 font-Rubik text-xs font-semibold !text-[#00000099] hover:bg-red-700"
            />

            <Button
              type="submit"
              label="Save and continue"
              className="rounded !bg-[#008000]
px-6 py-2 font-Rubik text-xs font-semibold  text-white hover:bg-green-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorQuotation;
