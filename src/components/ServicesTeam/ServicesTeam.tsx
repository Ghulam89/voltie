'use client'
import React, { useRef } from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { blackbg,charger,detailsSectionImageFirst,dccharger } from '@/assets/images'
import Slider, { Settings } from 'react-slick'; // Import Settings from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

const chargingSolutionsData = [
  {
    id: 101,
    title: "Charger",
    image: charger
  },
  {
    id: 102,
    title: "Charger",
    image: dccharger
  },
  {
    id: 103,
    title: "Charger",
    image: charger
  },
  {
    id: 104,
    title: "Charger ",
    image: dccharger
  },
  {
    id: 105,
    title: "Charger",
    image: charger
  },
  {
    id: 106,
    title: "Charger",
    image: dccharger
  },
  {
    id: 107,
    title: "Charger",
    image: charger
  },
  {
    id: 108,
    title: "Charger",
    image: dccharger
  },
]

const OurServicesTeam = () => {
  const sliderRef = useRef<Slider>();
  const play = () => {
    sliderRef.current?.slickPlay();
  };

  const pause = () => {
    sliderRef.current?.slickPause();
  };
  var settings = {
    arrows: false,
    autoplay: true,
    speed: 7000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    appendDots: (dots: any) => (
      <div style={{ position: 'absolute', bottom: '-25%' }}>
        <ul className='gap-x-2' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid black',
          opacity: '0.8',
          margin: '0 20px',
        }}
        className='active-dot'

      ></div>
    ),
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section className='relative h-full w-full overflow-hidden'>  
    <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
            <div className='h-[100vh] w-full'>
       
            <div className='absolute z-10 text-white w-full h-full '>
              <div className='gap-y-5'>
         <div className='flex w-full content-center justify-between h-full'>
         
         <div className=' w-[60%] px-[2%] sm:px-[5%] text-white  sm:gap-y-4 flex flex-col justify-center my-auto h-full'>
              <Heading name="Our Charging Solutions" />
              <SubHeading name="Charging Solutions For U.S. Electric Car Market" />
              <div className='flex items-start'>
                <Description name="The best-in-class VoltIE Charging network technology for at home, at work or on the go. The VoltiE Charge Network offers 2.5x the speed of a standard L2 charger; ideal for medium to heavy duty fleet and commercial vehicles." />
  
              </div>
              <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                <Button name="Contact Sales" bgColor='white' />
                {/* <Button name="Learn More"  /> */}
              </div>
         </div> 
          <div className='w-[40%] px-[5%] text-white gap-y-4 sm:gap-y-8 hidden md:flex flex-col justify-center my-auto  '>
            <Image src={detailsSectionImageFirst} alt='details-section-image-first' 
                    objectFit='contain'
                    style={{ height: "70%", width:"100%"}}
                />
           </div>
         </div>
            <div className='pt-10 h-full relative'>
         <Slider
            {...settings}
          //    ref={sliderRef}
          >
            {
              chargingSolutionsData.map((sliderData, index) => (
                <div className=' w-full' key={sliderData.id}>
                  <div className='flex flex-col justify-center items-center gap-y-2 w-full'>
                    <div className=''>
                      <Image src={sliderData.image} alt='voltie charging solutions' objectFit='contain' className='w-[200px] h-[17rem]' />
                      {/* <Image className='absolute top-[10%] left-[28%] w-[98px]' src={voltieSolutionImagePlaceholder} alt='voltie' /> */}
                    </div>
                    <p>{sliderData?.title}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
          </div>
          </div>
       


          </div>
        </div>
    </section>
  )
}

export default OurServicesTeam
