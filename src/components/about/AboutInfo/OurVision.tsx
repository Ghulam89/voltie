"use client";
import React from "react";
import Heading from "../../ui/Heading/Heading";
import SubHeading from "../../ui/SubHeading/SubHeading";
import Description from "../../ui/Description/Description";
import Button from "../../ui/Button/Button";
import Image from "next/image";
import {ourVision,blackbg } from "@/assets/images";

const OurVision = () => {
  return (
    // <section className="h-[100vh]  w-full">
    //   <div className="w-[100%] h-full bg-black flex items-center lg:gap-x-8 p-2 md:p-5">
    //     <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]">
    //       <div className="px-[5%] text-black gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
    //         <Heading name="Our Vision"/>
    //         <Description
    //           name="In a world rapidly transitioning to sustainable energy, electric vehicles (EVs) lead 
    //                 the charge. VoltiE's vision extends beyond facilitating this transition. We aim to 
    //                 make EV charging not only accessible but also an opportunity for growth, 
    //                 innovation, and revenue generation."
    //         />
    //         <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
    //           <Button name="Learn More" bgColor="white" />
    //          </div>
    //       </div>
    //     </div>
    //     <div className="w-[50%] hidden md:flex">
    //       <Image
    //         src={ourVision}
    //         alt="details-section-image-first"
    //         objectFit="contain"
    //         style={{ height: "100%" }}
    //       />
    //     </div>
    //   </div>
    // </section>












<section className='relative h-full w-full overflow-hidden'>  
<Image src={blackbg} layout='fill' objectFit='cover' alt='slider-image-first'/>  
        <div className='h-[100vh] w-full'>
      <div className='h-full w-full relative mx-auto'>
        <div className='absolute z-10 text-white w-full h-full '>
        <div className='w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5'>
        <div className='flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]'>
        <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[100%] h-full pt-[10px]">
          <div className="px-[5%] text-black gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
            <Heading name="Our Vision"/>
            <Description
              name="In a world rapidly transitioning to sustainable energy, electric vehicles (EVs) lead 
                    the charge. VoltiE's vision extends beyond facilitating this transition. We aim to 
                    make EV charging not only accessible but also an opportunity for growth, 
                    innovation, and revenue generation."
            />
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
              <Button name="Learn More" bgColor="white" />
             </div>
          </div>
        </div>         
        </div>
        <div className='w-[50%] hidden md:flex'>
        <Image src={ourVision} alt='details-section-image-first'
                objectFit='contain'
                style={{ height: "100%"}}
            />
        </div>
        </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default OurVision;
