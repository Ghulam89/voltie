
'use client'
import React,{useEffect,useRef,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImageFirst, sliderImageSecond, sliderImageThird, sliderImageFour, sliderImageFive, sliderImageSix, heroBgOne, heroBgTwo, heroBgThree, heroBgFour, heroBgFive, charger } from '@/assets/images';
import Image from 'next/image'
import Heading from '../ui/Heading/Heading';
import SubHeading from '../ui/SubHeading/SubHeading';
import Description from '../ui/Description/Description';
import Button from '../ui/Button/Button';
// import './HeroSlider.css'
import { useSlider } from '@/context/SliderContext';
import Link from 'next/link';
import ChargingNetwork from '../NetworkOverview/ChargingNetwork';

const HeroSliderData = [
    {
        type:'component',
        image:heroBgTwo,
        heading:"Power Up With VoltiE!",
        subHeading:"",
        description:"",
        link:"",
        component : <ChargingNetwork />
    },
 
  {
    type: 'image',
    image:heroBgTwo,
    heading:"VoltiE Level 2 Charger",
    subHeading:"",
    chargerImage:charger,
    link:"/volte-level-2-charger",
    description:"The VoltiE Level 2 is a stylish and user-friendly charging solution with a Type 1 connector and smart app integration for easy installation and use. UL-certified, dustproof, and waterproof, ensures the top priority of EV charging safety. In addition, VoltiE level 2 wins Red Dot Award for its distinctive design, it also offers intelligent load management and seamless PV integration for optimized energy usage.",
  }
  ]
const ProductThree = () => {
  const { selectedItem } = useSlider();
  return (
    <section className='relative h-full w-full overflow-hidden' id='products'>
      <Slider
      >
          <div className='h-[100vh] w-full'>
            <div className='relative h-full mx-auto'>
             
                <Image
                  src={heroBgFour}
                  layout='fill'
                  className='w-[100vw] h-[100%] object-cover'
                  alt='slider-image-first'
                />          
              {
               <div className='text-white absolute left-[1%] md:left-[10%] top-[5%] md:top-[20%] h-full p-2'>
                <Image src={heroBgFour} alt='charger image' className='h-[90%] w-auto sm:w-[20rem]'/>
              </div>
              }
              <div className='absolute z-10 text-white w-full h-full'>
                <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                  <div className='gap-y-4 flex flex-col justify-center items-center'>
                    <Heading name="Product 3" />
                    <SubHeading name="At Home. At Work. On the Go." />
                   <Description name="Our Partner Plan gives Owners the opportunity to receive a larger percentage of the of the estimated monthly revenue while also benefiting from VoltiE’s Management Services." />
                    <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap mt-2'>
                    <Link href='/contact'><Button name="Contact Us" bgColor='black'/></Link>
                      <Link href="/volte-level-2-charger" >
                        <Button name="View Details" bgColor='white'/>
                      </Link>
                    </div>
                  </div>
                 {/* {
                  slideData.chargerImage && <div className='text-white absolute left-[1%] sm:left-[10%] top-[20%] h-full p-2'>
                    <Image src={slideData.chargerImage} alt='charger image' className='h-[90%] w-auto sm:w-[20rem]'/>
                  </div>
                 } */}
                </div>
              </div>
              <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>
          </div>
     
      </Slider>
    </section>
  );
}

export default ProductThree;