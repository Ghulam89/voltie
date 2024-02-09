'use client'
import React,{useEffect,useRef,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {blackbg, sliderImageFirst, sliderImageSecond, productfourBg,sliderImageThird, sliderImageFour, sliderImageFive, sliderImageSix, heroBgOne, heroBgTwo, heroBgThree, heroBgFour, heroBgFive, charger,productTwoImg,productThreeImg,productfourImg } from '@/assets/images';
import Image from 'next/image'
import Heading from '../../ui/Heading/Heading';
import SubHeading from '../../ui/SubHeading/SubHeading';
import Description from '../../ui/Description/Description';
import Button from '../../ui/Button/Button';
import '../HeroSlider/HeroSlider.css'
import { useSlider } from '@/context/SliderContext';
import Link from 'next/link';
import homepagevideo  from '../../../public/videos/homepagevideo.mp4';
import ChargingNetwork from '../../NetworkOverview/ChargingNetwork';
import ProductOne from '@/components/Products/productOne';
import ProductTwo from '@/app/product-two/page';
import ProductThree from '@/components/Products/productThree';
import ProductFour from '@/components/Products/productFour';
import Volteleveltwocharger from '@/components/ChargerDetails/VolteLevelTwoCharger';
import PlanA from '@/components/Plans/PlanA';
import Blank from './Blank';
const HeroSliderData = [
    {
        type:'component',
        image:heroBgTwo,
        heading:"Power Up With VoltiE!",
        subHeading:"",
        description:"",
        link:"/",
        component : <ChargingNetwork />
    },
  {
    type: 'image',
    image:blackbg,
    heading:"Power Up With VoltiE!",
    subHeading:"",
    link:"/",
    description:"VoltiE is a Full Service EV Charging Network focused on designing fast & effective EV Charging Solutions for Commercial Properties & Communities in the US.",
  },
  {
    type: 'image',
    image:blackbg,
    heading:"VoltiE Level 2 Charger",
    subHeading:"",
    chargerImage:charger,
    link:"/volte-level-2-charger",
    description:"The VoltiE Level 2 is a stylish and user-friendly charging solution with a Type 1 connector and smart app integration for easy installation and use. UL-certified, dustproof, and waterproof, ensures the top priority of EV charging safety. In addition, VoltiE level 2 wins Red Dot Award for its distinctive design, it also offers intelligent load management and seamless PV integration for optimized energy usage.",
  },
  // {
  //   type: 'image',
  //   image:blackbg,
  //   // image:null,
  //   heading:"VoltiE DC Charger",
  //   subHeading:"Efficient,Optional,Intelligent,Secure & Safe",
  //   chargerImage:productTwoImg ,
  //   link:"/product-two",
  //   description:"The VoltiE Series DC Charger uses a 30kW constant power module to reduce charging time with high current output. It smartly allocates power to meet different vehicle charging needs for safe and fast charging. With IP54 protection, it adapts to all weather conditions and has multiple protection functions for user safety. Maintenance is easy with support for remote OTA upgrades and operation/maintenance platforms",
  // },
  {
    type: 'image',
    // image:blackbg,
    image:productfourBg, 
    heading:"",
    subHeading:"",
    chargerImage:"" ,
    link:"/",
    show:false,
    description:"Our Partner Plan gives Owners the opportunity to receive a larger percentage of the of the estimated monthly revenue while also benefiting from VoltiE’s Management Services.",
  },
  // {
  //   type: 'image',
  //   // image:blackbg,
  //   image:heroBgFive,
  //   heading:"Product 4 comming soon",
  //   subHeading:"Operator Managed Service",
  //   link:"/",
  //   show:false,
  //   chargerImage: productfourImg ,
  //   description:"The Operator Managed Service gives a manager independent control over the entire EV Charging Platform. Larger Operators with multiple locations can leverage the total revenue potential from their EV Charging Network from day one.",
  // }

]
const HeroSliderSecond = () => {
  const { selectItem, selectedItem } = useSlider();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null); // Initialize with null
  // console.log('Selected Item ',selectedItem)
 
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    console.log('Before Change - New Index:', newIndex);
    setCurrentSlideIndex(newIndex);

  };
 
  console.log("currentSlideIndex",currentSlideIndex)

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    initialSlide: selectedItem,
    appendDots: (dots: any) => (
      <div style={{ position: 'absolute', bottom: '10%' }}>
        <ul className='gap-x-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid white',
          opacity: '0.8',
          margin: '0 20px',
        }}
        className='active-dot'
      ></div>
    ),
    beforeChange: handleBeforeChange,
    
  };

 
  useEffect(()=>{
    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(selectedItem);
    }
  },[selectedItem])

 useEffect(() => {
  setCurrentSlideIndex(selectedItem);
}, [selectedItem]);
  return (
    <>
    <section className='relative h-full w-full overflow-hidden' id='products'>
    
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {HeroSliderData.map((slideData, index) => (
          <div className='h-[93vh] w-full' key={index}>
            <div className='relative h-full mx-auto'>
              {slideData?.type === 'image' ? (
                <Image
                  src={slideData.image || ''}
                  layout='fill'
                  className='w-[100vw] h-[100%] object-cover'
                  alt='slider-image-first'
                />

              ) : (
                slideData.component 
              )}
              {
                slideData.chargerImage && <div className='text-white absolute left-[1%] md:left-[4%] top-[5%] md:top-[20%] h-full p-2'>
                <Image src={slideData.chargerImage} alt='charger image' className='h-[70%] md:w-[100%] w-auto sm:w-[25rem]'/>
              </div>
              }
              <div className='absolute z-10 text-white w-full h-full'>
                <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                  <div className='gap-y-4 flex flex-col justify-center items-center'>
                   {slideData.show==false ? (
                    <div>
                    <Heading name={slideData.heading} />
                 </div>

                
                   ):(    <div>
                      <Heading name={slideData.heading} />
                      <SubHeading name={slideData.subHeading} />
                      <Description name={slideData.description} />
                      <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap pt-10'>
                      <Link href='/contact'><Button name="Contact Us" bgColor='black'/></Link>
                        {/* <Link href="/volte-level-2-charger" >
                          <Button name="View Details" bgColor='white'/>
                        </Link> */}
                        {slideData.link && <Link href={slideData.link}>
                          <Button name="View Details" bgColor='white'/>
                        </Link>}
                      </div>
                    </div>)}
                   
                   
                  </div>
                 {/* {
                  slideData.chargerImage && <div className='text-white absolute left-[1%] sm:left-[10%] top-[20%] h-full p-2'>
                    <Image src={slideData.chargerImage} alt='charger image' className='h-[90%] w-auto sm:w-[20rem]'/>
                  </div>
                 } */}
                </div>
              </div>
              <div className='absolute inset-0 bg-black opacity-30  '></div>
            </div>
          </div>
        ))}
      </Slider>
      
    </section>
      {/* Content outside the slider */}
      {currentSlideIndex === 1 && <Blank />}
      {currentSlideIndex === 2 && <Volteleveltwocharger />} 
      {currentSlideIndex === 3 && <Blank />} {/* //ProductTwo */}
      {currentSlideIndex === 4 && <ProductThree />}
      {currentSlideIndex === 5 && <ProductFour />}


      {/* {(() => {
        if (currentSlideIndex === 1) {
          return <ProductOne />;
        } else if (currentSlideIndex === 2) {
          return <ProductTwo />;
        } else if (currentSlideIndex === 3) {
          return <ProductThree />;
        } else if (currentSlideIndex === 4) {
          return <ProductFour />;
        } else {
          // Default case, render something else if needed
          return <ProductFour />;
        }
      })()} */}
    </>
  );
}

export default HeroSliderSecond