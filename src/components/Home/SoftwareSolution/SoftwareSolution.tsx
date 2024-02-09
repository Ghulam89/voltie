"use client";
import React from "react";
import {blackbg ,bgImageOne, computerGraphic } from "@/assets/images";
import Image from "next/image";
import Heading from "../../ui/Heading/Heading";
import Description from "../../ui/Description/Description";

const SoftwareSolution = () => {
  return (
    <section className="relative h-full w-full overflow-hidden">
       <Image
                  src={blackbg}
                  layout='fill'
                  className='w-[100vw] h-[100%] object-cover'
                  alt='slider-image-first'
                />
      <div className="h-[50rem] w-full">
        <div className="h-full w-full relative mx-auto">
          <div className="absolute z-10 text-white w-full h-full ">
            <div className="px-[5%] sm:px-[10%] gap-y-4 w-full h-full flex justify-center items-center">
              <div className="gap-y-4 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                    <Heading name="Full Featured" />
                    <Heading name="Software Solution" />
                </div>
                <Description
                  name="VoltiE provides an all-in-one software platform for property owners and managers
                    operate and monitor their EV Charging Network. "
                />
                <div className="flex gap-x-2 items-center sm:w-[80%]">
                  <div className="w-[80%] hidden md:block">
                    <Image
                      src={computerGraphic}
                      alt="details-section-image-first"
                      objectFit="contain"
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="Control who can access your charging network through the voltiE Mobile App, NFC, RFID
                    Cards, and/or QR codes."
                      />
                    </div>
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="The VoltiE Dashboard provides operators and managers with visibility and control of their charging network."
                      />
                    </div>
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="The voltiE Mobile App allows drivers to find and use charging points in the voltiE Network."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap">
                  <div>
                    <h3 className="text-[1.25rem] font-bold tracking-[1px]">
                      Feature Offerings
                    </h3>
                  </div>
                  <div>
                    <div>
                     <Description name="Shared Revenue *Fleet Oversight *Payment Processing and
                        Invoicing *Intelligent Ev Charging"/>
                      <Description name=" Data Protection *& Many more options for experiencing
                        innovation seamlessly and in real-time."/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-black"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolution;
