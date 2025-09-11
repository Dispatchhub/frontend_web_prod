import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col px-8 md:px-[6rem] lg:px-[10.3rem] py-[3.5rem] lg:py-10 items-center justify-center">
      <div className="flex flex-col items-start md:items-center gap-8 md:gap-10">
        <div className="flex w-full md:max-w-[55.75rem] flex-col items-start md:items-center md:gap-4 gap-8">
          <div className="flex flex-col items-start md:items-center gap-2">
            <h1 className="unageo-bold text-[2rem] md:text-[3rem] lg:text-[3.75rem] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.25rem] text-center">
              How Our Services Help
            </h1>
            <h3 className="unageo-regular text-[1.125rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2rem] md:text-center">
              Our local dispatch services are designed to meet the unique needs
              of businesses and individuals across Nigeria with efficiency and
              professionalism.
            </h3>
          </div>
          <Link
            href={""}
            className="py-3 md:py-4 px-6 md:px-8 md:w-[13.5rem] w-full justify-center items-center rounded-[3.125rem] md:rounded-[2rem] bg-[#FE581C] text-white flex unageo-regular text-[1rem] leading-[1.125rem] lg:leading-[1.5rem] font-medium hover:bg-[#f54708] transition-all duration-500 ease-in-out"
          >
            Get Started
          </Link>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <Image src={'/home/service.png'} alt="img" width={632} height={396} className="md:max-w-[39.5rem] md:max-h-[24.75rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
