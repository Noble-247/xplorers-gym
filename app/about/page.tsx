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
              At Xplorers Gym, we believe that fitness is a journey, not a
              destination. Our story began with a passion for helping people
              achieve their health and wellness goals. Our founders, Xplorers
              Group, were driven by a desire to create a supportive and
              inclusive community that would inspire and motivate individuals to
              reach their full potential.
            </p>
            <p className='mb-4'>
              With years of experience in the fitness industry, our team has
              worked tirelessly to create a state-of-the-art facility that
              offers a wide range of equipment, classes, and programs tailored
              to meet the diverse needs of our members.
            </p>
            <p className='mb-4'>
              From beginners to seasoned athletes, we welcome everyone with open
              arms and a commitment to helping them achieve their fitness goals.
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
              At Xplorers Gym, our vision is to empower individuals to take
              control of their health and wellness, and to provide a supportive
              community that inspires and motivates them to reach their full
              potential. We envision a future where everyone has access to
              quality fitness programs, expert guidance, and a supportive
              community that helps them achieve their goals.
            </p>
            <p className='mb-4'>
              We strive to create a culture that values inclusivity, diversity,
              and mutual respect. We believe that fitness should be enjoyable,
              accessible, and rewarding for everyone, regardless of their age,
              ability, or background.
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
              Our mission is to provide a world-class fitness experience that
              inspires, motivates, and supports our members in achieving their
              health and wellness goals. We are committed to delivering
              exceptional service, expert guidance, and a supportive community
              that helps our members succeed.
            </p>
            <div className='mb-4'>
              We promise to:
              <ul>
                <li>
                  - Provide a clean, safe, and welcoming environment for all
                  members
                </li>
                <li>
                  - Offer a wide range of equipment, classes, and programs
                  tailored to meet the diverse needs of our members
                </li>
                <li>
                  - Employ expert trainers and staff who are passionate about
                  helping our members achieve their goals
                </li>
                <li>
                  - Foster a supportive community that inspires and motivates
                  our members to reach their full potential
                </li>
              </ul>
              By joining [Gym Name], you become part of a vibrant community that
              shares your passion for fitness and wellness. Together, let&apos;s
              achieve great things!
            </div>
          </div>
          <div className='w-[90%] mx-auto overflow-hidden rounded-full skew-x-[15deg] transition-all hover:skew-x-[0deg]'>
            <img src={"/img/about3.jpg"} alt='About Mission' />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
