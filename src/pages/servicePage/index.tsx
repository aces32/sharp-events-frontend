import HomeWrapper from 'hoc/home-wrapper';
import image from 'assets/images/Frame 101.png';
import image1 from 'assets/images/Rectangle 4384 (1).png';
import image2 from 'assets/images/Rectangle 4384 (2).png';
import image3 from 'assets/images/Rectangle 4384.png';
import image4 from 'assets/images/Rectangle 4385.png';
import SeviceComponent from 'components/molecules/m-seviceComponent';
import HowItWork from 'components/molecules/m-howItWork';

const Data = [
  {
    id: 1,
    image: image3,
    header: 'Plan Your Perfect Event',
    text: 'Search and book stunning event centers across Nigeria, and discover vetted service providers like caterers, photographers, and decorators, all in one place. Save time and stress!',
    button: 'Start Planning Your Event',
    link: '/register/user',
  },
  {
    id: 2,
    image: image1,
    header: 'List Your Event Center',
    text: 'Expand your reach and attract more bookings. Register your event center and manage your spaces with our powerful dashboard. Simple registration process to grow your business!',
    button: 'List My Event Center',
    link: '/register/admin',
  },
  {
    id: 3,
    image: image2,
    header: 'Grow Your Event Business',
    text: 'Connect with clients seeking top-tier services. Create a professional profile, showcase your portfolio, and expand your client base. Join our community of trusted event professionals!',
    button: 'Join as a Service Provider',
    link: '/register/vendor',
  },
  {
    id: 4,
    image: image4,
    header: 'Experience the Future of Event Planning.',
    topText: 'WHY CHOOSE US',
    text: [
      {
        id: 1,
        text: 'Curated Network of Excellence: We meticulously vet every event center and service provider to ensure you connect only with the best in Nigeria.',
      },
      {
        id: 2,
        text: 'Quality & Reliability Assured: Our platform is built on a foundation of trust, connecting you with verified professionals and venues.',
      },
      {
        id: 3,
        text: 'Simplify Your Journey: From venue discovery to booking your ideal vendor, our intuitive platform streamlines every step of your event planning.',
      },
      {
        id: 4,
        text: 'All-in-One Event Hub: Sharp Event brings together everything you need for unforgettable events, venues, caterers, photographers, and more, all in one place.',
      },
      {
        id: 5,
        text: 'Local Expertise, Global Standards: Built for Nigeria, by Nigerians, delivering world-class event solutions tailored to our unique needs.',
      },
      {
        id: 6,
        text: 'Dedicated Support: Our team is here to assist you every step of the way, ensuring a smooth and successful experience.',
      },
      {
        id: 7,
        text: 'Be Among the First: Join our growing network of premier event businesses and gain early access to a new era of bookings and connections.',
      },
    ],
  },
];
const ServicePage = () => {
  return (
    <HomeWrapper>
      <div className="px-5 md:px-10">
        <div className="h-64 w-full md:h-96">
          <img src={image} alt="" className="h-full w-full object-fill" />
        </div>
        <div className="mx-auto mb-5 mt-10 flex h-full w-full flex-col items-center justify-center gap-y-5 text-center md:w-3/5 ">
          <h3 className="text-center font-Rubik text-2xl font-bold capitalize md:text-5xl">
            Your Event Vision, Made Real. Start Here.{' '}
          </h3>
          <p className="font-Roboto text-lg font-medium">
            Whether you&#39;re planning an event, owning a venue, or providing top-notch services,
            Sharp Event connects you to opportunities and resources nationwide.
          </p>
        </div>

        {Data.map((item, index) => (
          <SeviceComponent
            key={item.id}
            image={item.image}
            header={item.header}
            text={item.text}
            button={item.button}
            isLast={index === Data.length - 1}
            topText={item.topText}
            link={item.link}
          />
        ))}
        <HowItWork />
      </div>
    </HomeWrapper>
  );
};

export default ServicePage;
