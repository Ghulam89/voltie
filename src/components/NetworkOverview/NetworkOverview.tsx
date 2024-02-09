'use client'
import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst } from '@/assets/images'
import Slider, { Settings } from 'react-slick';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const featuresData = [
    {
        title:"Turnkey Solution",
        description:"Turnkey hardware, software & ongoing operation management solution allows you to simply operate your business.",
        id:201
    },
    {
        title:"Customized Plans",
        description:"VoltE designs your network to operate as you intend with custom billing and operation schedules, alerts, etc.",
        id:202
    },
    {
        title:"In-App Payments",
        description:"Flexible billing options in-app enable real-time payment collection from users so that you can sit back and collect monthly profitable revenues.",
        id:203
    },
    {
        title:"Installation",
        description:"Our technology installation experience ensures you get the fastest most efficient EV Charging Network.",
        id:204
    },
    {
        title:"Fleet Access",
        description:"Control who can access your charging network through the VoltE mobile app/NFC, RFID cards and/or QR codes.",
        id:204
    },
    {
        title:"24/7 Support",
        description:"Warranty and customer service and support is available 24/7 by phone, email or through the VoltE App (iOS/Android)",
        id:205
    },
]

const NetworkOverview = () => {
    var settings = {
        dots: true, // Display dots
        arrows: false, // Display arrows
        infinite: true,
        speed: 500,
        autoPlaySpeed:500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        slickPlay:true,
        appendDots: (dots:any) => (
          <div style={{ position: 'absolute', bottom: '-25%'}}>
            <ul className='gap-x-2' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{dots}</ul>
          </div>
        ),
        customPaging: (i:any) => (
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '1px solid black',
              opacity: '0.8',
              margin: '0 20px',
            }}
        className='active-dot'
           ></div>
        ),
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
               }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
               }
            }
          ]
      };
    return (
        <section className='h-[100vh]  w-full pt-[15%] sm:pt-[8%] bg-[#f1f1e6]'>
            <div className='w-[100%] h-full bg-[#f1f1e6] lg:gap-x-8 p-2 md:p-5'>
                <div className='px-[5%] text-black flex flex-col gap-y-8 h-full '>
                    <div className='flex flex-col gap-y-2'>
                    <Heading name="Network Overview" color='black' />
                    {/* <SubHeading name="Lorem ipsum dolor sit amet consectetur adipisicing elit." color='black' /> */}
                    <Description name="VoltE's EV Charging Network features the best technology and installation services."
                        color='black'
                    />
                    </div>
                    <Slider
                    {...settings}>
                    {
                        featuresData.map((slideData,index)=>(
                        <div className='bg-[#f1f1e6] '
                        key={slideData.id}
                        >
                        <div className="max-w-[325px] min-h-[175px] shadow-lg rounded-lg  p-3 sm:p-6 overflow-hidden bg-[#f5f5f5] hover:bg-[#f1f1e6] gap-y-4 flex flex-col"
                        style={{margin:"10px !important"}}
                        >
                            <div className="flex gap-3 items-center mb-2">
                                <span>✅</span>
                                <div>
                                    <h2 className="mb-2 text-xl font-bold text-black">{slideData?.title}</h2>
                                </div>
                            </div>
                            <p className="mb-2 text-[gray] text-sm text-justify">
                                {slideData?.description} 
                            </p>
                        </div>
                    </div>
                        ))
                    }
                    
                </Slider>
                </div>
            </div>
        </section>
    )
}

export default NetworkOverview