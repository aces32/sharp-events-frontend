export interface LabelProps {
  htmlFor: string;
  label: string;
  className?: string;
}

const Label = ({ htmlFor, label, className }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

export default Label;
