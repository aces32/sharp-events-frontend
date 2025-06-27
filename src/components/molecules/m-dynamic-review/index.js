/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable tailwindcss/no-custom-classname */

import './dynamic.scss';

function DynamicReview({ ...props }) {
  return (
    <div className="body font-Roboto font-bold">
      {' '}
      <div
        className="Stars"
        style={{ '--rating': props?.AverageRating ? props?.AverageRating : 0 }}
        aria-label={`Rating of this product is ${props?.AverageRating} out of 5.`}
      />{' '}
      {props?.AverageRating}
    </div>
  );
}

export default DynamicReview;
