import IntroSection from "@/components/IntroSection/IntroSection";
import OurPartners from "@/components/Partners/OurPartners";
import PlanA from "@/components/Plans/PlanA";
import PlanB from "@/components/Plans/PlanB";
import PlanC from "@/components/Plans/PlanC";
import PlanD from "@/components/Plans/PlanD";
import PlanE from "@/components/Plans/PlanE";
import PlanF from "@/components/Plans/PlanF";
import OurServicesTeam from "@/components/ServicesTeam/ServicesTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <PlanA />
      <PlanB />
      <PlanC />
      <PlanD />
      {/* <PlanE /> */}
      {/* <PlanF /> */}
      {/* <PlanE /> */}
      {/* <OurPartners /> */}
      <OurServicesTeam />
    </div>
  );
};

export default page;
