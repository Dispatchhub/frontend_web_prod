import Image from "next/image";
import { ourJob } from "../../utils/OurJob";

const OurJob = () => {
  return (
    <div className="flex flex-col py-[3.5rem]  lg:py-[5rem] px-8 lg:px-[5rem]">
      <div className="flex flex-col items-start md:items-center gap-8 md:gap-10">
        <div className="flex flex-col items-start md:items-center gap-2 md:max-w-[69rem]">
          <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.75rem] unageo-bold leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.25rem] text-center">
            Where We Come In
          </h1>
          <p className="unageo-regular text-[1.125rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2rem] md:text-center">
            Our local dispatch services are designed to meet the unique needs of
            businesses and individuals across Nigeria with efficiency and
            professionalism.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[2rem] items-center justify-between">
          {ourJob.map((item) => (
            <div
              key={item.id}
              className="pb-4 flex flex-col items-start gap-6 rounded-[1rem] bg-[#FDFDFD] job-box"
            >
              <Image src={item.image} width={384} height={352} alt="job-img" className="w-full"/>
              <div className="flex flex-col gap-2 justify-center items-start px-4">
                <h2 className="unageo text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] whitespace-nowrap font-semibold">{item.title}</h2>
                <p className="unageo-regular text-[1rem] md:text-[1.25rem] leading-[1rem] md:leading-[2rem]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurJob;
