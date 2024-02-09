'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { planB,blackbg,ourApproach } from '@/assets/images'

const PlanB = () => {
    
    return (
        <section className='relative h-full w-full overflow-hidden'>  
        <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
                <div className='h-[100vh] w-full'>
           
                <div className='absolute z-10 text-white w-full h-full '>
             <div className='flex w-full content-center justify-cente h-full'>
                <div className='w-[70%] px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto '>
                        {/* <Heading name="Plan B" /> */}
                        <SubHeading name="Partner Managed Service" />
                        <Description  name='Our Partner Plan gives Owners the opportunity to receive a larger percentage of the of the estimated monthly revenue while also benefiting from VoltiE’s Management Services.This Plan is great for Fleet Operators and mid-sized Property Owners. A smaller percentage of the revenue pays for Platform Management'/>
                        <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                            <Button name="Contact us" bgColor='white' />
                        </div>
                </div>
               
                <div className='w-[40%] px-[5%] text-white gap-y-4 sm:gap-y-8 hidden md:flex flex-col justify-center my-auto '>
                <Image src={planB} alt='details-section-image-first' 
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

export default PlanB