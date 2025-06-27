import Button from 'components/atoms/a-button';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import { useLocation } from 'react-router-dom';

const QuotationDesign = () => {
  const location = useLocation();
  const val = location.state?.val || location.state;
  const total = location.state?.total || location.state;
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
            <span className="flex h-5 w-5 items-center justify-center rounded-full border bg-transparent p-1  text-black shadow">
              {' '}
              1
            </span>
            Quotation Details
          </p>

          <p className="flex items-center gap-x-[18px] font-Rubik text-base font-medium">
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary p-1  text-white shadow">
              2
            </span>
            Design & share
          </p>
        </div>
        <div className="w-full">
          <h3 className="pb-1 font-Rubik text-2xl font-bold capitalize">{val.title}</h3>
          <p className="flex justify-between capitalize md:w-1/2 lg:w-1/4">
            quotation no # <strong>{val.quotationNo}</strong>{' '}
          </p>
          <p className="flex justify-between capitalize md:w-1/2 lg:w-1/4">
            quotation date <strong>{val.quotationDate}</strong>
          </p>
          <p className="flex  justify-between capitalize md:w-1/2 lg:w-1/4">
            Valid till date <strong>{val.validtillDate}</strong>
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-lg border bg-[#F7F9FA] p-4">
            <h4 className="pb-2  font-Rubik text-xl font-bold">Quotation from</h4>

            <p className="font-Rubik text-sm font-medium">Dayo Catering</p>

            <p className="font-Rubik text-sm font-medium">dayocatering@gmail.com</p>
            <p className="font-Rubik text-sm font-medium">+2349012345674</p>
          </div>

          <div className="rounded-lg border bg-[#F7F9FA] p-4">
            <h4 className="pb-2  font-Rubik text-xl font-bold">Quotation for</h4>

            <p className="font-Rubik text-sm font-medium">Client name</p>
            <p className="font-Rubik text-sm font-medium">Client email</p>
            <p className="font-Rubik text-sm font-medium">client number</p>
          </div>
        </div>
        <div className="grid w-full grid-cols-4 rounded-t-md bg-primary p-3 font-Rubik text-base font-medium text-white">
          <div>Item</div>
          <div>Quantity</div>
          <div>Rate</div>
          <div>Amount</div>
        </div>
        {val.items.map(
          (
            item: {
              service: string;
              quantity: number;
              rate: number;
              amount: number;
            },
            index: number,
          ) => {
            const id = `quotation-item-${item.service}-${index}`;
            const calculatedAmount = item.quantity * item.rate;
            return (
              <div
                key={id}
                className="grid w-full grid-cols-4 items-center gap-x-4 border-b p-3 font-Rubik text-base font-medium"
              >
                <div>{item.service}</div>
                <div>{item.quantity}</div>
                <div>{item.rate}</div>
                <div>{calculatedAmount}</div>
              </div>
            );
          },
        )}
        <div className="flex items-center justify-between">
          <p>Total (In words):</p>
          <h3 className="font-Rubik text-2xl font-medium">
            <span>
              Total (NGN): ₦ {Number(total).toLocaleString('en-NG', { minimumFractionDigits: 2 })}
            </span>
          </h3>
        </div>
        <div>
          <h3 className="font-Rubik text-base font-bold">Terms and conditions</h3>
          {val.terms.map((term: { id: string; text: string }, index: number) => {
            const { id, text } = term;
            return (
              <div key={id}>
                <p className="font-Rubik text-sm font-medium">
                  {index + 1}. {text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {' '}
          <h3 className="font-Rubik text-base font-bold">Additional notes</h3>
          {val.additionalInfo && (
            <p className="font-Rubik text-sm font-medium">
              {val.additionalInfo.replace(/^<p>(.*?)<\/p>$/i, '$1')}
            </p>
          )}
        </div>
        {val.email && (
          <p className="text-center font-Rubik text-xs font-medium">
            For any enquiry, reach out via email at {val.email}{' '}
            {val.phone && <span>, call on {val.phone}</span>}
          </p>
        )}
        <div className="mt-4 flex w-full gap-x-4">
          <Button
            type="button"
            label="Save as draft"
            className="rounded border bg-transparent px-6 py-2 font-Rubik text-xs font-semibold !text-[#00000099] hover:bg-red-700"
          />
          <Button
            type="submit"
            label="Send Quotation"
            className="rounded !bg-[#008000]
        px-6 py-2 font-Rubik text-xs font-semibold  text-white hover:bg-green-700"
          />
        </div>
      </div>
    </div>
  );
};

export default QuotationDesign;
