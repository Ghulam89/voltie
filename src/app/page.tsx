'use client'
import ContactForm from '@/components/Contact/ContactForm';
import CuttingEdgeSection from '@/components/Home/CuttingEdgeSection/CuttingEdgeSection';
import DetailsSection from '@/components/DetailsSection/DetailsSection';
import DetailsSectionThree from '@/components/DetailsSection/DetailsSectionThree';
import DetailsSectionTwo from '@/components/DetailsSection/DetailsSectionTwo';
import Faq from '@/components/Home/FAQ/FAQ';
import FeaturesSection from '@/components/FeaturesSecton/FeaturesSection';
import {Footer} from '@/components/Footer/Footer';
import HeroSlider from '@/components/Home/HeroSlider/HeroSlider'
import HeroSliderSecond from '@/components/Home/HeroSlider/HeroSliderSecond';
import IntroSection from '@/components/IntroSection/IntroSection';
import Navbar from '@/components/Navbar/Navbar'
import NetworkBenefits from '@/components/NetworkBenefits/NetworkBenefits';
import NetworkBenefitsTwo from '@/components/NetworkBenefits/NetworkBenefits2';
import NetworkBenefitsThree from '@/components/Home/NetworkBenefits3';
import NetworkOverview from '@/components/NetworkOverview/NetworkOverview';
import OurServicesTeam from '@/components/ServicesTeam/ServicesTeam';
import SoftwareSolution from '@/components/Home/SoftwareSolution/SoftwareSolution';
import VideoSection from '@/components/Home/VideoSection/VideoSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ProductOne from '@/components/Products/productOne';
import ProductTwo from '@/app/product-two/page';
import { useState } from 'react';
import ProductThree from '@/components/Products/productThree';
import ProductFour from '@/components/Products/productFour';

import ChargingOptions from '@/components/about/ChargingOptions/ChargingOptions'
export default function Home() {

  const handleScroll = () => {
    const targetScrollPosition = window.scrollY + window.innerHeight;
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
        {/* <HeroSlider /> */}

        <HeroSliderSecond />  
        {/* <ChargingOptions/> */}
        <SoftwareSolution />
        <NetworkBenefitsThree />
        <CuttingEdgeSection />
        {/* <VideoSection /> */}
        <ContactForm />
        <Faq />
        <button
  className="fixed w-10 h-10 bottom-4 left-1/2 transform -translate-x-1/2 p-2
   bg-black text-white rounded-md cursor-pointer z-50 transition-transform
    duration-1000 hover:scale-100 animate-bounce infinite ease-in-out"
  onClick={handleScroll}
>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
        {/* <NetworkOverview />
        <NetworkBenefits />
        <NetworkBenefitsTwo />
        <IntroSection />
        <DetailsSectionTwo/>
        <DetailsSectionThree /> */}
        {/* <ContactForm /> */}
    </>
  );
}