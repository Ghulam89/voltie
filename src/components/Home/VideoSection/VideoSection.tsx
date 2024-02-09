"use client";
import React from "react";
import { bgImageOne, computerGraphic, sectionFiveBg, whiteLogo } from "@/assets/images";
import Image from "next/image";
import Heading from "../../ui/Heading/Heading";
import Description from "../../ui/Description/Description";
import SubHeading from "@/components/ui/SubHeading/SubHeading";
import { voltieSectionSixVideo } from "@/assets/videos";

const VideoSection = () => {
  return (
    <section className="relative h-full w-full overflow-hidden border-y-2 border-black">
         <div className="h-full w-full relative mx-auto">
      <div className="h-[40vh] sm:h-[100vh] w-full">
      <video autoPlay loop muted width="100%" height="100%" className="w-[100vw] h-full absolute object-fill">
        <source src={voltieSectionSixVideo} type="video/mp4" />
      </video>
        <div className="h-full w-full relative mx-auto">
          <div className="absolute z-10 text-white w-full h-full ">
            <div className="px-[3%] sm:px-[5%] gap-y-4 w-full h-full flex justify-center items-end pb-4">
              <div className="flex flex-col justify-end items-end gap-y-8 sm:flex-row sm:items-end">
                <div className="gap-y-[4rem] flex flex-col justify-end items-end">
                <div className="flex flex-col justify-center items-center gap-y-2 text-center">
                    <SubHeading name="Powering the Future, Cultivating Prosperity with VoltiE-Your Solution for Electric Vehicle Charging" />
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

export default VideoSection;
