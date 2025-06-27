import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type IRegister<T extends FieldValues> = UseFormRegister<T>;

export interface InputProp<T extends FieldValues> {
  id?: string;
  type: string;
  name: string | Path<T>;
  placeholder?: string;
  className?: string;
  value?: string | number;
  required?: boolean;
  error?: string;
  accept?: string;
  maxLength?: number;
  min?: number | string;
  max?: number;
  defaultValue?: any;
  disabled?: boolean;
  step?: string;
  register?: IRegister<T> | UseFormRegister<T>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  checked?: boolean;
  readOnly?: boolean;
}

function Input<T extends FieldValues>({
  id,
  type,
  name,
  placeholder,
  className,
  required,
  value,
  error,
  min,
  max,
  accept,
  maxLength,
  disabled,
  register,
  handleChange,
  defaultValue,
  handleFocus,
  checked,
  step,
  readOnly,
}: InputProp<T>) {
  return (
    <>
      <input
        id={id}
        min={min}
        max={max}
        type={type}
        name={name}
        {...(register && { ...register(name as Path<T>) })}
        placeholder={placeholder}
        className={className}
        required={required}
        value={value}
        defaultValue={defaultValue}
        autoComplete="on"
        maxLength={maxLength}
        onChange={(e) => handleChange && handleChange(e)}
        onFocus={(e) => handleFocus && handleFocus(e)}
        disabled={disabled}
        accept={accept}
        checked={checked}
        step={step}
        readOnly={readOnly}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  );
}

export default Input;
