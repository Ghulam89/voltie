'use client'
import React from 'react'
import { bgImageOne,blackbg ,detailsSectionImageFirst} from '@/assets/images';
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
        <Image src={blackbg} layout='fill'objectFit='cover' alt='slider-image-first'/>
        <div className='absolute z-10 text-white w-full h-full flex  items-center '>
          <div className=''>
      <div className='flex justify-between items-center px-4 mt-5'>
        <div className=' w-[50%]'>
        <Image src={detailsSectionImageFirst} alt="details-section-image-first" objectFit="contain" style={{ height: "50%" }}/>
        </div>
        <div className='gap-y-4 flex flex-col justify-center'>
        <Heading name="VoltEV/Agile" />
        <Description  name="Level 2 Charging Stations."/>
            <Description name="Great Option for single-family residential. multi-tenant residential, retail or municipal properties." />
            <div className="w-full flex justify-between flex-wrap md:flex-nowrap">
              <div className="w-full flex flex-col gap-y-1 md:gap-y-2">
              <Description  name="⚡Full Charge: 4-6 Hrs"/>

              </div>
              <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
                <Description name="⚡Output: 7.68 kW max"/>
              </div>
            </div>

            <div className="flex justify-center md:justify-start items-start gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
              <Link href="/contact">
                <Button name="Contact us" bgColor="white" />
              </Link>
            </div>
            
        </div>
      </div>


      <div className="w-full flex justify-between px-[5%] py-[2%] h-[40%] md:h-[30%] flex-wrap md:flex-nowrap">
        <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
          <Description name="⚡Flexible Mounting Options"/>
          <Description name="⚡App. RFID, & Bluetooth Authorization"/>
        </div>
        <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
        <Description name="⚡ Wi-Fi Enabled"/>
          <Description name="⚡Single or dual-sided EV Charging"/>
        </div>
        <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
        <Description name="⚡LTE Cel Enabled"/>
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