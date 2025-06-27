import StatCard from '../m-statCard';

interface StatProps {
  id: number;
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
}
interface DashboardHeaderProps {
  header: string;
  title: string;
  rightSection?: React.ReactNode;
  leftSection?: React.ReactNode;
  stats?: StatProps[];
  className?: string;
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  const { header, title, rightSection, stats, className, leftSection } = props;
  return (
    <div>
      <div className="block w-full items-center justify-between lg:flex">
        <div>
          <h3 className="font-Rubik text-2xl font-bold capitalize text-[#000000] lg:text-3xl">
            {header}
          </h3>
          <p className="pb-3 font-Rubik text-sm font-semibold capitalize text-[#000000CC] md:text-base lg:pb-0">
            {title}
          </p>
          {leftSection && <div>{leftSection}</div>}
        </div>
        {rightSection && <div className="">{rightSection}</div>}
      </div>
      <div className={stats ? `mb-5 mt-10 grid grid-cols-1 gap-4 ${className}` : 'mt-5'}>
        {stats?.map((item) => {
          return <StatCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DashboardHeader;
