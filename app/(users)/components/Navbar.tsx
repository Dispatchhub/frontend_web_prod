import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { openSidebar } from "../store/mobileSidebarSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger effect after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex lg:w-full lg:px-20 px-[1.7rem] py-[0.8rem] lg:py-5 gap-[0.625rem] fixed nav ${
        isScrolled
          ? "top-6 left-4 right-4 w-auto bg-[#FDFDFD] rounded-[2rem]"
          : "top-6 lg:top-0 lg:bg-[#FFF] bg-[#FDFDFD] rounded-[2rem] lg:rounded-[0rem] left-4 right-4 lg:left-0 lg:right-0"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[0.35rem]">
          <Image
            src={"/logo.svg"}
            width={49}
            height={30}
            alt="logo"
            className="w-[2rem] md:w-[3rem] h-[1rem] md:h-[2rem]"
          />
          <h1 className="unageo text-[1.2rem] lg:text-[1.7rem] font-bold leading-[1.9rem] lg:leading-[2.8rem]">
            Dispatch Hub
          </h1>
        </div>
        <div className="hidden lg:flex p-2 items-center gap-6">
          <Link
            href={"/"}
            className={`flex py-2 px-4 items-center justify-center ${
              pathname === "/"
                ? "border border-[#FE581C] text-[#FE581C] rounded-[1.5rem]"
                : "text-black"
            }`}
          >
            <h2 className="unaego text-[1.125rem] font-medium leading-[1.75rem]">
              Home
            </h2>
          </Link>
          <Link
            href={"/map"}
            className={`flex py-2 px-4 items-center justify-center ${
              pathname === "/map"
                ? "border border-[#FE581C] text-[#FE581C] rounded-[1.5rem]"
                : "text-black"
            }`}
          >
            <h2 className="unaego text-[1.125rem] font-medium leading-[1.75rem]">
              Map
            </h2>
          </Link>
          <Link
            href={"/blog"}
            className={`flex py-2 px-4 items-center justify-center ${
              pathname === "/blog"
                ? "border border-[#FE581C] text-[#FE581C] rounded-[1.5rem]"
                : "text-black"
            }`}
          >
            <h2 className="unaego text-[1.125rem] font-medium leading-[1.75rem]">
              Blog
            </h2>
          </Link>
        </div>
        <div className="hidden lg:flex p-1 items-center gap-6">
          <Link
            href={"/signup"}
            className="flex py-[0.96rem] px-[2.3rem] justify-center items-center rounded-[1.9rem] bg-[#FE581C] unaego text-[0.9rem] leading-[1.43rem] text-white hover:bg-[#f54708] active:bg-[#db450f] transition-all duration-500 ease-in-out"
          >
            Signup
          </Link>
          <Link
            href={"/login"}
            className="flex py-[0.96rem] px-[2.3rem] justify-center items-center rounded-[1.9rem] border border-black unaego text-[0.9rem] leading-[1.43rem] text-[#FE581C]"
          >
            Login
          </Link>
        </div>
        <div className="block lg:hidden" onClick={handleOpenSidebar}>
          <Image
            src={"/menu.svg"}
            alt="menu"
            className="w-[1.25rem] h-[1.5rem]"
            width={20}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
