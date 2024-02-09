"use client";
import React from "react";
import Heading from "../../ui/Heading/Heading";
import SubHeading from "../../ui/SubHeading/SubHeading";
import Description from "../../ui/Description/Description";
import Button from "../../ui/Button/Button";
import Image from "next/image";
import { detailsSectionImageFirst, blackbg } from "@/assets/images";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const featuresData = [
  {
    title: "Experience & Expertise",
    description:
      "Harness the potential of the EV market with our seasoned team guiding the way.",
    id: 2011,
  },
  {
    title: "Profitable Partnerships",
    description:
      "Our turnkey solutions ensure you don’t just cater to EV users but also benefit financially from every charge",
    id: 2012,
  },
  {
    title: "Flexible Financial Models",
    description:
      "With offerings like our VoltiE as a Service (VaaS) program, we make profitability accessible to all, irrespective of budget.",
    id: 2013,
  },
  {
    title: "Commitment to Sustainability",
    description:
      "While we drive profitability, our commitment to the planet remains paramount. Partner with us for a greener,richer future.",
    id: 2014,
  },
];

const WhyVoltie = () => {
  var settings = {
    dots: true, // Display dots
    arrows: false, // Display arrows
    infinite: true,
    speed: 500,
    autoPlaySpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    slickPlay: true,
    appendDots: (dots: any) => (
      <div style={{ position: "absolute", bottom: "-25%" }}>
        <ul
          className="gap-x-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid black",
          opacity: "0.8",
          margin: "0 20px",
        }}
        className="active-dot"
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="relative h-full w-full overflow-hidden">
      <div className="h-[75vh] w-full mt-10">
        <Image
          src={blackbg}
          layout="fill"
          objectFit="cover"
          alt="slider-image-first"
        />
        <div className="absolute z-10 text-white w-full h-full   ">
          <div className=" p-12 flex-col gap-y-8 h-full">
            <div className=" mt-4 flex gap-y-10 w-full">
              <Heading name="Why Choose Voltie ?" />
            </div>
            <div className="w-[100%] mt-4 pt-12 flex flex-wrap gap-4   justify-center">
              {featuresData.map((slideData, index) => (
                <div className="" key={slideData.id}>
                  <div
                    className="max-w-[300px]   min-h-[175px] shadow-lg rounded-lg  sm:p-6 overflow-h idden   gap-y-4 flex flex-col"
                 
                  >
                    <div className="flex gap-3 items-center justify-center mb-2">
                      {/* <span>✅</span> */}
                      {/* <div className=" text-center"> */}
                        <h2 className="mb-2 text-md text-center font-bold text-white">
                          {slideData.title}
                        </h2>
                      {/* </div> */}
                    </div>
                    <p className="mb-2 text-white   text-sm  text-center">
                      {slideData.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVoltie;
