/* eslint-disable react/no-array-index-key */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  PieChart,
  Pie,
  Cell,
  // Legend,
} from 'recharts';

// Booking Trend (Line Chart)
interface LineGraphProps {
  lineChartData: any[];
  xKey?: string;
  yKey?: string;
  secondYKey?: string;
  color?: string;
}

export const LineGraph = ({
  lineChartData,
  xKey = 'day',
  yKey = 'value',
  secondYKey,

  color = 'orange',
}: LineGraphProps) => (
  // <ResponsiveContainer width="100%" height={250}>
  //   <LineChart data={lineChartData}>
  //     <CartesianGrid stroke="#D1D5DB" strokeDasharray="3 3" vertical horizontal />
  //     <XAxis dataKey={xKey} />
  //     <YAxis />
  //     <Tooltip />
  //     {yKey && (
  //       <>
  //         <Area
  //           type="monotone"
  //           dataKey={yKey}
  //           fill="blue"
  //           fillOpacity={0.2}
  //           stroke="none"
  //           name={yKey}
  //         />
  //         <Line
  //           type="monotone"
  //           dataKey={yKey}
  //           stroke="blue"
  //           strokeWidth={2}
  //           dot={{ r: 5, stroke: 'blue', strokeWidth: 2, fill: 'white' }}
  //           name={yKey}
  //         />
  //       </>
  //     )}
  //     {secondYKey && lineChartData.some((d) => secondYKey in d) && (
  //       <Line
  //         type="monotone"
  //         dataKey={secondYKey}
  //         stroke={color}
  //         strokeWidth={2}
  //         dot={{ r: 5, stroke: color, strokeWidth: 2, fill: 'white' }}
  //         name={secondYKey}
  //       />
  //     )}
  //   </LineChart>
  // </ResponsiveContainer>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={lineChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={yKey}
        fill="blue"
        fillOpacity={0.2}
        stroke="none"
        name={yKey}
      />
      <Line
        type="monotone"
        dataKey={yKey}
        stroke="blue"
        strokeWidth={2}
        dot={{ r: 5, stroke: 'blue', strokeWidth: 2, fill: 'white' }}
        name={yKey}
      />
      {secondYKey && lineChartData.some((d) => secondYKey in d) && (
        <Line
          type="monotone"
          dataKey={secondYKey}
          stroke={color}
          strokeWidth={2}
          dot={{ r: 5, stroke: color, strokeWidth: 2, fill: 'white' }}
          name={secondYKey}
        />
      )}
    </LineChart>
  </ResponsiveContainer>
);

// Semi-Circular Pie Chart
const semiCircleData = [
  { name: 'A', value: 40, color: '#0033CC' },
  { name: 'B', value: 30, color: '#33CC33' },
  { name: 'C', value: 20, color: '#FF9900' },
  { name: 'D', value: 10, color: '#FFD700' },
];

export const SemiCircleChart = () => (
  <PieChart width={200} height={100}>
    <Pie
      data={semiCircleData}
      dataKey="value"
      cx="50%"
      cy="100%"
      startAngle={180}
      endAngle={0}
      outerRadius={80}
      innerRadius={50}
    >
      {semiCircleData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
);

// Doughnut Chart with Legend

interface DoughnutChartProps {
  doughnutData: {
    name: string;
    value: number;
    color: string;
  }[];
}

export const DoughnutChart = ({ doughnutData }: DoughnutChartProps) => (
  <div className="flex items-center gap-8">
    <div className="flex flex-col gap-2">
      {doughnutData.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm font-medium">
          <span className="block h-3 w-3 rounded-sm" style={{ backgroundColor: item.color }} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>

    <div className="h-[200px] w-1/2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={doughnutData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={40}
          >
            {doughnutData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const App = () => (
  <div>
    {/* <h3>Booking Trend</h3> */}
    {/* <LineGraph lineChartData={lineChartData} /> */}
    <h3>Semi-Circular Pie Chart</h3>
    <SemiCircleChart />
    {/* <h3>Doughnut Chart</h3>
    <DoughnutChart /> */}
  </div>
);

export default App;
