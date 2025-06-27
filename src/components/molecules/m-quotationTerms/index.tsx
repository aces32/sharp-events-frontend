import { useFieldArray } from 'react-hook-form';
import { FaArrowDown, FaArrowUp, FaTimes } from 'react-icons/fa';

interface QuotationTermsProps {
  control: any;
  register: any;
}
const QuotationTerms = ({ control, register }: QuotationTermsProps) => {
  const { fields, remove, append, move } = useFieldArray({
    control,
    name: 'terms',
  });
  return (
    <div className="p-2">
      <h3 className="border-b border-dashed border-black font-Rubik text-base font-bold">
        Terms and conditions
      </h3>
      {fields.map((item, index) => (
        <div key={item.id} className="mb-2 flex items-center gap-2  border-b ">
          <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
          <input
            {...register(`terms.${index}.text`)}
            className="flex-1 rounded bg-transparent p-2 "
          />
          <button type="button" aria-label="remove term" onClick={() => remove(index)}>
            <FaTimes />
          </button>
          {index < fields.length - 1 && (
            <button type="button" aria-label="move term" onClick={() => move(index, index + 1)}>
              <FaArrowDown />
            </button>
          )}
          {index > 0 && (
            <button type="button" aria-label="move term" onClick={() => move(index, index - 1)}>
              <FaArrowUp />
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append({ text: '' })} className="mt-2 ">
        + Add More Fields
      </button>
    </div>
  );
};

export default QuotationTerms;
