'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst, detailsSectionImageSecond,voltieImageOne } from '@/assets/images'
import Link from 'next/link'

const DetailsSectionTwo = () => {
    return (
        <section className='h-[40rem] max-h-[100vh] w-full'>
            <div className='w-[100%] bg-black flex items-center lg:gap-x-4 h-[60%] md:h-[70%] pb-2'>
                <div className='w-[40%] hidden md:flex justify-end'>
                <Image src={detailsSectionImageFirst} alt='details-section-image-first'
                        objectFit='contain'
                        style={{ height: "100%"}}
                    />
                </div>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[50px]'>
                    <div className='px-[5%] text-white gap-y-2 gap-y-4 flex flex-col'>
                        <Heading name="Fully Featured Software Solution" />
                        {/* <SubHeading name="Turn-Key Hardware & Software Solution" /> */}
                        <Description name="VoltiE provides an all-in-one software platform for property owners and managers to operate and monitor their EV charging Network." />
                        <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                            <Link href='/contact'><Button name="Contact us" bgColor='white' /></Link>
                         </div>
                    </div>

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

export default DetailsSectionTwo