"use client"
import React, { useRef } from "react"
import Heading from "../ui/Heading/Heading"
import Description from "../ui/Description/Description"
import Button from "../ui/Button/Button"
import Image from "next/image"
import { detailsSectionImageFirst, voltieSolutionImageOne, voltieSolutionImagePlaceholder } from "@/assets/images"
import Slider, { Settings } from "react-slick"; // Import Settings from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const chargingSolutionsData = [
  {
    id: 101,
    title: "Single Family",
    image: voltieSolutionImageOne
  },
  {
    id: 102,
    title: "Multi-Family",
    image: voltieSolutionImageOne
  },
  {
    id: 103,
    title: "Office",
    image: voltieSolutionImageOne
  },
  {
    id: 104,
    title: "Municiple",
    image: voltieSolutionImageOne
  },
  {
    id: 105,
    title: "Fleet",
    image: voltieSolutionImageOne
  },
  {
    id: 106,
    title: "Commercial",
    image: voltieSolutionImageOne
  },
  {
    id: 107,
    title: "Retail",
    image: voltieSolutionImageOne
  },
  {
    id: 107,
    title: "Video Kiosk",
    image: voltieSolutionImageOne
  },
]
const NetworkBenefits = () => {
  const sliderRef = useRef<Slider>();
  const play = () => {
    sliderRef.current?.slickPlay();
  };

  const pause = () => {
    sliderRef.current?.slickPause();
  };
  var settings = {
    arrows: false,
    autoplay: true,
    speed: 7000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    appendDots: (dots: any) => (
      <div style={{ position: "absolute", bottom: "-25%" }}>
        <ul className="gap-x-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{dots}</ul>
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
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <section className="h-[50rem] md:h-[40rem]  h-max w-full">
      <div className="w-[100%] h-[60%] bg-black flex items-center lg:gap-x-8 p-2 md:p-5">
        <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[70%] h-full pt-[10px]">
          <div className="px-[2%] sm:px-[5%] text-white gap-y-4 sm:gap-y-4 flex flex-col justify-center my-auto h-full">
            <Heading name="Network Benefits" />
            <Description name="VoltE installs and services cost-effective turnkey hardware, software & ongoing operating system solutions that turn parking lots into profit centers for owners & operators of commercial and multi-family residential real-estate." />
            <div className="my-2 flex flex-col gap-y-1">
                        <div className="flex items-start gap-x-1">
                            <span>✅</span><Description color="white" name="No Money Down" />
                        </div>
                        <div className="flex items-start gap-x-1">
                            <span>✅</span><Description color="white" name="Net Positive Cash Flow From Day 1" />
                        </div>
                        <div className="flex items-start gap-x-1">
                            <span>✅</span><Description color="white" name="Never go Out-of-Pocket" />
                        </div>
                    </div>
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
              <Button name="Contact" bgColor="white" />
              {/* <Button name="Learn More"  /> */}
            </div>
          </div>

        </div>
        <div className="w-[30%] hidden md:flex">
          <Image src={detailsSectionImageFirst} alt="details-section-image-first"
            objectFit="contain"
            style={{ height: "100%"}}
          />
        </div>
      </div>
      <div className="w-full flex px-[5%] py-[2%] bg-[#f1f1e6] h-[50%] flex-wrap md:flex-nowrap">
      <div className="md:w-[50%] flex flex-col gap-y-2 md:gap-y-2 ">
                    <p className="text-neutral-500 text-sm">✅ Benefits</p>
                    <p className="text-neutral-500 text-sm">✅ Monetize your parking lots -Attract new customers</p>
                    <p className="text-neutral-500 text-sm">✅ Gain a competitive advantage -Future-proof for growth of EVs
                    </p>
                    <p className="text-neutral-500 text-sm">✅ Promote sustainability
                    </p>
                    <p className="text-neutral-500 text-sm">✅ Tax incentives & rebates
                    </p>
                   
                </div>
                <div className="md:w-full flex flex-col gap-y-2 md:gap-y-2 ">
                    <p className="text-neutral-500 text-sm">✅ VoltiE Systems as a Service $0 Down, $0 Out of Pocket Plan</p>
                    <p className="text-neutral-500 text-sm">✅ Realize 100% of the revenue benefits of the chargers after the EaaS Term is complete.
                    </p>
                    <p className="text-neutral-500 text-sm">✅ No budget? No problem! VoltE offers $0 down, $0 out of pocket payment plan through VoltiE as a service
                    </p>
                    <p className="text-neutral-500 text-sm">✅ EaaS customers receive turnkey EV charging network installations today with no money down.
                    </p>
                    <p className="text-neutral-500 text-sm">✅  And utilize a portion of the estimated monthly revenue
                    generated by the stations to pay for the upgrades over a fixed term and be cash flow positive from day 1.
                    </p>
                </div>          
                
            </div>
    </section>
  )
}

export default NetworkBenefits
