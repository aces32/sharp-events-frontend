import Input, { InputProp } from 'components/atoms/a-input';
import Label, { LabelProps } from 'components/atoms/a-input-label';
import { FieldValues } from 'react-hook-form';

interface LabelClassName {
  labelClassName?: string;
  labelTextClassName?: string;
  step?: string;
}
type LabelInputProps<T extends FieldValues> = InputProp<T> & LabelProps & LabelClassName;

const LabeledInput = <T extends FieldValues>({
  id,
  name,
  type,
  placeholder,
  htmlFor,
  label,
  error,
  className,
  required,
  value,
  min,
  max,
  accept,
  labelClassName,
  labelTextClassName,
  disabled,
  defaultValue,
  register,
  handleChange,
  step,
}: LabelInputProps<T>) => {
  return (
    <div className={labelClassName}>
      <Label htmlFor={htmlFor} label={label} className={`${labelTextClassName} capitalize`} />
      <Input
        id={id}
        min={min}
        max={max}
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        required={required}
        value={value}
        error={error}
        disabled={disabled}
        register={register}
        handleChange={handleChange}
        accept={accept}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default LabeledInput;
