import Navbar from 'components/molecules/m-navbar';
import Footer from 'components/molecules/m-landing-footer';

interface HomeWrapperProps {
  children: React.ReactNode;
}

const HomeWrapper = ({ children }: HomeWrapperProps) => {
  return (
    <>
      <Navbar />
      <section className="">{children}</section>
      <Footer />
    </>
  );
};
export default HomeWrapper;
