interface StepsProps {
  header: string;
  title: string;
  text: string;
}

const Steps = ({ header, title, text }: StepsProps) => {
  return (
    <div className="items-left flex flex-col justify-center gap-y-10 rounded-lg border border-[#000000] p-5 text-left">
      <h3 className="font-Rubik text-2xl font-bold">{title}</h3>
      <div className="flex flex-col items-start justify-center gap-y-5 text-left">
        <h4 className="font-Rubik text-lg font-semibold">{header}</h4>
        <p className="font-Roboto text-base font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Steps;
