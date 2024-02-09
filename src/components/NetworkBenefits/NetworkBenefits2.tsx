'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst } from '@/assets/images'

const NetworkBenefitsTwo = () => {
    
    return (
        <section className='h-[100vh]  w-full'>
            <div className='w-[100%] h-full bg-black flex items-center lg:gap-x-8 p-2 md:p-5'>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                    <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                        <SubHeading name="All Voltie charging solutions feature..." />
                        <div className='my-2 flex flex-col gap-y-1'>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Universal Compatibility (OCPP) " />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Tamper Resistant Construction" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Slim, Compact, Mosern Design " />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Hardware-agnostic" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Real-time Load Management" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Voltie Network Access Packge" />
                        </div>
                        <div className='flex items-start gap-x-1'>
                            <span>✅</span><Description color='white' name="Optional expansion hardware for increasing network communication range where signal strength is poor." />
                        </div>
                    </div>
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

export default NetworkBenefitsTwo