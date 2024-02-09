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
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    },
    {
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    },
    {
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    },
    {
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    },
    {
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    },
    {
        title:"Partner 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil aliquam numquam! Libero itaque vitae, dicta ea iure veritatis, expedita, ducimus iusto assumenda sint veniam?",
        id:201
    }
]

const OurPartners = () => {
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
                    <Heading name="Our Partners" color='black' />
                    <SubHeading name="Lorem ipsum dolor sit amet consectetur adipisicing elit." color='black' />
                    <Description name="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
                        <div className="max-w-[325px] shadow-lg rounded-lg  p-3 sm:p-6 overflow-hidden bg-[#f5f5f5] hover:bg-[#f1f1e6] gap-y-4 flex flex-col"
                        style={{margin:"10px !important"}}
                        >
                            <div className="flex gap-3 items-center mb-2">
                                <span>✅</span>
                                <div>
                                    <h2 className="mb-2 text-2xl font-bold text-black">{slideData.title}</h2>
                                </div>
                            </div>
                            <p className="mb-2 text-[gray] text-sm text-justify">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque quas numquam rerum, velit aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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

export default OurPartners