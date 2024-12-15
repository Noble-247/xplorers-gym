import React, { Fragment } from "react";
import Header from "../components/Header";
import { GalleryImages } from "../data";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Xplorers Gym | Gallery",
};

export default function Gallery() {
  return (
    <Fragment>
      <Header title='Our Gallery' image={"/img/header_bg_3.jpg"}>
        <p>
          Our gallery showcases the vibrant energy, state-of-the-art equipment,
          and welcoming environment that makes our gym unique. From dynamic
          group classes to cutting-edge workout spaces, get a feel for the space
          that helps our members reach their fitness goals
        </p>
      </Header>
      <section className='mt-[10rem]'>
        <div className='website_container grid grid-cols-[1fr] gap-4 md:grid-cols-[1fr_1fr] md:gap-8 lg:grid-cols-[repeat(3,_1fr)]'>
          {GalleryImages.map((image) => {
            return (
              <article key={image.id}>
                <Image
                  src={image.image}
                  alt={`Gallery Item ${image.id}`}
                  width={image.width}
                  height={image.height}
                  className='border-0 md:border-[1rem] border-transparent transition-all hover:border-gray-500'
                />
              </article>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}
