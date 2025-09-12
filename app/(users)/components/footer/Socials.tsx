import Image from 'next/image';

const Socials = () => {
  return (
    <div className="flex items-center md:gap-3 gap-2">
      <div className="bg-white flex items-center justify-center w-7 md:w-9 h-7 md:h-9 p-2 md:p-3 rounded-full">
        <Image
          width={36}
          height={36}
          src={"/socials/instagram.svg"}
          alt="instagram"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white flex items-center justify-center w-7 md:w-9 h-7 md:h-9 p-2 md:p-3 rounded-full">
        <Image
          width={36}
          height={36}
          src={"/socials/facebook.svg"}
          alt="facebook"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white flex items-center justify-center w-7 md:w-9 h-7 md:h-9 p-2 md:p-3 rounded-full">
        <Image
          width={36}
          height={36}
          src={"/socials/twitter.svg"}
          alt="twitter"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white flex items-center justify-center w-7 md:w-9 h-7 md:h-9 p-2 md:p-3 rounded-full">
        <Image
          width={36}
          height={36}
          src={"/socials/linkedin.svg"}
          alt="linkedin"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Socials