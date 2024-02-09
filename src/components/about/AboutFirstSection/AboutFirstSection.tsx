'use client'
import React from 'react'
import {blackbg,bgImageOne } from '@/assets/images';
import Image from 'next/image'
import Heading from '../../ui/Heading/Heading';
import SubHeading from '../../ui/SubHeading/SubHeading';
import Description from '../../ui/Description/Description';
import Button from '../../ui/Button/Button';
import Link from 'next/link';

const AboutFirstSection = () => {

  return (
    <section className='relative h-full w-full overflow-hidden'>  
    <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
            <div className='h-[100vh] w-full'>
          <div className='h-full w-full relative mx-auto'>
            <div className='absolute z-10 text-white w-full h-full '>
              <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                <div className='gap-y-4 flex flex-col justify-center items-center'>
                <Heading name="Power up with Voltie" />
                 <Description name="VoltiE is a Full Service EV Charging Network focused on designing fast & effective EV Charging Solutions for Commercial Properties & Communities in the US." />
                <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap'>
                  <Link href='/contact'>
                  <Button name="Contact us" bgColor='white'/>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutFirstSection