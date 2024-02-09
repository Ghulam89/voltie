'use client'
import React, { useRef } from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst, voltieSolutionImageOne, voltieSolutionImagePlaceholder } from '@/assets/images'
import Slider, { Settings } from 'react-slick'; // Import Settings from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './detailsSection.css'


const chargingSolutionsData = [
  {
    id: 101,
    title: "Single Family",
    image: voltieSolutionImageOne
  },
  {
    id: 102,
    title: "Multi-Family",
    image: voltieSolutionImageOne
  },
  {
    id: 103,
    title: "Office",
    image: voltieSolutionImageOne
  },
  {
    id: 104,
    title: "Municiple",
    image: voltieSolutionImageOne
  },
  {
    id: 105,
    title: "Fleet",
    image: voltieSolutionImageOne
  },
  {
    id: 106,
    title: "Commercial",
    image: voltieSolutionImageOne
  },
  {
    id: 107,
    title: "Retail",
    image: voltieSolutionImageOne
  },
  {
    id: 107,
    title: "Video Kiosk",
    image: voltieSolutionImageOne
  },
]
const DetailsSectionThree = () => {
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
    <section className='h-[45rem] max-h-[100vh]  w-full'>
      <div className='w-[100%] h-[60%] md:h-[70%] bg-black flex items-center lg:gap-x-8 p-2 md:p-5'>
        <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
          <div className='px-[2%] sm:px-[5%] text-white gap-y-4 sm:gap-y-4 flex flex-col justify-center my-auto h-full'>
            <Heading name="Charging Solutions" />
            <SubHeading name="Charging Solutions for every market of the US." />
            <div className='my-2 flex flex-col gap-y-1'>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="VoltE charging solution for single family or multi tenant residential & light commercial use." />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="The best-in-class VoltE Charging network technology for at home, at work or on the go." />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="2.5x the speed of a standard L2 charger; ideal for medium to heavy duty fleet and commercial vehicles." />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="DC Fast ideal VoltE charging solutions for commercial, retail or public-access properties." />
                        </div>
                    </div>
            <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
              <Button name="Contact" bgColor='white' />
            </div>
          </div>

        </div>
        <div className='w-[30%] hidden md:flex'>
          <Image src={detailsSectionImageFirst} alt='details-section-image-first'
            objectFit='contain'
            style={{ height: "100%"}}
          />
        </div>
      </div>
      <div className='w-full flex justify-between px-[5%] py-[2%] bg-[#f1f1e6] h-[40%] md:h-[30%] flex-wrap md:flex-nowrap'>
                <div className='w-full flex flex-col gap-y-1 md:gap-y-2 '>
                    <p className='text-neutral-500 text-sm'>✅ Revenue Sharing</p>
                    <p className='text-neutral-500 text-sm'>✅ Custom Integrations
                    </p>
                    <p className='text-neutral-500 text-sm'>✅ Fleet Management
                    </p>
                    <p className='text-neutral-500 text-sm'>✅ Data Security
                    </p>
                </div>
                <div className='w-full flex flex-col gap-y-1 md:gap-y-2 '>
                    <p className='text-neutral-500 text-sm'>✅ Iphone & Android Apps</p>
                    <p className='text-neutral-500 text-sm'>✅ Load Management
                    </p>
                    <p className='text-neutral-500 text-sm'>✅ Payments & Billing
                    </p>
                </div>
                <div className='w-full flex flex-col gap-y-1 md:gap-y-2 '>
                    <p className='text-neutral-500 text-sm'>✅ Smart EV Charging</p>
                    <p className='text-neutral-500 text-sm'>✅ Remote Management
                    </p>
                    <p className='text-neutral-500 text-sm'>✅ Hardware Agnostic
                    </p>
                   
                </div>
                
            </div>
    </section>
  )
}

export default DetailsSectionThree
