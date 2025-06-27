import QuillEditor from 'hoc/react-quill';
import { Controller } from 'react-hook-form';

interface AddDiscriptionProps {
  addDiscription: boolean;
  control: any;
}
const AddDiscription = ({ addDiscription, control }: AddDiscriptionProps) => {
  return (
    <div className="w-full">
      {addDiscription && (
        <Controller
          name="additionalInfo"
          control={control}
          render={({ field }) => (
            <QuillEditor
              handleChange={(e) => field.onChange(e)}
              value={field.value as string}
              placeholder="Describe the service"
            />
          )}
        />
      )}
    </div>
  );
};

export default AddDiscription;
