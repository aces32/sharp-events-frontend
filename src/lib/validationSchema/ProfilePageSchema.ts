import * as Yup from 'yup';

const ProfilePageSchema = Yup.object().shape({
  firstName: Yup.string().notRequired(),
  lastName: Yup.string().notRequired(),
  companyName: Yup.string().notRequired(),
  companyEmail: Yup.string().notRequired(),
});
export default ProfilePageSchema;
