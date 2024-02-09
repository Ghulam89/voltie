'use client'
import FAQ from '@/components/Home/FAQ/FAQ'
import { Footer } from '@/components/Footer/Footer'
import IntroSection from '@/components/IntroSection/IntroSection'
import PlanA from '@/components/Plans/PlanA'
import PlanB from '@/components/Plans/PlanB'
import PlanC from '@/components/Plans/PlanC'
import PlanD from '@/components/Plans/PlanD'
import AboutFirstSection from '@/components/about/AboutFirstSection/AboutFirstSection'
import AboutSecondSection from '@/components/about/AboutFirstSection/AboutSecondSection'
import AboutThirdSection from '@/components/about/AboutFirstSection/AboutThirdSection'
import OurApproach from '@/components/about/AboutInfo/OurApproach'
import OurJourney from '@/components/about/AboutInfo/OurJourney'
import OurMission from '@/components/about/AboutInfo/OurMission'
import OurVision from '@/components/about/AboutInfo/OurVision'
import ParkingLots from '@/components/about/AboutInfo/ParkingLots'
import WhyVoltie from '@/components/about/AboutInfo/WhyVoltie'
import Agile from '@/components/about/ChargingOptions/agile'
import Fleet from '@/components/about/ChargingOptions/fleet'
import Kiosk from '@/components/about/ChargingOptions/kiosk'
import Power from '@/components/about/ChargingOptions/power'
import React from 'react'
import Agiletep from '@/components/Plans/temp'

const page = () => {
  return (
    <main>
        {/* <AboutFirstSection /> */}
        <ParkingLots />
        <OurVision />
        <OurMission />
        <OurJourney />
        <OurApproach />
        <WhyVoltie />
        {/* <ChargingOptions/> */}
        {/* <Agile/> */}
        {/* <Fleet/> */}
        {/* <Kiosk/> */}
        {/* <Agiletep /> */}
        <Power/>  
        {/* <AboutThirdSection /> */}
    </main>
  )
}

export default page