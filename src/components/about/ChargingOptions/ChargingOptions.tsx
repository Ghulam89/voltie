'use client'
import React from 'react'
import { bgImageOne,blackbg } from '@/assets/images';
import Image from 'next/image'
import Heading from '../../ui/Heading/Heading';
import Description from '../../ui/Description/Description';
import Button from '../../ui/Button/Button';
import Link from 'next/link';

const ChargingOptions = () => {

  return (
    <section className='relative h-full w-full overflow-hidden'>
            <div className='h-[100vh] w-full'>
          <div className='h-full w-full relative mx-auto'>
            <Image
              src={blackbg}
              layout='fill'
              objectFit='cover'
              alt='slider-image-first'
            />

            <div className='absolute z-10 text-white w-full h-full '>
              <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                <div className='gap-y-4 flex flex-col justify-center items-center'>
                <Heading name="Charging Options" />
                 <Description name="VoltiE is a Full Service EV Charging Network focused on designing fast & effective EV Charging Solutions for Commercial Properties " />
                 {/* <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="VoltEV / Agile"
                />
              </div> */}
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="VoltEV / Fleet"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="VoltEV / Kiosk"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="VoltEV / Power"
                />
              </div>
                <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap'>
                  <Link href='/contact'>
                  <Button name="Contact us" bgColor='white'/>
                  </Link>
                </div>
                </div>
              </div>
            </div>
            {/* <div className='absolute inset-0 bg-black opacity-70'></div> */}
          </div>
        </div>
    </section>
  )
}

export default ChargingOptions