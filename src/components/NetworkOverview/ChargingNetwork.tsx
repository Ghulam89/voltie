"use client";
import React from "react";
import Heading from "../ui/Heading/Heading";
import SubHeading from "../ui/SubHeading/SubHeading";
import Description from "../ui/Description/Description";
import Button from "../ui/Button/Button";
import Image from "next/image";
import {
  bgImageOne,
  charginNetworkIconFirst,
  chargingNetworkIcons,
  detailsSectionImageFirst,
  iconOne,
  iconThree,
  iconTwo,
  voltieSmartPhone,
  whiteLogo,
} from "@/assets/images";

const ChargingNetwork = () => {
  return (
    <section className={`h-[93vh]  w-full`}>
      <div className="h-full w-full relative mx-auto">
        <Image
          src={bgImageOne}
          layout="fill"
          //   objectFit="cover"
          alt="slider-image-first"
        />
        <div className="absolute z-10 w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5">
          <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[50%] h-full pt-[10px]">
            <div className="px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
              <div className="w-[80px]">
                <Image
                  src={whiteLogo}
                  alt="logo"
                  objectFit="contain"
                  className="cursor-pointer"
                />
              </div>
              <Heading name="Charging Network" />
              <Description
                name="Our fully integrated charging network includes L2 & DC Fast Charging Stations, a
                            Mobile App for Drivers and a platform for Property Owners & Operating Managers.
                            "
              />
              <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
                <Button name="Contact us" bgColor="white" />
                {/* <Button name="Learn More"  /> */}
              </div>
            </div>
          </div>
          <div className="w-[50%] hidden md:flex gap-x-4 items-center">
            <Image
              src={voltieSmartPhone}
              alt="details-section-image-first"
              objectFit="contain"
              style={{ height: "100%" }}
            />
            <div className="flex flex-col gap-y-2 text-white h-max">
              <div className="flex items-center gap-x-6 bg-black py-1 px-4 rounded-full bg-opacity-30">
                <Image
                  src={iconOne}
                  alt="details-section-image-first"
                  objectFit="contain"
                />
                <Description name="Self Managed Platform" />
              </div>
              <div className="flex items-center gap-x-6 bg-black py-1 px-4 rounded-full bg-opacity-30">
                <Image
                  src={iconTwo}
                  alt="details-section-image-first"
                  objectFit="contain"
                />
                <Description name="L2 & DC Fast Stations" />
              </div>
              <div className="flex items-center gap-x-6 bg-black py-1 px-4 rounded-full bg-opacity-30">
                <Image
                  src={iconThree}
                  alt="details-section-image-first"
                  objectFit="contain"
                />
                <Description name="Mobile apps" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </section>
  );
};

export default ChargingNetwork;
