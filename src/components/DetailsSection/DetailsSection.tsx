'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst } from '@/assets/images'
import Link from 'next/link'

const DetailsSection = () => {
    
    return (
        <section className='h-[100vh]  w-full'>
        <div className='w-[100%] h-full bg-[#f1f1e6] flex items-center lg:gap-x-8 p-2 md:p-5'>
            <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                    <Heading name="US Market Opportunity" color='black'/>
                    <div className='my-2 flex flex-col gap-y-1'>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='black' name="By 2030 over 50% the vehicles on the road will be electric" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='black' name="2022 Infrastructure Bill allocated $5 Billion over the next 5 years" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='black' name="To build more than 500,000 EV stations by 2027." />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='black' name="1.2 million more private  chargers will be needed to fuel the electric vehicles on the road by 2030." />
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                        <Button name="Contact us" bgColor='black' />
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

export default DetailsSection