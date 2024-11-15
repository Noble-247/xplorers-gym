"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import Image from "next/image";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  function showPreviousTestimonial() {
    setIndex((previousState) => previousState - 1);
    // Prevent loading an undefined index
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }

  function showNextTestimonial() {
    setIndex((previousState) => previousState + 1);
    // Prevent loading an undefined index
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  }
  /* 
mt-[10rem] w-full md:w-[75%] lg:mx-auto xl:w-[50rem]  
*/
  return (
    <section className='mt-[10rem] w-full lg:w-[50rem] lg:mx-auto'>
      <div className='website_container mx-auto'>
        <SectionHeader
          icon={<ImQuotesLeft />}
          title='Testimonials'
          className='justify-center'
        />
        <Card className='relative text-left mt-20'>
          <div className='w-16 h-16 overflow-hidden absolute -top-8 left-[calc(50%-2rem)] shadow-[0_1.5rem_2rem_rgba(26,_26,_54,_0.4)] border-[2px] border-[transparent] border-solid rounded-3xl transition-all'>
            <Image
              src={avatar}
              alt='avatar'
              width={150}
              height={150}
              className='hover:border-secondary hover:rounded-[50%]'
            />
          </div>
          <p className='italic m-[1rem_0.3rem]'>{quote}</p>
          <h5>{name}</h5>
          <small className='mt-[0.3rem]'>{job}</small>
        </Card>
        <div className='w-[fit-content] m-[2.5rem_auto_0] flex justify-center items-center gap-4'>
          <button
            className='bg-transparent cursor-pointer'
            onClick={showPreviousTestimonial}
          >
            <IoIosArrowDropleftCircle className='text-primary text-[1.8rem] w-12 h-12' />
          </button>
          <button
            className='bg-transparent cursor-pointer'
            onClick={showNextTestimonial}
          >
            <IoIosArrowDroprightCircle className='text-primary text-[1.8rem] w-12 h-12' />
          </button>
        </div>
      </div>
    </section>
  );
}
