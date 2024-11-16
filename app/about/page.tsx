import { Metadata } from "next/types";
import React, { Fragment } from "react";
import Header from "../components/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Xplorers Gym | About",
};

export default function About() {
  return (
    <Fragment>
      <Header title='About Us' image={"/img/header_bg_1.jpg"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae
          tenetur repellat eius laboriosam sed cupiditate magni? Alias molestiae
          asperiores dolorum vel, sapiente suscipit minus ducimus quas
          voluptatibus corrupti nisi!
        </p>
      </Header>

      <section className='mt-[10rem]'>
        <div className='website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='w-[80%] mx-auto md:w-[60%] overflow-hidden rounded-[50%] skew-x-[15deg] transition-all hover:skew-x-[0deg]'>
            <Image
              src={"/img/about1.jpg"}
              alt='About Story'
              width={700}
              height={700}
            />
          </div>
          <div className='about__section-content'>
            <h1 className='mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'>
              Our Story
            </h1>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              odit ex ullam, velit ipsum vero fuga dolor unde voluptas est amet,
              odio modi facilis nam sint at! Praesentium, facere harum?
            </p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum accusantium qui quam deleniti nam possimus dolore, quis
              velit tempore illo?
            </p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              illum.
            </p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className='website_container website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='about__section-content'>
            <h1 className="mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'">
              Our Vision
            </h1>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              odit ex ullam, velit ipsum vero fuga dolor unde voluptas est amet,
              odio modi facilis nam sint at! Praesentium, facere harum?
            </p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum accusantium qui quam deleniti nam possimus dolore, quis
              velit tempore illo?
            </p>
          </div>
          <div className='w-[80%] mx-auto md:w-[60%] overflow-hidden rounded-[50%] skew-x-[-15deg] transition-all hover:skew-x-[0deg] grid-rows-[1]'>
            <Image
              src={"/img/about2.jpg"}
              alt='About Vision'
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='website_container website_container grid grid-cols-[1fr] md:grid-cols-[40%_50%] gap-8 md:gap-12 lg:gap-[10%]'>
          <div className='about__section-content'>
            <h1 className="mb-[1.2rem] md:mb-8 text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'">
              Our Mission
            </h1>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              odit ex ullam, velit ipsum vero fuga dolor unde voluptas est amet,
              odio modi facilis nam sint at! Praesentium, facere harum?
            </p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum accusantium qui quam deleniti nam possimus dolore, quis
              velit tempore illo?
            </p>
          </div>
          <div className='w-[80%] mx-auto md:w-[60%] overflow-hidden rounded-[50%] skew-x-[15deg] transition-all hover:skew-x-[0deg]'>
            <Image
              src={"/img/about3.jpg"}
              alt='About Mission'
              width={860}
              height={700}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
