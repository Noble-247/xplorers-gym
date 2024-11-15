"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function NavBar() {
  const currentPath = usePathname();

  // Toggler state
  const [isNavShowing, setIsNavShowing] = useState(false);

  function showOrHideNavOnMobile() {
    setIsNavShowing((previousState) => !previousState);
  }

  function hideNavbarOnClick() {
    setIsNavShowing(false);
  }

  return (
    <nav className='font-[500] h-[5rem] w-screen bg-primary grid place-items-center sticky top-0 left-0 z-[100] text-gray-100'>
      <div className='w-[90%] lg:w-[80%] max-w-[1920px] mx-auto h-full flex justify-between items-center relative'>
        <Link
          onClick={() => hideNavbarOnClick()}
          href={"/"}
          className='w-[7rem] block'
        >
          <Image
            src='/img/logo1.png'
            alt='Website Logo'
            height={121}
            width={164}
          />
        </Link>
        <ul
          className={`absolute top-[100%] right-0 flex flex-col gap-0 origin-top-right lg:flex lg:flex-row lg:gap-[3.5rem] lg:items-center lg:static ${
            isNavShowing ? "flex" : "hidden"
          }`}
        >
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              } transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/about"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              }  transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/gallery"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              }  transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/gallery"}
            >
              Gallery
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/plans"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              }  transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/plans"}
            >
              Plan
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/trainers"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              }  transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/trainers"}
            >
              Trainers
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s] lg:h-[fit-content] lg:w-[fit-content] lg:shadow-none lg:animate-none lg:rotate-0 lg:opacity-[1]'>
            <Link
              className={`${
                currentPath === "/contact"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[5rem]"
                  : ""
              }  transition-all hover:text-secondary bg-primary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => showOrHideNavOnMobile()}
          className='inline-block bg-transparent text-[1.8rem] cursor-pointer lg:hidden lg:cursor-pointer'
        >
          {isNavShowing ? <FiX /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
