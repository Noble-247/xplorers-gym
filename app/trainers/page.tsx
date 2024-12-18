import { Fragment } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Header from "../components/Header";
import Trainer from "../components/Trainer";
import { trainers } from "../data";

export default function Trainers() {
  return (
    <Fragment>
      <Header title='Meet Our Expert Trainers' image={"/img/header_bg_5.jpg"}>
        Our gym instructors are dedicated professionals who will help you reach
        your fitness goals. With years of experience and specialized training,
        they&apos;ll guide you through personalized workouts and provide support
        every step of the way.
      </Header>
      <section className='mt-[10rem]'>
        <div className='website_container grid grid-cols-[1fr] gap-[2rem] md:grid-cols-[1fr_1fr] md:gap-[2.5rem] lg:grid-cols-[repeat(3,_1fr)] lg:gap-[4rem]'>
          {trainers.map((trainer) => {
            return (
              <Trainer
                key={trainer.id}
                image={trainer.image}
                imageWidth={trainer.ImageHeight}
                ImageHeight={trainer.ImageHeight}
                name={trainer.name}
                job={trainer.job}
                socials={[
                  { icon: <FaInstagram />, links: trainer.socials[0] },
                  { icon: <AiOutlineTwitter />, links: trainer.socials[1] },
                  { icon: <FaFacebookF />, links: trainer.socials[2] },
                  { icon: <FaLinkedinIn />, links: trainer.socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}
