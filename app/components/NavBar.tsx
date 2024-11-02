/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className='font-[500] h-[5rem] w-screen bg-primary grid place-items-center sticky top-0 left-0 z-[100] text-gray-100'>
      <div className='w-[90%] lg:w-[80%] max-w-[1920px] mx-auto h-full flex justify-between items-center relative'>
        <Link href={"/"} className='w-[7rem] block'>
          <img src='/img/logo1.png' alt='Website Logo' />
        </Link>
        <ul className='flex gap-[3.5rem] items-center'>
          <li className=''>
            <Link href={"/"}>Home</Link>
          </li>
          <li className=''>
            <Link href={"/about"}>About</Link>
          </li>
          <li className=''>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className=''>
            <Link href={"/plans"}>Plan</Link>
          </li>
          <li className=''>
            <Link href={"/trainers"}>Trainers</Link>
          </li>
          <li className=''>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <button className=''>
          <FiX /> <FaBars />
        </button>
      </div>
    </nav>
  );
}
