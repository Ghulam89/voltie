'use client'
import React from 'react'
import { sliderImageFirst, sliderImageSecond, sliderImageThird, sliderImageFour, sliderImageFive, sliderImageSix, bgImageOne } from '@/assets/images';
import Image from 'next/image'
import Heading from '../ui/Heading/Heading';
import SubHeading from '../ui/SubHeading/SubHeading';
import Description from '../ui/Description/Description';
import Button from '../ui/Button/Button';

const IntroSection = () => {

  return (
    <section className='relative h-full w-full overflow-hidden'>
            <div className='h-[100vh] w-full'>
          <div className='h-full w-full relative mx-auto'>
            <Image
              src={bgImageOne}
              layout='fill'
              objectFit='cover'
              alt='slider-image-first'
            />
            <div className='absolute z-10 text-white w-full h-full '>
              <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                <div className='gap-y-4 flex flex-col justify-center items-center'>
                <Heading name="Charging Network" />
                 <Description name="Our fully integrated network includes L2 & DC Fast Charging Stations, a Mobile App for Drivers and a platform for Property Owners & Operating Managers." />
                <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap'>
                  <Button name="Google Play" bgColor='white'/>
                  <Button name="Apple Store" bgColor='black'/>
                  {/* <Button name="Learn More"/> */}
                </div>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 bg-black opacity-70'></div>
          </div>
        </div>
    </section>
  )
}

export default IntroSection