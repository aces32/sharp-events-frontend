import { lazy, Suspense } from 'react';
import MainHeader from 'components/molecules/m-main-header';
import LandingSectionOne from 'components/molecules/m-landing-section-one';
import LandingSectionSix from 'components/molecules/m-landing-section-six';
import LandingSectionFour from 'components/molecules/m-landing-section-four';
import LandingSectionFive from 'components/molecules/m-landing-section-five';
import HomeWrapper from 'hoc/home-wrapper';

const LandingSectionTwo = lazy(() => import('components/molecules/m-landing-section-two'));
const LandingSectionThree = lazy(() => import('components/molecules/m-landing-section-three'));

const LandingPage = () => {
  return (
    <HomeWrapper>
      <section className="min-h-screen bg-bglanding   ">
        <MainHeader />
        <LandingSectionOne />
        <Suspense fallback={<div>Loading...</div>}>
          <LandingSectionTwo />
          <LandingSectionThree />
        </Suspense>
        <LandingSectionFour />
        <LandingSectionFive />
        <LandingSectionSix />
      </section>
    </HomeWrapper>
  );
};

export default LandingPage;
