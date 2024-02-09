"use client";
import React from "react";
import { bgImageOne, computerGraphic, sectionFiveBg, whiteLogo } from "@/assets/images";
import Image from "next/image";
import Heading from "../../ui/Heading/Heading";
import Description from "../../ui/Description/Description";

const CuttingEdgeSection = () => {
  return (
    <section className="relative h-full w-full overflow-hidden border-y-2 border-black">
         <div className="h-full w-full relative mx-auto">
        <Image
          src={sectionFiveBg}
          layout="fill"
          objectFit="cover"
          alt="slider-image-first"
        />
      <div className="h-[50rem] w-full">
        <div className="h-full w-full relative mx-auto">
          <div className="absolute z-10 text-white w-full h-full ">
            <div className="px-[3%] sm:px-[5%] gap-y-4 w-full h-full flex justify-center items-center">

              <div className="flex flex-col items-center gap-y-8 sm:flex-row sm:items-start">
                <div className="text-white pt-8">
                <Image
                    src={whiteLogo}
                    objectFit="contain"
                    alt="slider-image-first"
                    height={30}
                    />
                </div>

                <div className="gap-y-[4rem] flex flex-col justify-center items-center">
                <div className="hidden sm:flex flex-col items-center">
                    <Heading name=" Cutting-Edge Potential" />
                    <Heading name="in the US Market" />
                </div>
                <div className="sm:hidden flex justify-center items-center text-center">
                    <Heading name=" Cutting-Edge Potential in the US Market" />
                </div>
                <div className="flex sm:justify-end gap-x-2 items-center lg:pl-[8rem]">
                  <div className="flex flex-col sm:justify-end sm:items-end gap-y-8 sm:w-[40%]">
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="By 2030, More Than Half of vehicles on the road Will Be Electric."
                      />
                    </div>
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name=" In 2022 the Infrastructure Bill allocated over $5 billion for the"
                      />
                    </div>
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="More than 500,000 electric vehicle charging stations will be built by 2027. Upcoming years
                        in technology and renewable energy."
                      />
                    </div>
                    <div className="flex items-start gap-x-1">
                      <span>⚡</span>
                      <Description
                        color="white"
                        name="PLUS: The estimated demand is for at least 1.2 million additional private chargers to supply
                        electric vehicles on the road by 2030."
                      />
                    </div>
                  </div>
                </div>
            
              </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CuttingEdgeSection;
