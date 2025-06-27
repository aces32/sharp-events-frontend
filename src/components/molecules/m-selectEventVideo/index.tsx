import React from 'react';
import { Controller } from 'react-hook-form';
import { path } from 'ramda';
import LabeledInput from '../m-labeled-input';

interface AddVideoProps {
  control: any;
  name: string;
  errors: any;
}

const AddVideo = ({ control, name, errors }: AddVideoProps) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <LabeledInput
              label="Facility Video"
              name={name}
              id={name}
              type="file"
              htmlFor={name}
              accept="video/mp4"
              handleChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  field.onChange(file);
                }
              }}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="50"
              className="mt-0 block w-full rounded-md border border-gray-300 text-black shadow-sm
                       file:mr-4 file:rounded-lg file:rounded-r-full file:border-y-0 file:border-l-0
                       file:border-r-[0.05rem] file:border-white file:bg-gray-50 file:px-4 file:py-3
                       file:text-sm file:font-medium hover:file:text-white focus:outline-none md:w-full
                       lg:md:w-full xl:w-full"
              error={path([name, 'message'], errors)}
            />
            <div className="flex flex-wrap ">
              {field.value && (
                <div className="mx-4 mb-4 w-40 space-y-2 rounded-lg bg-white shadow-md">
                  <video
                    src={URL.createObjectURL(field.value)}
                    controls
                    className="h-[7.75rem] w-40 rounded-t-lg "
                  >
                    <track kind="captions" src="" label="English captions" default />
                  </video>
                </div>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
};
export default AddVideo;
