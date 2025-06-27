/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

interface ButtonProps {
  btnType?: 'primary' | 'secondary';
  label?: string | React.ReactNode;
  type: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  icon?: Element | React.ComponentType | React.ElementType | any;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonIconClass?: string;
}
const Button = ({
  btnType = 'primary',
  label,
  type = 'button',
  disabled,
  icon,
  buttonIconClass,
  className = 'h-[3rem] w-[11rem]',
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={` ${
        btnType === 'primary' ? 'bg-primary font-sans text-white' : ''
      }  rounded-lg px-4 py-2  font-sans ${className}`}
      type={type}
      disabled={disabled}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {!icon && label}
      {icon && (
        <div className={buttonIconClass}>
          <p className="pt-1 leading-[0.889rem]">{label}</p>
          <i className="">{icon}</i>
        </div>
      )}
    </button>
  );
};

export default Button;
