import WalletHeader from 'components/molecules/m-walletHeader';
import WalletTable from 'components/molecules/m-walletTable';
import { DoughnutChart, LineGraph } from 'components/organisms/o-graph';

const lineChartData = [
  { day: 'Mon', value: 1 },
  { day: 'Tue', value: 1 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 5 },
  { day: 'Sat', value: 8 },
  { day: 'Sun', value: 8 },
];

const doughnutData = [
  { name: 'Event center', value: 60, color: '#4CAF50' },
  { name: 'vendors', value: 30, color: '#FFFF00' },
  { name: 'ticket', value: 10, color: '#FF5722' },
];
const Wallet = () => {
  return (
    <div>
      <WalletHeader />

      <div className="my-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">Revenue Growth</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">Expenses</h3>
          <hr className="py-1" />
          <DoughnutChart doughnutData={doughnutData} />
        </div>
      </div>
      <WalletTable />
    </div>
  );
};

export default Wallet;
