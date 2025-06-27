import DashboardHeader from 'components/molecules/m-dashboardHeader';
import {
  FaCalendarCheck,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaHeart,
  FaExclamationTriangle,
} from 'react-icons/fa';

import Button from 'components/atoms/a-button';
import { Link } from 'react-router-dom';

const stats = [
  {
    id: 1,
    title: 'Total Earnings',
    value: '₦5,000,000',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 2,
    title: 'Available Balance',
    value: '₦250,000',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Last Payout',
    value: '₦150,000',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },

  {
    id: 4,
    title: 'Avg. Monthly Earnings',
    value: '₦150,000',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];
const FinancialHeader = () => {
  return (
    <div>
      <DashboardHeader
        header="Financial"
        title="Manage your earnings, view transaction history, and access your funds."
        stats={stats}
        leftSection={
          <div className="my-3 flex flex-col items-start justify-start gap-y-2">
            <p className="bg-[#FFB2B2] p-1 font-Rubik text-[10px] font-semibold text-[#FF1212]">
              ACCOUNT VERIFICATION REQUIRED
            </p>
            <p className="flex items-center gap-x-2 font-Rubik text-xs font-semibold text-[#FF0000]">
              <FaExclamationTriangle />
              Action Required: Complete your Bank Account Verification (KYC) to enable payouts.
            </p>
            <Link to="/dashboard/vendor/customer">
              {' '}
              <Button type="button" label="Verify Now" className="!rounded !bg-[#008000] " />
            </Link>
          </div>
        }
        className="md:grid-cols-2 lg:grid-cols-4"
      />
      <div className="mb-4 flex items-center justify-end">
        {' '}
        <Button type="button" label="Withdraw" className="!rounded !bg-[#008000] " />
      </div>
    </div>
  );
};

export default FinancialHeader;
