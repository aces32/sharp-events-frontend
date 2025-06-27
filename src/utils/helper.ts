/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
export const handleFormFile = (list: any, prop: any) =>
  // @ts-ignore

  list.map((item) => {
    const obj = { ...item };

    if (!obj[prop]) {
      obj[prop] = null;
      return obj;
    }
    obj[prop] = obj[prop][0];
    return obj;
  });

export function isFileInputEmpty(files: [File]): boolean {
  // @ts-ignore

  let valid = true;
  if (files) {
    // @ts-expect-error
    const file = files[0] ?? files?.Files[0];
    if (file) {
      return valid;
    }
    valid = false;
  }
  return valid;
}

export function checkIfFileIsTooBig(file?: File): boolean {
  let valid = true;
  if (file) {
    const size = file.size / 1024 / 1024;
    if (size > 10) {
      valid = false;
    }
    return valid;
  }
  return valid;
}

export function checkIfImageIsCorrectType(files?: [File]): boolean {
  let valid = true;
  if (files) {
    // @ts-ignore
    const file = files[0] ?? files?.Files[0];
    if (file) {
      if (
        !['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(file.type.toLowerCase())
      ) {
        valid = false;
      }
      return valid;
    }
    valid = false;
  }
  return valid;
}
