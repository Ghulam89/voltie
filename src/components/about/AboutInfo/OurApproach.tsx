'use client'
import React from 'react'
import Heading from '../../ui/Heading/Heading'
import SubHeading from '../../ui/SubHeading/SubHeading'
import Description from '../../ui/Description/Description'
import Button from '../../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst,ourApproach ,blackbg} from '@/assets/images'



const WhyVoltie = () => {
    
    return (
        <section className='relative h-full w-full overflow-hidden'>  
        <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
                <div className='h-[100vh] w-full'>
              <div className='h-full w-full relative mx-auto'>
                <div className='absolute z-10 text-white w-full h-full '>
                <div className='w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5'>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[100%] h-full pt-[10px]">
                  <div className="px-[5%] text-black gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
                  <Heading name="Our Approach" />
                                <Description name="Holistic solutions define us. Our network is more than charging stations—it's an 
                                    ecosystem designed for efficiency and profitability. With features like revenue 
                                    sharing, custom integrations, and fleet management, we ensure that every partner, 
                                    every property, and every parking space can be a source of income." />
                                <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                                    <Button name="Contact us" bgColor='white' />
                                    {/* <Button name="Learn More"  /> */}
                                </div>
                  </div>
                </div>         
                </div>
                <div className='w-[50%] hidden md:flex'>
                <Image src={ourApproach} alt='details-section-image-first'
                        objectFit='contain'
                        style={{ height: "100%"}}
                    />
                </div>
                </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default WhyVoltie