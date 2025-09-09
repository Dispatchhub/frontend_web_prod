import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // <div className="relative">
    <div className="hero py-[8rem] lg:py-[7.75rem] lg:px-[5rem] px-[2rem] lg:mt-[6rem] relative">
      <Image
        src={"/home/box1.png"}
        alt="box1"
        className="w-[7rem] md:w-[7rem] h-[5rem] md:h-[10rem] blur-[3.09375px] lg:blur-[12.375px] absolute left-0 top-89 lg:top-80"
        width={256}
        height={192}
      />
      <Image
        src={"/home/box2.png"}
        alt="box1"
        className="w-[5rem] md:w-[13rem] h-[9rem] md:h-[18rem] blur-[3.09375px] lg:blur-[12.375px] absolute right-0 top-107 lg:top-120"
        width={256}
        height={192}
      />
      <div className=" flex flex-col items-center gap-8 lg:gap-[4rem]">
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-8">
          <div className="flex flex-col items-center gap-2 lg:gap-4 md:w-[48rem]">
            <h1 className="text-center unageo-bold text-[2rem] md:text-[3rem] lg:text-[3.75rem] leading-[2.5rem] lg:leading-[4.25rem]">
              Deliver anywhere now with Dispatch Hub
            </h1>
            <h3 className="text-center w-[21.75rem] md:w-[35.25rem] unageo text-[1rem] lg:text-[1.25rem] font-medium leading-[1.5rem] lg:leading-[2rem]">
              Enjoy fast, reliable, and eco-friendly delivery solutions that
              keep your business moving efficiently.
            </h3>
          </div>
          <Link
            href={"/signup"}
            className="flex w-[17.25rem] md:w-auto py-[0.95rem] lg:py-[1.5rem] px-[1.8rem] lg:px-[3rem] items-center justify-center rounded-[3.9rem] lg:rounded-[3rem] bg-[#FE581C] hover:bg-[#f54708] active:bg-[#db450f] text-white gap-2 transition-all duration-500 ease-in-out"
          >
            <p className="unageo font-medium text-[1rem] leading-[1.4rem] lg:leading-[1.4rem] ">
              Register
            </p>
            <Image
              src={"/home/arrow-down.png"}
              alt="arrow-down"
              className="w-[0.9rem] lg:w-[1.5rem] h-[0.9rem] lg:h-[1.5rem]"
              width={24}
              height={24}
            />
          </Link>
        </div>

        {/* hero box */}
        <div className="md:w-[54rem] w-[17rem] flex md:flex-row flex-col p-[0.9rem] md:p-6 justify-center items-center md:gap-8 gap-[1.2rem] bg-white md:rounded-[1rem] rounded-[0.5rem] hero-box z-10">
          <div className="flex w-full md:w-[26rem] h-[7rem] md:h-full py-[2.5rem] justify-center items-center">
            <div className="flex flex-col py-[0.9rem] lg:py-[0.5rem] px-[0.6rem] lg:px-[1rem] justify-center items-center md:gap-[0.25rem] gap-[0.1rem]">
              <Image
                src={"/home/package.png"}
                alt="package"
                className="w-[3rem] lg:w-[6rem] h-[3rem] lg:h-[6rem] object-cover"
                width={56}
                height={96}
              />
              <p className="unageo md:text-[1.5rem] font-semibold lg:leading-[2rem] text-[#808080]">
                Delivery
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-[26rem] h-[7rem] md:h-full py-[2.5rem] justify-center items-center">
            <div className="flex flex-col py-[0.9rem] lg:py-[0.5rem] px-[0.6rem] lg:px-[1rem] justify-center items-center md:gap-[0.25rem] gap-[0.1rem]">
              <Image
                src={"/home/cycle.png"}
                alt="package"
                className="w-[3rem] lg:w-[6rem] h-[3rem] lg:h-[6rem] object-cover"
                width={56}
                height={96}
              />
              <p className="unageo md:text-[1.5rem] font-semibold lg:leading-[2rem] text-[#808080]">
                Courier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
