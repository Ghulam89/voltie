"use client";
import React from "react";

import Image from "next/image";
import {blackbg, detailsSectionImageFirst, sectionFourGraphic } from "@/assets/images";
import SubHeading from "@/components/ui/SubHeading/SubHeading";
import Description from "@/components/ui/Description/Description";
import Button from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";

const NetworkBenefitsThree = () => {
  return (
//     <section className="h-[100vh] w-full text-white">
     
// <div className="relative h-screen">
//       <div className="relative z-10 flex items-center justify-center h-full">
//          <div className="w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5">
     
//         <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[50%] h-full pt-[10px]">
//           <div className="px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
//             <Heading name="Network Benefits" />
//             <Description
//               color="white"
//               name="VoltE installs and services cost-effective turnkey hardware, software & ongoing
//               operating system solutions that turn parking lots into profit centers for owners & operators of
//               commercial and multi-family residential real-estate"
//             />
//             <div className="my-2 flex flex-col gap-y-1">
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name="No Money Down."
//                 />
//               </div>
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name=" Net Positive Cash Flow From Day 1"
//                 />
//               </div>
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name="Never go Out-of-Pocket"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
//               <Button name="Contact us" bgColor="white" />
//             </div>
//           </div>
//         </div>
//         <div className="w-[50%] hidden md:flex">
//           <Image
//             src={sectionFourGraphic}
//             alt="details-section-image-first"
//             objectFit="contain"
//             style={{ height: "100%" }}
//           />


//         </div>
//       </div>
//       </div>
//     </div>
//       <div className="w-[100%] h-full flex items-center lg:gap-x-8 p-2 md:p-5">
     
//         <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[50%] h-full pt-[10px]">
//           <div className="px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
//             <Heading name="Network Benefits" />
//             <Description
//               color="white"
//               name="VoltE installs and services cost-effective turnkey hardware, software & ongoing
//               operating system solutions that turn parking lots into profit centers for owners & operators of
//               commercial and multi-family residential real-estate"
//             />
//             <div className="my-2 flex flex-col gap-y-1">
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name="No Money Down."
//                 />
//               </div>
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name=" Net Positive Cash Flow From Day 1"
//                 />
//               </div>
//               <div className="flex items-start gap-x-1">
//                 <span>⚡</span>
//                 <Description
//                   color="white"
//                   name="Never go Out-of-Pocket"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
//               <Button name="Contact us" bgColor="white" />
//             </div>
//           </div>
//         </div>
//         <div className="w-[50%] hidden md:flex">
//           <Image
//             src={sectionFourGraphic}
//             alt="details-section-image-first"
//             objectFit="contain"
//             style={{ height: "100%" }}
//           />


//         </div>
//       </div>
    
//     </section>
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
     <div className="flex jusitfy-center items-center text-center md:text-left w-full md:w-[50%] h-full pt-[10px]">
          <div className="px-[5%] text-white gap-y-4 sm:gap-y-8 flex flex-col justify-center my-auto h-full">
            <Heading name="Network Benefits" />
            <Description
              color="white"
              name="VoltE installs and services cost-effective turnkey hardware, software & ongoing
              operating system solutions that turn parking lots into profit centers for owners & operators of
              commercial and multi-family residential real-estate"
            />
            <div className="my-2 flex flex-col gap-y-1">
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="No Money Down."
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name=" Net Positive Cash Flow From Day 1"
                />
              </div>
              <div className="flex items-start gap-x-1">
                <span>⚡</span>
                <Description
                  color="white"
                  name="Never go Out-of-Pocket"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-x-4 flex-wrap lg:flex-nowrap">
              <Button name="Contact us" bgColor="white" />
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:flex">
          <Image
            src={sectionFourGraphic}
            alt="details-section-image-first"
            objectFit="contain"
            style={{ height: "100%" }}
          />


        </div>
     </div>
   </div>
   {/* <div className="absolute inset-0 bg-black"></div> */}
 </div>
</div>
</section>
  );
};

export default NetworkBenefitsThree;
