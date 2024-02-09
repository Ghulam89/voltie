'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst } from '@/assets/images'

const PlanF = () => {
    
    return (
        <section className='h-[100vh]  w-full'>
            <div className='w-[100%] h-full bg-[#f1f1e6] flex items-center lg:gap-x-8 p-2 md:p-5'>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                    <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                        <Heading name="Network Advance" color='black'/>
                        {/* <SubHeading name="Custom Sevice Plans" color='black'/> */}
                        <Description color='black' name='VoltiE combines technology integration experience with relationships and current partnerships with several of the largest US Operators. With over 20 years of installation experience we have forged relationships with operators of both Public and Private Properties. The combination of these factors gives us a distinct advantage as our current operators expand their EV charging capacity.'/>
                        <div className='my-2 flex flex-col gap-y-1'>
                            <div className='flex items-start gap-x-1'>
                                <span>✅</span><Description color='black' name="Turn Key Solution  Customized Plans" />
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <span>✅</span><Description color='black' name="In- App Payments" />
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <span>✅</span><Description color='black' name="Installation Advantage" />
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <span>✅</span><Description color='black' name="Fleet Acces Control" />
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <span>✅</span><Description color='black' name="24/7 Support" />
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

export default PlanF