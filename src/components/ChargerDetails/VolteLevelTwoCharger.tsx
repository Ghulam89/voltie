'use client'
import React from 'react'
import Description from '../ui/Description/Description'
import Image from 'next/image'
import Heading from '../ui/Heading/Heading'
import { charger } from '@/assets/images'
import { computerGraphic } from '@/assets/images'
import SubHeading from '../ui/SubHeading/SubHeading'
import Link from 'next/link'
import Button from '../ui/Button/Button'

const Volteleveltwocharger = () => {
  return (
    <section className=" w-full">
      <div className=" h-auto w-full">
        <div className="h-full w-full relative mx-auto">
          <div className=" pb-7 z-10 text-white w-full h-full sm:h-max ">
            <div className="px-[5%] sm:px-[15%] gap-y-56 w-full h-full flex justify-center items-center">
              <div className="  flex flex-col justify-center  items-center">
              <div className="flex flex-col items-center mb-32 ">
                    <Heading name="VoltiE Level 2 Charger"/>
                </div>
                <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap mt-2'>
                     
                    </div>
                <Description
                  name="The VoltiE Level 2 is a stylish and user-friendly charging solution with a Type 1 connector 
                  and smart app integration for easy installation and use. UL-certified, dustproof, and waterproof, 
                  ensures the top priority of EV charging safety. In addition, VoltiE level 2 wins Red Dot Award for
                  its distinctive design, it also offers intelligent load management and seamless PV integration for
                  optimized energy usage."
                />
                 <div className='flex gap-3  pt-3'>
                 <Link href='/contact'><Button name="Contact Us" bgColor='black'/></Link>
                      <Link href="v1.pdf" >
                        <Button name="View Details" bgColor='white'/>
                      </Link>
                 </div>
{/* ------------------------------------------------------------------------------------------- */}
        <div className='flex justify-between pt-10  w-full sm:flex-row md:flex-row  md:items-start'>
              <div className='w-[50%] ' >
                <div className='flex'>
                    <span>⚡</span>
                    <p className= "pb-2">Wall-mount/Floor-stand</p>
                  </div>

                  <div className='flex'>
                    <span>⚡</span>
                    <p className= "pb-2">Hardwired/NEMA plug.</p>
                  </div>
                  <div className='flex'>
                    <span>⚡</span>
                    <p className= "pb-2">3 enclosure colors..</p>
                  </div>
                  <div className='flex'>
                    <span>⚡</span>
                    <p className= "pb-2">Multiple charging modes..</p>
                  </div>
                  <div className='flex'>
                <span>⚡</span>
                <p className= "pb-2">Certified byy Energy Star.</p>
                </div>

                <div className='flex'>
                  <span>⚡</span>
                  <p className= "pb-2">Eco-Friendly enclosure materials.</p>
                </div>
                <div className='flex mt-24'>
                  <span>⚡</span>
                  <p className= "pb-2">Distributed temperature protection </p>
                </div>

                <div className='flex mt-24'>
                  <span>⚡</span>
                  <p className= "pb-2">Self-diagnosis system.</p>
                </div>
                <div className='flex mt-24'>
                  <span>⚡</span>
                  <p className= "pb-2">NEMA4(IP66) dust & waterproof design.</p>
                </div>
                <div className='flex mt-24'>
                  <span>⚡</span>
                  <p className= "pb-2">CCID 20 leakage current protection.</p>
                </div>
                <div className='flex mt-24'>
                  <span>⚡</span>
                  <p className= "pb-2">UL listed and certified.</p>
                </div>
                <div className='flex'>
                <span>⚡</span>
                <p className= "pb-2">Multi communications (Wi-Fi/Bluetooth<br></br>/Ethernet).</p>
                </div>

                <div className='flex'>
                  <span>⚡</span>
                  <p className= "pb-2">Dynamic load balancing.</p>
                </div>
                <div className='flex'>
                  <span>⚡</span>
                  <p className= "pb-2">PV compatible.</p>
                </div>
                <div className='flex'>
                  <span>⚡</span>
                  <p className= "pb-2">Scheduled charging.</p>
                </div>       
              </div>
            <div className='w-[50%]'>
              <Image src={charger} alt='level-two-charger' className=' w-[50%] h-[50%] hidden lg:block'></Image>
            </div>
        </div>
{/* ---------------------------------------------------------------------------------- */}
             </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-black"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Volteleveltwocharger
