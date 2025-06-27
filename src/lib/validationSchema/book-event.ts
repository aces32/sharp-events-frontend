import * as Yup from 'yup';

const bookEventSchema = Yup.object().shape({
  customerFirstName: Yup.string()
    .required('first name is required')
    .min(3, 'minimum of 3 characters'),
  customerLastName: Yup.string()
    .required('last name is required')
    .min(3, 'minimum of 3 characters'),
  customerEmail: Yup.string().email().required('email is required'),
  customerPhoneNumber: Yup.string()
    .required('phone number is required')
    .min(11, 'minimum of 11 characters')
    .max(11, 'maximum of 11 characters'),
});

export default bookEventSchema;
