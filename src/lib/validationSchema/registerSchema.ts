import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(4, 'First Name is too short - should be 8 chars minimum.'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(4, 'Last Name is too short - should be 8 chars minimum.'),

  email: Yup.string().email().required('email is required').typeError('email is required'),

  phone: Yup.string()
    .min(11, 'phone number has to be 11 numbers')
    .max(11, 'phone number has to be 11 numbers')
    .typeError('phone number is required'),

  password: Yup.string()
    .required()
    .typeError('password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
});

export default RegisterSchema;
