import * as yup from 'yup';

const changePasswordSchema = yup.object().shape({
  npassword: yup
    .string()
    .required('No password provided')
    .typeError('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .typeError('Password Short')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  cpassword: yup
    .string()
    .required('confirm password is required')
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.npassword === value;
    }),
});

export default changePasswordSchema;
