'use client'
import React from 'react'

import Heading from '../../ui/Heading/Heading'
import SubHeading from '../../ui/SubHeading/SubHeading'
import Description from '../../ui/Description/Description'

const FAQ = () => {

    return (
        <section className='h-[80vh]  w-full  bg-black'>
            <div className='w-[100%] h-full bg-black lg:gap-x-8 p-2 md:p-5'>
                <div className='px-[5%] flex flex-col gap-y-8 h-full '>
                    <div className='flex flex-col gap-y-2'>
                        <Heading name="FAQ" color='white' />
                        <SubHeading name="Here are 5 frequently asked questions (FAQs) and their respective answers
                        about VoltiE, a company dedicated to EV chargers:" color='white' />
                        <Description name="Are you aware that the electric vehicle market will require an additional 1.2 million private chargers by 2030?"
                            color='white'
                        />
                        <section
                            className="bg-[#f5f5f5] shadow-lg w-full rounded-lg flex justify-center items-center flex-row"
                        >
                            <div className="w-full">
                                <details
                                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                                >
                                    <summary
                                        className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                                    >
                                       {`What is VoltiE's mission in the EV charging industry?`}
                                        <div
                                            className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                                        >
                                            <svg
                                                className="h-5 w-4 text-pink-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="{1.5}"
                                                stroke="currentColor"
                                            // classNameName="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </summary>
                                    <p className="text-xs pt-3">
                                    {`VoltiE is committed to leading the future of electric vehicle (EV) charging stations. We
                                    aim to empower electric mobility one charge at a time. Our focus has been on building the
                                    necessary infrastructure to make EV charging stations accessible.`}
                                    </p>
                                </details>
                                <details
                                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                                >
                                    <summary
                                        className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                                    > {`How does VoltiE differentiate itself in the market?`}
                                        <div
                                            className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                                        >
                                            <svg
                                                className="h-5 w-4 text-pink-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="{1.5}"
                                                stroke="currentColor"
                                            // classNameName="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </summary>
                                    <p className="text-xs pt-3">
                                    {`VoltiE stands out with industry-leading equipment and a robust network of public EV
                                    charging stations. Our diverse product line-up boasts the most advanced equipment in the
                                    industry. We're driving the industry forward through our innovation and passion.`}
                                    </p>
                                </details>
                                <details
                                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                                >
                                    <summary
                                        className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                                    > 
                                    {`What business models does VoltiE offer for host locations?`}
                                        <div
                                            className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                                        >
                                            <svg
                                                className="h-5 w-4 text-pink-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="{1.5}"
                                                stroke="currentColor"
                                            // classNameName="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </summary>
                                    <p className="text-xs pt-3">
                                    {`VoltiE provides flexible business models tailored to different types of locations. We have four unique models:`}
                                    <br />
                                    {`1. Hybrid Owned: VoltiE covers equipment, operations, and administration costs.`}
                                    <br />
                                    {`2. VoltiE as a Service: This subscription program offers low upfront costs and ownership
                                    control without the hassle.`}
                                    <br />
                                   {` 3. VoltiE Owned: For select locations, VoltiE provides installation, equipment, operations,
                                    and administration, sharing revenues with the host.`}
                                    <br />
                                   {`
                                    4. Host Owned: Perfect for service locations, this option allows hosts to be the sole owner
                                    and operator of their EV charging stations.`}
                                    </p>
                                </details>
                                <details
                                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                                >
                                    <summary
                                        className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                                    >{`What if a location has budget constraints for implementing EV charging stations?`}
                                        <div
                                            className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                                        >
                                            <svg
                                                className="h-5 w-4 text-pink-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="{1.5}"
                                                stroke="currentColor"
                                            // classNameName="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </summary>
                                    <p className="text-xs pt-3">
                                   {` No budget? No problem. VoltiE offers EV Charging as a Service model, which provides
                                    an EV charging station with low upfront costs, allowing even budget-conscious locations to
                                    participate in the EV revolution.`}
                                    </p>
                                </details>
                                <details
                                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
                                >
                                    <summary
                                        className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                                    > {`What are the advantages of investing in the future of renewable energy through
                                    VoltiE's EV charging solutions? `}                                   
                                        <div
                                            className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
                                        >
                                            <svg
                                                className="h-5 w-4 text-pink-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="{1.5}"
                                                stroke="currentColor"
                                            // className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </summary>
                                    <p className="text-xs pt-3">
                                    {`Investing in VoltiE's EV charging solutions means joining a growing technology that is
                                    not only environmentally responsible but also financially viable. As the demand for EV
                                    charging continues to rise, our innovative business models ensure a profitable opportunity
                                    for those looking to venture into this emerging market.`}
                                    </p>
                                </details>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ