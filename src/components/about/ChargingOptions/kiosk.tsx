"use client";
import React from "react";

import Image from "next/image";
import { detailsSectionImageFirst,blackbg } from "@/assets/images";
import SubHeading from "@/components/ui/SubHeading/SubHeading";
import Description from "@/components/ui/Description/Description";
import Button from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import Link from "next/link";

const Kiosk = () => {
  return (
    <section className='relative h-full w-full overflow-hidden'>
    <div className='h-[100vh] w-full'>
  <div className='h-full w-full relative mx-auto'>
    <Image src={blackbg} layout='fill'objectFit='cover' alt='slider-image-first'/>
    <div className='absolute z-10 text-white w-full h-full flex  items-center '>
      <div className=''>
  <div className='flex justify-between items-center px-4 mt-5'>
    <div className="px-[5%] text-white gap-y-4 sm:gap-y-3 flex flex-col justify-center my-auto h-full">
            <Heading name="VoltEV / Kiosk" />
            <SubHeading name="Kiosk Display EV Charging Station" />
            <Description
              color="white"
              name="Best-in-class integrated digital out of home advertising network and EV charging station."
            />
            <Description
              color="white"
              name="Chargers: VoltEV-Fleet & VoltEV-Agile"
            />
            <div className="my-2 flex flex-col gap-y-1">
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="Dual Purpose revenue generation"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="Single or dual-sided EV Charging"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="Turkey programmatic ad revenue"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description color="white" name="On-premise local ad roll " />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description color="white" name="Automated cable management" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
              <Button name="Contact us" bgColor="white" />
              {/* <Button name="Learn More"  /> */}
            </div>
    </div>
    <div className=' w-[30%]'>
    <Image src={detailsSectionImageFirst} alt="details-section-image-first" objectFit="contain" style={{ height: "50%" }}/>
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
    {/* <div className='absolute inset-0 bg-black opacity-70'></div> */}
  </div>
</div>
</section>
  );
};

export default Kiosk;
