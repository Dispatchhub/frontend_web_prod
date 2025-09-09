import React from "react";
import Customers from "./logistcs/Customers";
import DispatchRiders from "./logistcs/DispatchRiders";
import LogisticsCompanies from "./logistcs/LogisticsCompanies";
import Image from "next/image";

const Logistics = () => {
  return (
    <div className="flex flex-col md:flex-row py-[3.5rem] lg:py-[10.25rem] px-8 lg:px-[5rem] justify-center items-center">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-[6rem]">
        <div className="flex flex-col items-start gap-6 md:gap-4 w-full">
          <div className="flex flex-col items-start gap-2">
            <h1 className="unageo-bold text-[2rem] md:text-[2.75rem] lg:text-[3.75rem] leading-[2.5rem] md:leading-[4.25rem]">
              Smart Logistics, Made Simple
            </h1>
            <p className="unageo text-[1rem] md:text-[1.25rem] leading-[1.5rem] lg:leading-[2rem]">
              Dispatch Hub is a modern delivery platform that connects
              individuals, small businesses, and e-commerce brands with fast,
              reliable, and affordable dispatch services. Whether you&apos;re
              sending a single package or managing hundreds of deliveries each
              week, Dispatch Hub is built to simplify your logistics-saving you
              time, money, and stress.
            </p>
          </div>
          <div className="flex flex-col w-full md:max-w-[33rem] items-start gap-1">
            <Customers />
            <DispatchRiders />
            <LogisticsCompanies />
          </div>
        </div>
        <div className="w-full h-[18rem] md:h-[33.6875rem]  grid grid-cols-2 grid-rows-2 gap-1">
          <Image
            src={"/home/log1.png"}
            alt="log1"
            className="w-full h-full object-cover"
            width={307}
            height={264}
          />
          <Image
            src={"/home/log3.png"}
            alt="log2"
            className="w-full h-full object-cover row-span-2"
            width={307}
            height={264}
          />
          <Image
            src={"/home/log2.png"}
            alt="log3"
            className="w-full h-full object-cover"
            width={307}
            height={264}
          />
        </div>
      </div>
    </div>
  );
};

export default Logistics;
