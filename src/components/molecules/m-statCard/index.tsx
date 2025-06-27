interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
}

const StatCard = (props: StatCardProps) => {
  const { title, value, icon, bgColor } = props;
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center gap-3">
        <div className={`rounded-lg ${bgColor} p-4`}>{icon}</div>
        <div>
          <p className="font-Rubik text-xs font-semibold text-[#000000CC]">{title}</p>
          <h2 className="font-Rubik text-2xl font-semibold text-[#000000CC]">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
