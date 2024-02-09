'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { planD,blackbg } from '@/assets/images'

const PlanD = () => {
    
    return (
        <section className='relative h-full w-full overflow-hidden'>  
        <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
                <div className='h-[100vh] w-full'>
           
                <div className='absolute z-10 text-white w-full h-full '>
             <div className='flex w-full content-center justify-between h-full'>
             <div className=' w-[60%] px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                    {/* <Heading name="Plan D" /> */}
                    <SubHeading name="Custom Sevice Plans" />
                    <Description  name='VoltiE creates Customized Service Plans for charge point operators. We consider several factors when we design our Partners EV Charging Network. Our technology integration and installation experience ensures that our Clients get the fastest most effective EV Network.'/>
                    <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                        <Button name="Contact us" bgColor='white' />
                        {/* <Button name="Learn More"  /> */}
                    </div>
                </div>
               
                <div className='w-[37%] px-[5%] text-white gap-y-4 sm:gap-y-8 hidden md:flex flex-col justify-center my-auto '>
                <Image src={planD} alt='details-section-image-first' 
                        objectFit='contain'
                        style={{ height: "35%"}}
                    />
               </div>
             </div>
                
                
              
              </div>
            </div>
        </section>
    )
}

export default PlanD