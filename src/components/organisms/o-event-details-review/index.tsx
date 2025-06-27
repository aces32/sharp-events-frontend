import ThumbDown from 'assets/Icon/thumbsDown';
import ThumbUp from 'assets/Icon/thumbUp';
import user from 'assets/images/user-image.png';
import user2 from 'assets/images/user-image2.png';
import DynamicReview from 'components/molecules/m-dynamic-review';
import ArrowDown from 'assets/Icon/arrow-down';
import { format } from 'date-fns';

const EventDetailsReview = () => {
  const ReviewProps = [
    {
      name: 'Abdul-Salam Ibrahim',
      date: format(new Date(), 'dd MMMM, yyyy'),
      image: user,
      rating: 5,
      review: 'We enjoyed our event and created priceless memories. We are definitely coming back!',
    },
    {
      name: 'Buhari Sulaiman',
      date: format(new Date(), 'dd MMMM, yyyy'),
      image: user2,
      rating: 2,
      review: 'We enjoyed our event and created priceless memories. We are definitely coming back!',
    },
  ];
  return (
    <div className="space-y-4  py-4">
      <div className="flex justify-between">
        <DynamicReview AverageRating={3.5} />
        <div className="  flex space-x-2 leading-[13.31px] text-[#7F7F7F]">
          <p className="font-Inter text-[0.688rem] font-medium">
            sort by <span className="font-bold">Newest</span>
          </p>{' '}
          <i className="pt-0.5">
            <ArrowDown />
          </i>
        </div>
      </div>
      <div className="space-y-4 divide-y-[0.12rem] divide-[#717070]">
        {ReviewProps?.map((review) => (
          <div key={review.name} className="space-y-3 py-3">
            <div className="flex justify-between">
              <div className="inline-flex space-x-2">
                <img src={review.image} alt="user" />
                <div>
                  <p className="font-bold">{review?.name}</p>
                  <p className=" text-[0.625rem] font-semibold text-[#717070]">{review?.date}</p>
                </div>
              </div>
              <DynamicReview AverageRating={review?.rating} />
            </div>
            <p className="text-[0.875rem] font-semibold text-[#717070]">{review?.review}</p>
            <div className="flex space-x-5">
              <div className="inline-flex space-x-2">
                <ThumbUp />
                <p className="-mt-0.5 text-[0.688rem] font-semibold">Helpful</p>
              </div>
              <div className="inline-flex space-x-2">
                <ThumbDown />
                <p className="-mt-0.5 text-[0.688rem] font-semibold"> Not Helpful</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetailsReview;
