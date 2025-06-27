import AccountDetailsTable from 'components/molecules/m-accountDetailsTable';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import { useParams } from 'react-router-dom';

const Statement = () => {
  const { id } = useParams();
  return (
    <div>
      <DashboardHeader
        header="Statement Of Account"
        title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
      />
      <div className="w-full rounded-lg bg-white px-3 py-9 lg:px-6">
        <div className="flex flex-col gap-y-2 md:w-1/2 lg:w-1/3">
          <h3 className="font-Rubik text-2xl font-bold">Statement of accounts</h3>
          <p className=" border-y-2 border-black font-Rubik text-sm font-semibold">
            01-Apr-2025-30-Apr-2025
          </p>
          <p className="rounded bg-[#D9D9D9] p-2 font-Rubik font-bold">Account Summary</p>
          <table className=" w-full gap-y-2 font-Rubik text-sm font-semibold">
            <tr>
              <td>Account Number</td>
              <td className="text-right">1234567890</td>
            </tr>
            <tr>
              <td>Opening Balance</td>
              <td className="text-right">NGN 17,913,00</td>
            </tr>
            <tr>
              <td>Withdrawals</td>
              <td className="text-right">NGN 7,052,00</td>
            </tr>
            <tr className="border-t-2 border-black">
              <td>Balance Due</td>
              <td className="text-right">NGN 11,949,00</td>
            </tr>
          </table>
        </div>
      </div>
      <AccountDetailsTable id={id} />
    </div>
  );
};

export default Statement;
