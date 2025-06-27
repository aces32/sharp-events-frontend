import React, { useState } from 'react';

const useInput = (initialValue: string | undefined) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };
  return {
    value,
    onChange,
  };
};

export default useInput;
