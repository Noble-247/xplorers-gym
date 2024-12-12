/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next/types";
import { Fragment } from "react";
import Header from "../components/Header";
/* import Image from "next/image"; */

export const metadata: Metadata = {
  title: "Xplorers Gym | About",
};

export default function About() {
  return (
    <Fragment>
      <Header title='About Us' image={"/img/header_bg_1.jpg"}>
        <p>
          Xplorers Gym emphasizes fitness as a journey of personal development,
          offering a unique environment for members to push themselves, gain
          confidence, and enjoy the process. The gym provides a unique ambiance
          with panoramic views of Lagos&apos;s cityscape and tranquil shoreline,
          making each session inspiring and rewarding. Whether lifting weights,
          running on the treadmill, or attending a group class, Xplorers Gym is
          an inspiring and rewarding experience.
        </p>
      </Header>

      <section className='mt-[10rem]'>
        <div className='website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='w-[90%] mx-auto overflow-hidden rounded-full skew-x-[15deg] transition-all hover:skew-x-[0deg]'>
            <img src={"/img/about1.jpg"} alt='About Story' />
          </div>
          <div className='about__section-content'>
            <h1 className='mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'>
              Our Story
            </h1>
            <p className='mb-4'>
              Xplorers Gym is a fitness community founded by Xplorers Group,
              aiming to inspire and motivate individuals to reach their full
              potential. With years of experience, the gym offers a wide range
              of equipment, classes, and programs tailored to meet the diverse
              needs of its members. Whether you&apos;re a beginner or an
              athlete, the gym welcomes everyone with open arms and a commitment
              to helping you achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-[10rem]'>
        <div className='website_container website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='about__section-content'>
            <h1 className="mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'">
              Our Vision
            </h1>
            <p className='mb-4'>
              Xplorers Gym aims to empower individuals to manage their health
              and wellness, providing a supportive community for personal
              growth. They envision a future where everyone has access to
              quality fitness programs, expert guidance, and a supportive
              environment, valuing inclusivity, diversity, and mutual respect.
              Fitness should be enjoyable, accessible, and rewarding for all.
            </p>
          </div>
          <div className='w-[90%] mx-auto overflow-hidden rounded-full skew-x-[-15deg] transition-all hover:skew-x-[0deg] grid-rows-[1]'>
            <img src={"/img/about2.jpg"} alt='About Vision' />
          </div>
        </div>
      </section>

      <section className='mt-[10rem]'>
        <div className='website_container website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='about__section-content'>
            <h1 className="mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'">
              Our Mission
            </h1>
            <p className='mb-4'>
              Xplorers Gym has a mission to provide a top-notch fitness
              experience that motivates and supports members in achieving their
              health and wellness goals. We promise a clean, safe environment, a
              variety of equipment, classes, and programs, expert trainers, and
              a supportive community. By joining Xplorers Gym, members become
              part of a vibrant community that shares their passion for fitness
              and wellness, working together to achieve great things.
            </p>
          </div>
          <div className='w-[90%] mx-auto overflow-hidden rounded-full skew-x-[15deg] transition-all hover:skew-x-[0deg]'>
            <img src={"/img/about3.jpg"} alt='About Mission' />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
