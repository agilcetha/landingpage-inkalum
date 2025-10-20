import Image from "next/image";

import Hero from "../components/hero";
import BestProduct from "@/components/bestproduct";
import GlobalNetwork from "@/components/GlobalNetwork";

export default function HomeSlider() {
  return (
    <>
      <Hero/>
      
      <BestProduct/>
      <GlobalNetwork/>
    </>
  );
}

