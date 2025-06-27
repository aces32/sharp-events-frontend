import Button from 'components/atoms/a-button';
import { Link } from 'react-router-dom';

interface ServiceComponentProps {
  image: string;
  header: string;
  text: string | { id: number; text: string }[];
  button?: string;
  isLast?: boolean;
  topText?: string;
  link?: string;
}

const SeviceComponent = ({
  image,
  header,
  text,
  button,
  isLast,
  topText,
  link,
}: ServiceComponentProps) => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
      <img src={image} alt="" />
      <div className="flex flex-col items-center justify-around gap-y-5">
        <div className={`${isLast ? 'lg:w-3/4' : ' md:w-3/4 lg:w-1/2'}`}>
          <p className="mb-5 font-Rubik text-sm font-bold">{topText}</p>
          <h3 className={` ${isLast ? 'text-4xl' : 'text-xl'} mb-5 font-Rubik  font-bold`}>
            {header}
          </h3>
          {Array.isArray(text) ? (
            <ul className="list-disc space-y-2 pl-5 font-Roboto text-lg font-medium">
              {text.map((point) => (
                <li key={point.id}>{point.text}</li>
              ))}
            </ul>
          ) : (
            <p className="whitespace-pre-line font-Roboto text-lg font-medium">{text}</p>
          )}
          {link && (
            <Link to={link}>
              {' '}
              {button && <Button label={button} type="button" className="mt-10 w-full" />}
            </Link>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default SeviceComponent;
