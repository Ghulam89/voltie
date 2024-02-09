'use client'
import React from 'react'
import Heading from '../../ui/Heading/Heading'
import SubHeading from '../../ui/SubHeading/SubHeading'
import Description from '../../ui/Description/Description'
import Button from '../../ui/Button/Button'
import Image from 'next/image'
import { detailsSectionImageFirst,blackbg } from '@/assets/images'
import Slider, { Settings } from 'react-slick';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AboutSection.css'

const featuresData = [
    {
        title:"Location ",
        description:"The location of the charging stations is critical to the success of the network. Stations must be easily accessible ",
        id:2011
    },
    {
        title:"Network Management",
        description:"Network management system monitors the charging stations, provides usage data, and identifies any maintenance issues.",
        id:2012
    },
    {
        title:"Charging Speed",
        description:"Charging Speed Ranging from Level 1 (110V AC) to Level 3 (DC East Charging), which can provide a full charge in under an hour.",
        id:2013
    },
    {
        title:"User Experience ",
        description:"The design of the charging stations, ease of use of the charging process, and  the availability of additional amenities such as Wi-Fi, restrooms, and food. ",
        id:2014
    },
    {
        title:"Power Capacity ",
        description:"The power capacity of the charging stations must be adequate to meet the demand of the EVs being charged.",
        id:2015
    },
    {
        title:"Cost & Incentives ",
        description:"Charging stations, installation, maintenance, and ongoing electricity costs, vs government incentives or grants that may be available.",
        id:2016
    }
]

const AboutThirdSection = () => {
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
      <section className='relative h-full w-full overflow-hidden'>
      <div className='h-[100vh] w-full mt-10'>
          <Image src={blackbg} layout='fill'objectFit='cover' alt='slider-image-first'/>
          <div className='absolute z-10 text-white w-full h-full  '>
           <div className=' p-14 flex-col gap-y-8 h-full'>
             <div className=' mt-4 flex-col w-full  gap-y-8'>
             <div><Heading name="Custom Service Plans" /></div>
              {/* <SubHeading name="Lorem ipsum dolor sit amet consectetur adipisicing elit." color='black' /> */}
              <div className=' mt-4 flex-col w-full'>  <Description name="VoltE creates Customized Service Plans for charge point operators. We consider several factors when we design our Partner's EV Charging Network. Our technology integration and installation experience ensures that our Clients get the fastest most effective EV Network. "
              /></div>
             
             <div className='w-[100%] mt-4 pt-8'>
               <Slider
                          {...settings}>
                          {
                              featuresData.map((slideData,index)=>(
                              <div className=''
                              key={slideData.id}
                              >
                                
                              <div className="max-w-[340px] min-h-[175px] shadow-lg rounded-lg  p-3 sm:p-6 overflow-hidden bg-[#f5f5f5] hover:bg-[#f1f1e6] gap-y-4 flex flex-col"
                              style={{margin:"10px !important"}}
                              >
                                  <div className="flex gap-3 items-center mb-2">
                                      <span>✅</span>
                                      <div>
                                          <h2 className="mb-2 text-md font-bold text-black">{slideData.title}</h2>
                                      </div>
                                  </div>
                                  <p className="mb-2 text-[gray] text-sm text-justify">
                                      {slideData.description}
                                  </p>
                              </div>
                          </div>
                              ))
                          }
                          
               </Slider>
             </div> 
             </div>
              </div>
          </div>
      </div>
    </section>
    )
}

export default AboutThirdSection