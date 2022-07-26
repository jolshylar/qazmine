import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const bgStyles =
    "relative bg-hero-background bg-center bg-cover bg-no-repeat";
  return (
    <div id="hero" className={`${bgStyles}`}>
      <Navbar />
      <div className="lg:flex lg:gap-[6%] ">
        <div className="uppercase ml-[5%] text-5xl max-w-[760px]">
          <h1 className="pt-[20%]">Collect all elements</h1>
          <h1 className="my-4">Of the periodic table</h1>
          <h1 className="mb-8 text-secondary">Sitting at home</h1>
          <button className="p-3 uppercase lg:mb-4 border-secondary border-2 rounded-xl">
            <Link href="#basics-one">Get Started -&gt;</Link>
          </button>
        </div>
        <Image
          className="lg:bg-chemist lg:bg-cover lg:bg-no-repeat"
          alt="Chemist Portrait"
          src="/images/chemist.png"
          width={600}
          height={471}
        />
      </div>
    </div>
  );
};

export default Hero;
