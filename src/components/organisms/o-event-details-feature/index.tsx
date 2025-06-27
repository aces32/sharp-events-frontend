import FlexibleSpaceIcon from 'assets/Icon/flexible-space';
import StateOfArt from 'assets/Icon/state-of-art';
import CateringIcon from 'assets/Icon/catering';
import AmenitiesIcon from 'assets/Icon/amenities';
import AccomodationIcon from 'assets/Icon/accomodation';
import SecurityIcon from 'assets/Icon/security';
import AccessibilityIcon from 'assets/Icon/accessibility';
import OutdoorSpaceIcon from 'assets/Icon/outdoor-space';
import EventSupportIcon from 'assets/Icon/event-support';
import SustainabilityIcon from 'assets/Icon/sustainability';
import CustomizationIcon from 'assets/Icon/customiztion';

interface DataProps {
  facilities: {
    facility: {
      name: string;
    };
    capacity: number;
  }[];
}

const EventDetailsFeature = ({ facilities }: DataProps) => {
  return (
    <div className="space-y-4 py-4">
      <p className="font-Rubik text-[0.875rem] font-bold"> Feature & Amenities</p>
      <div className="space-y-2">
        <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
          {' '}
          <FlexibleSpaceIcon /> <p className="">Flexible Spaces</p>
        </div>
        <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
          Multipurpose event spaces with flexible seating arrangements
        </p>
      </div>
      {facilities?.find(
        (facility: any) => facility?.facility?.name === 'Audio-Visual Equipment',
      ) && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <StateOfArt /> <p className="">State-of-the-Art-Tech</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Advanced audiovisual equipment, sound and lighting systems{' '}
          </p>
        </div>
      )}
      {facilities?.find(
        (facility: any) => facility?.facility?.name === 'Catering and Kitchen Facilities',
      ) && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <CateringIcon /> <p className="">Catering Facilities</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Modern catering facilities and kitchen, with customizable menu options.
          </p>
        </div>
      )}
      {facilities?.find((facility: any) => facility?.facility?.name === 'Internet and Wi-Fi') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <AmenitiesIcon /> <p className="">Internet Facilities</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Wifi and high-speed internet{' '}
          </p>
        </div>
      )}
      {facilities?.find((facility: any) => facility?.facility.name === 'Restrooms') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <AmenitiesIcon /> <p className="">Rest Rooms</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Cleaned and well maintained Restrooms with dedicated cleaners that clean it hourly
          </p>
        </div>
      )}
      {facilities?.find((facility: any) => facility?.facility?.name === 'Lounge Areas') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <AmenitiesIcon /> <p className="">Breakout Rooms</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Lounge area and breakout room for relaxation and activities
          </p>
        </div>
      )}

      <div className="space-y-2">
        <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
          {' '}
          <AccomodationIcon /> <p className="">Accomodation</p>
        </div>
        <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
          Onsite accommodation and concierge services.
        </p>
      </div>
      {facilities?.find((facility: any) => facility?.facility?.name === 'Security and Safety') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <SecurityIcon /> <p className="">Security</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Lounge area and breakout room for relaxation and activities
          </p>
        </div>
      )}
      {facilities?.find((facility: any) => facility?.facility?.name === 'Security and Safety') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <SecurityIcon /> <p className="">Security</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Lounge area and breakout room for relaxation and activities
          </p>
        </div>
      )}
      {facilities?.find(
        (facility: any) => facility?.facility?.name === 'Accessibility Features',
      ) && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <AccessibilityIcon /> <p className="">SAccessibility</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Wheelchair accessibility, elevators, and accessible restrooms.
          </p>
        </div>
      )}
      {facilities?.find((facility: any) => facility?.facility?.name === 'Outdoor Areas') && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <OutdoorSpaceIcon /> <p className="">Outdoor Spaces</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Spacious outdoor areas and gardens for events and breaks.
          </p>
        </div>
      )}
      {facilities?.find(
        (facility: any) => facility?.facility?.name === 'Event Staff and Support',
      ) && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <EventSupportIcon /> <p className="">Event Support</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Event planning and management tools, and staff to assist you with your event
          </p>
        </div>
      )}

      <div className="space-y-2">
        <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
          {' '}
          <SustainabilityIcon /> <p className="">Sustainability</p>
        </div>
        <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
          Eco-friendly practices and sustainable operations
        </p>
      </div>
      {facilities?.find(
        (facility: any) => facility?.facility?.name === 'Decorations and Theming',
      ) && (
        <div className="space-y-2">
          <div className="inline-flex space-x-2 font-Rubik text-[0.75rem] font-bold leading-[0.75rem] text-black ">
            {' '}
            <CustomizationIcon /> <p className="">Customization</p>
          </div>
          <p className="font-Rubik text-[0.8rem] font-semibold leading-[0.75rem] text-[#717070] ">
            Customizable décor and design options to suit your event.
          </p>
        </div>
      )}
    </div>
  );
};

export default EventDetailsFeature;
