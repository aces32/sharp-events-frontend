import TwitterIcon from 'assets/Icon/Twitter-Icon';
import FacebookIcon from 'assets/Icon/Facebook-Icon';
import InstagramIcon from 'assets/Icon/Instagram-Icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-primarybg px-7 py-5">
      <main className="my-5">
        <div className="flex flex-row flex-wrap justify-between border-b border-gray-500 py-10">
          <div className="mb-4 w-auto sm:w-[38%] md:w-[30%] lg:mb-0 lg:ml-2 lg:flex lg:w-2/5 lg:items-center lg:justify-center">
            <div className="lg:w-2/5">
              <h3 className="font-Inter text-[1.5rem]  font-extrabold text-primaryText">
                SHARP EVENT
              </h3>
              <p className="font-Roboto font-semibold text-[#000000]/60">
                Sharp Event is a service provider site for finding the best places to host your
                events
              </p>
            </div>
          </div>
          <div className="font-Roboto sm:px-2">
            <Link to="/service">
              <h4 className="font-semibold">Our Services</h4>
            </Link>
            <div className="pt-4">
              <p className="mb-2 font-semibold text-[#000000]/60">Help Center</p>
              <p className="mb-2 font-semibold text-[#000000]/60">F.A.Q</p>
            </div>
          </div>
          <div className="mx-0 font-Roboto sm:px-2">
            <h4 className="font-semibold">Company</h4>
            <div className="pt-4">
              <p className="mb-2 font-semibold text-[#000000]/60">About us</p>
              <p className="mb-2 font-semibold text-[#000000]/60">Host</p>
              <p className="mb-2 font-semibold text-[#000000]/60">Activities</p>
              <p className="mb-2 font-semibold text-[#000000]/60">Cities</p>
            </div>
          </div>
          <div className="font-Roboto sm:px-2">
            <h4 className="font-semibold">Get in touch</h4>
            <div className="pt-4">
              <p className="mb-2 font-semibold text-[#000000]/60">baas@the-baas.com</p>
              <p className="mb-2 font-semibold text-[#000000]/60">
                8, Ayo Buari street, Alapere ketu, Lagos.
              </p>
              <div className="flex w-1/5 flex-row justify-between space-x-4 pt-1">
                <div className="cursor-pointer">
                  <FacebookIcon />
                </div>
                <div className="cursor-pointer">
                  <InstagramIcon />
                </div>
                <div className="cursor-pointer">
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-7">
          <p className="font-bold text-[#000000]/50">
            {' '}
            &copy; {currentYear} SharpEvent. An Event Booking Agency
          </p>
        </div>
      </main>
    </section>
  );
};

export default Footer;
