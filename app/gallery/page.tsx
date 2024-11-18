import React, { Fragment } from "react";
import Header from "../components/Header";
import { GalleryImages } from "../data";
import Image from "next/image";

export default function Gallery() {
  return (
    <Fragment>
      <Header title='Our Gallery' image={"/img/header_bg_3.jpg"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          dolore dolores! Dolore, voluptatibus ipsum. Accusantium sit quod
          aliquid.
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
