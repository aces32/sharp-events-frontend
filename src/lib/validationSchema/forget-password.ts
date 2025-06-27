import * as Yup from 'yup';

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required').typeError('email is required'),
});

export default ForgetPasswordSchema;
