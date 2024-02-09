'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst } from '@/assets/images'

const PlanE = () => {
    
    return (
        <section className='h-[100vh]  w-full'>
            <div className='w-[100%] h-full bg-black flex items-center lg:gap-x-8 p-2 md:p-5'>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                    <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                        <Heading name="Agnostic Charging Hardware" />
                        {/* <SubHeading name="Operator Managed Service" /> */}
                        <Description name='We supply our Clients and Customers with the best EV Charging Hardware on the Market. We work with several top manufactures in order to give our Operators the hardware that best fits their needs.No single EV Charger Manufacturer creates the perfect charging stations for every situation. Factors such as supply, specifications and unit price vary between manufactures. Our design process ensures our Clients use the most cost effective Hardware for their projects.'/>
                        <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                            <Button name="Contact us" bgColor='white' />
                            {/* <Button name="Learn More"  /> */}
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
        </section>
    )
}

export default PlanE