import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),

  password: Yup.string()
    .required()
    .typeError('password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
export default LoginSchema;
