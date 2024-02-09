'use client'
import React,{useEffect,useRef,useState} from 'react'
import Slider from "react-slick";
import { ListGroup, ListGroupItem } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {blackbg, sliderImageFirst, sliderImageSecond, sliderImageThird, sliderImageFour, sliderImageFive, sliderImageSix, heroBgOne, heroBgTwo, heroBgThree, heroBgFour, heroBgFive, charger,productTwoImg,productThreeImg,productfourImg } from '@/assets/images';
import Image from 'next/image'
import Heading from '../../components/ui/Heading/Heading';
import SubHeading from '../../components/ui/SubHeading/SubHeading';
import Description from '../../components/ui/Description/Description';
import Button from '../../components/ui/Button/Button';
// import './HeroSlider.css'
import { useSlider } from '@/context/SliderContext';
import Link from 'next/link';
import ChargingNetwork from '../../components/NetworkOverview/ChargingNetwork';

// const HeroSliderData = [
//     {
//         type:'component',
//         image:heroBgTwo,
//         heading:"Power Up With VoltiE!",
//         subHeading:"",
//         description:"",
//         link:"",
//         component : <ChargingNetwork />
//     },
 
//   {
//     type: 'image',
//     image:heroBgTwo,
//     heading:"VoltiE Level 2 Charger",
//     subHeading:"",
//     chargerImage:charger,
//     link:"/volte-level-2-charger",
//     description:"The VoltiE Level 2 is a stylish and user-friendly charging solution with a Type 1 connector and smart app integration for easy installation and use. UL-certified, dustproof, and waterproof, ensures the top priority of EV charging safety. In addition, VoltiE level 2 wins Red Dot Award for its distinctive design, it also offers intelligent load management and seamless PV integration for optimized energy usage.",
//   }
//   ]
const ProductTwo = () => {
  const { selectedItem } = useSlider();

  const sliderRef = useRef<Slider | null>(null); // Initialize with null
// console.log('Selected Item ',selectedItem)
  var settings = {
    dots: true, // Display dots
    arrows: true, // Display arrows
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    initialSlide:selectedItem,


  };
  useEffect(()=>{
    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(selectedItem);
    }
  },[selectedItem])
  return (
    <section className='relative h-full w-full overflow-hidden' id='products'>
   
      
          <div className='h-[100vh] w-full'>
             <div className='relative h-full mx-auto'>
             <Image
                  src={blackbg}
                  layout='fill'
                  className='w-[100vw] h-[100%] object-cover'
                  alt='slider-image-first'
                />
              
              <div className='absolute z-10 text-white w-full h-full'>
               
               {/* ------------------------ */}
               <div className='gap-y-4 flex flex-col items-center w-[100%]'>
  <Heading name="VoltiE DC CHARGER" />
  <div className='w-full justify-around gap-6 flex-col'>
     <div className='flex  justify-around w-full'>
        <div className='flex flex-col  w-[30%]'>
          <SubHeading name="Efficient" />
          <ListGroup className="list-disc list-inside">
            <ListGroupItem>Multiple and simultaneous outputs (CCS1, NACS)</ListGroupItem>
            <ListGroupItem>Two CCS1 up to 240kW in total</ListGroupItem>
            <ListGroupItem>THD≤5%@100% Loading</ListGroupItem>
          </ListGroup>
        </div>
        <div className='flex flex-col  w-[30%]'>
          <SubHeading name="Optional" />
          <ListGroup className="list-disc list-inside">
            <ListGroupItem>Multi-start mode (QR Code, RFID, Credit Card (Optional),<br></br> ISO 15118 PLUG & CHARGE)</ListGroupItem>
          </ListGroup>
        </div>
    </div>

    <div className='flex  justify-around  w-full'>
        <div className='flex flex-col  w-[30%]'>
          <SubHeading name="Intelligent" />
          <ListGroup className="list-disc list-inside">
            <ListGroupItem>Multiple communication: Ethernet/4G/Wi-Fi/DIN 70121</ListGroupItem>
            <ListGroupItem> OCPP 1.6 Json with CMS(OCPP 2.0 upgradeable)</ListGroupItem>
            <ListGroupItem>OTA software update</ListGroupItem>
          </ListGroup>
        </div>
        <div className='flex flex-col w-[30%]'>
          <SubHeading name="Secure & Safe" />
          <ListGroup className="list-disc list-inside">
            <ListGroupItem> Energy Metering Class A</ListGroupItem>
            <ListGroupItem> Ingression protection: IP54</ListGroupItem>
            <ListGroupItem> ISO 15118 compliant</ListGroupItem>
          </ListGroup>
        </div>
    </div>
   
  </div>
</div>




    {/* ---------------------- */}
                 
                 
              
              </div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
          </div>
         
    
    </section>
  );
}

export default ProductTwo;