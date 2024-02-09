'use client'
import React from 'react'
import Heading from '../../ui/Heading/Heading'
import SubHeading from '../../ui/SubHeading/SubHeading'
import Description from '../../ui/Description/Description'
import Button from '../../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst,aboutUs,blackbg } from '@/assets/images'

const ParkingLots = () => {
    
    return (
        <section className='relative h-full w-full overflow-hidden'>  
        <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
                <div className='h-[100vh] w-full'>
              <div className='h-full w-full relative mx-auto'>
                <div className='absolute z-10 text-white w-full h-full '>
                <div className='w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5'>
                <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
                    <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
                        <Heading name="About us" />
                        <SubHeading name="Turn Parking Lots into Profit Centers" />
                        <Description name="At VoltiE, we don’t just see parking spaces; we envision potential revenue streams. 
                                            Our services don't only cater to the growing demand for EV charging but also open 
                                            up avenues for property owners to monetize their spaces. With our state-of-the-art 
                                            charging infrastructure and revenue-sharing models, every charging session can 
                                            translate to earnings. Partner with VoltiE and transform your property into a 
                                            lucrative EV hub."/>
                        <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
                            <Button name="Contact us" bgColor='white' />
                        </div>
                    </div>                 
                </div>
                <div className='w-[50%] hidden md:flex'>
                <Image src={aboutUs} alt='details-section-image-first'
                        objectFit='contain'
                        style={{ height: "100%"}}
                    />
                </div>
                </div>
                </div>
              </div>
            </div>
        </section>
        // <section className='h-[100vh]  w-full'>
        //    <Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
        //     <div className='w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5'>
        //         <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
        //             <div className='px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full'>
        //                 <Heading name="About us" />
        //                 <SubHeading name="Turn Parking Lots into Profit Centers" />
        //                 <Description name="At VoltiE, we don’t just see parking spaces; we envision potential revenue streams. 
        //                                     Our services don't only cater to the growing demand for EV charging but also open 
        //                                     up avenues for property owners to monetize their spaces. With our state-of-the-art 
        //                                     charging infrastructure and revenue-sharing models, every charging session can 
        //                                     translate to earnings. Partner with VoltiE and transform your property into a 
        //                                     lucrative EV hub."/>
        //                 <div className='flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap'>
        //                     <Button name="Contact us" bgColor='white' />
        //                 </div>
        //             </div>                 
        //         </div>
        //         <div className='w-[50%] hidden md:flex'>
        //         <Image src={aboutUs} alt='details-section-image-first'
        //                 objectFit='contain'
        //                 style={{ height: "100%"}}
        //             />
        //         </div>
        //     </div>
        // </section>
    )
}

export default ParkingLots