import TicketDashboardHeader from 'components/molecules/m-ticketDashboardHeader';
import TicketTable from 'components/molecules/m-ticketTable';
import { LineGraph } from 'components/organisms/o-graph';

const lineChartData = [
  { day: 'Mon', value: 1 },
  { day: 'Tue', value: 1 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 5 },
  { day: 'Sat', value: 8 },
  { day: 'Sun', value: 8 },
];
const TicketSales = () => {
  return (
    <div>
      <TicketDashboardHeader />

      <div className="my-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base  font-semibold text-[#000000CC]">Ticket Sales</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base font-semibold text-[#000000CC]">
            Ticket sales Trend
          </h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
      </div>
      <TicketTable />
    </div>
  );
};

export default TicketSales;
