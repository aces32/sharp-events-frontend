import SeatIcon from 'assets/Icon/seat';
import GarageIcon from 'assets/Icon/garage';
import YearIcon from 'assets/Icon/year';
import SquareFoot from 'assets/Icon/square-foot';
import PoolIcon from 'assets/Icon/pool';
import RatingIcon from 'assets/Icon/rating';

interface DataProps {
  eventCenterTypes?: {
    capacity: number;
    sqaureFoot: number;
    facilities: {
      facility: {
        name: string;
      };
      capacity: number;
    }[];
  };
  rating: string;
}

const EventDetailsSummary = ({ eventCenterTypes, rating }: DataProps) => {
  return (
    <div className="flex space-x-2 font-Rubik text-[0.688rem] font-bold">
      <div className="flex space-x-2">
        <SeatIcon />
        <div className="space-y-2">
          <p>Seat Capacity</p>
          <p>{eventCenterTypes?.capacity ?? 'NA'}</p>
        </div>
      </div>
      <div className="hidden space-x-2 md:flex">
        <GarageIcon />
        <div className="space-y-2">
          <p>Garage</p>
          <p>
            {eventCenterTypes?.facilities?.find(
              (facilities: any) => facilities?.facility?.name === 'Parking',
            )?.capacity ?? 0}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <YearIcon />
        <div className="space-y-2">
          <p>Rest Rooms</p>
          <p>
            {eventCenterTypes?.facilities?.find(
              (facilities: any) => facilities?.facility.name === 'Restrooms/Toilets',
            )?.capacity ?? 0}
          </p>
        </div>
      </div>
      <div className="hidden space-x-2 md:flex">
        <YearIcon />
        <div className="space-y-2">
          <p>Audio Visual Equipment</p>
          <p>
            {eventCenterTypes?.facilities?.find(
              (facilities: any) => facilities?.facility.name === 'Audio Visual Equipment',
            )?.capacity ?? 0}
          </p>
        </div>
      </div>
      <div className="hidden space-x-2 md:flex">
        <SquareFoot />
        <div className="space-y-2">
          <p>Sq/ft</p>
          <p>{eventCenterTypes?.sqaureFoot ?? 'NA'}</p>
        </div>
      </div>
      <div className="hidden space-x-2 lg:flex">
        <PoolIcon />
        <div className="space-y-2">
          <p>Swimming Pool</p>
          <p>
            {eventCenterTypes?.facilities?.find(
              (facilities: any) => facilities?.facility.name === 'Pool',
            )?.capacity ?? 0}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <RatingIcon />
        <div className="space-y-2">
          <p>Rating</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};
export default EventDetailsSummary;
