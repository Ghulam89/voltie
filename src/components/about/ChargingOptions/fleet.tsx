"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  detailsSectionImageFirst,
  voltieSolutionImageOne,
  voltieSolutionImagePlaceholder,
  blackbg
} from "@/assets/images";
import Slider, { Settings } from "react-slick"; // Import Settings from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../DetailsSection/detailsSection.css";
import Heading from "@/components/ui/Heading/Heading";
import SubHeading from "@/components/ui/SubHeading/SubHeading";
import Description from "@/components/ui/Description/Description";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";

const Fleet = () => {
  return (

    <section className='relative h-full w-full overflow-hidden'>
        <div className='h-[100vh] w-full'>
      <div className='h-full w-full relative mx-auto'>
        <Image src={blackbg} layout='fill'objectFit='cover' alt='slider-image-first'/>
        <div className='absolute z-10 text-white w-full h-full flex  items-center justify-around '>
        <div className='  items-center justify-center flex-col gap-y-3'>
          <div className="flex  justify-around flex-between mt-10">
            <div className='my-2 flex flex-col gap-y-1'>
              <Heading name="VoltEV / Fleet" />
              <SubHeading name="Level 2 Charging Stations" />
              <div  className="my-2 flex flex-col gap-y-1">
                <div className="flex items-start gap-x-1">
                  <span></span>
                  <Description
                    color="white"
                    name="Charges at 2.5x rate of speed of a standard level 2. at a fraction of the cost of a DC charger."
                  />
                </div>
                <div className="flex items-start gap-x-1">
                  <span>⚡</span>
                  <Description
                    color="white"
                    name="Full Charge: 2-4 Hrs "
                  />
                </div>
                <div className="flex items-start gap-x-1">
                  <span>⚡</span>
                  <Description
                    color="white"
                    name="Output: 19.2 kW max"
                  />
                </div>
              
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
                <Button name="Contact" bgColor="white" />
              </div>
            </div>
            <div className="w-[30%] hidden md:flex">
          <Image
            src={detailsSectionImageFirst}
            alt="details-section-image-first"
            objectFit="contain"
            style={{ height: "100%" }}
          />
            </div>
          </div>

          <div className="w-full flex justify-between px-[5%] py-[2%] h-[40%] md:h-[30%] flex-wrap md:flex-nowrap">
     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
       <Description name="⚡Flexible Mounting Options"/>
       <Description name="⚡App. RFID, & Bluetooth Authorization"/>
     </div>
     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
     <Description name="⚡ Wi-Fi Enabled"/>
       <Description name="⚡Single or dual-sided EV Charging"/>
     </div>
     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
     <Description name="⚡LTE Cel Enabled"/>
      </div>
          </div>
        </div>
      </div>
  </div>
    </div>
    </section>
    
    // <section className="h-[45rem] max-h-[100vh]  w-full">
    //    <Image src={blackbg} layout='fill'objectFit='cover' alt='slider-image-first' className=" z-1"/>
    //   <div className="w-[100%] h-[60%] md:h-[70%]  flex items-center lg:gap-x-8 p-2 md:p-5">
    //     <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]">
    //       <div className="px-[2%] sm:px-[5%] text-white gap-y-4 sm:gap-y-4 flex flex-col justify-center my-auto h-full">
    //         <Heading name="VoltEV / Fleet" />
    //         <SubHeading name="Level 2 Charging Stations" />
    //         <div className="my-2 flex flex-col gap-y-1">
    //           <div className="flex items-start gap-x-1">
    //             <span></span>
    //             <Description
    //               color="white"
    //               name="Charges at 2.5x rate of speed of a standard level 2. at a fraction of the cost of a DC charger."
    //             />
    //           </div>
    //           <div className="flex items-start gap-x-1">
    //             <span>⚡</span>
    //             <Description
    //               color="white"
    //               name="Full Charge: 2-4 Hrs "
    //             />
    //           </div>
    //           <div className="flex items-start gap-x-1">
    //             <span>⚡</span>
    //             <Description
    //               color="white"
    //               name="Output: 19.2 kW max"
    //             />
    //           </div>
            
    //         </div>
    //         <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
    //           <Button name="Contact" bgColor="white" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[30%] hidden md:flex">
    //       <Image
    //         src={detailsSectionImageFirst}
    //         alt="details-section-image-first"
    //         objectFit="contain"
    //         style={{ height: "100%" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="w-full flex justify-between px-[5%] py-[2%] h-[40%] md:h-[30%] flex-wrap md:flex-nowrap">
    //     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
    //       <Description name="⚡Flexible Mounting Options"/>
    //       <Description name="⚡App. RFID, & Bluetooth Authorization"/>
    //     </div>
    //     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
    //     <Description name="⚡ Wi-Fi Enabled"/>
    //       <Description name="⚡Single or dual-sided EV Charging"/>
    //     </div>
    //     <div className="w-full flex flex-col gap-y-1 md:gap-y-2 ">
    //     <Description name="⚡LTE Cel Enabled"/>
    //      </div>
    //   </div>
    // </section>
  );
};

export default Fleet;
