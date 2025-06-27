/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
export const handleFormFile = <T extends Record<string, any>>(list: T[], prop: keyof T) =>
  list.map((item) => {
    const obj = { ...item };
    const fileList = obj[prop] as File[] | undefined;
    if (!fileList || fileList.length === 0) {
      obj[prop] = null as unknown as T[keyof T];
      return obj;
    }
    obj[prop] = fileList[0] as unknown as T[keyof T];
    return obj;
  });

export function isFileInputEmpty(files?: File[]): boolean {
  if (files && files.length > 0 && files[0]) {
    return true;
  }
  return false;
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

export function checkIfImageIsCorrectType(files?: File[]): boolean {
  if (files && files.length > 0) {
    const file = files[0];
    return ['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(
      file.type.toLowerCase(),
    );
  }
  return false;
}
