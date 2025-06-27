import * as yup from 'yup';

const SearchEventSchema = yup.object().shape({
  eventType: yup.string().notRequired(),
  eventCenterType: yup.string().notRequired(),
  location: yup.string().notRequired(),
  minPrice: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .notRequired(),

  maxPrice: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .notRequired(),
  // minPrice: yup.number().notRequired(),
  // .typeError('Minimum price must be a number')
  // .required('Minimum price is required')

  // .min(0, 'Minimum price cannot be negative')
  // maxPrice: yup.number().notRequired(),
  // .typeError('Maximum price must be a number')
  // .required('Maximum price is required')

  // .test('is-greater', 'Maximum price must be greater than minimum price', function (value) {
  // const { minPrice } = this.parent;
  // return Number(value) >= Number(minPrice);
  // }),
});
export default SearchEventSchema;
