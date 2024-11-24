import { Fragment } from "react";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Header from "../components/Header";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Fragment>
      <Header title='Get In Touch' image={"/img/header_bg_2.jpg"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi
          reiciendis cumque, mollitia aperiam consectetur voluptas laudantium
          officiis eaque sapiente?
        </p>
      </Header>
      <section className='my-[10rem]'>
        <div className='website_container grid place-content-center'>
          <div className='flex gap-[1.5rem] md:gap-[2rem]'>
            <Link
              href='mailto:noble4special247@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-[1rem] text-[1.2rem] rounded-[1.2rem] bg-primary md:text-[2rem] md:p-[2rem] md:rounded-[1.5rem] border-[2px] border-transparent transition-all text-gray-50 hover:text-primary hover:bg-transparent hover:border-gray-100'
            >
              <MdEmail />
            </Link>
            <Link
              href='https://m.me/emmanuel_ekpobimi'
              target='_blank'
              rel='noopener noreferrer'
              className='p-[1rem] text-[1.2rem] rounded-[1.2rem] bg-primary md:text-[2rem] md:p-[2rem] md:rounded-[1.5rem] border-[2px] border-transparent transition-all text-gray-50 hover:text-primary hover:bg-transparent hover:border-gray-100'
            >
              <BsMessenger />
            </Link>
            <Link
              href='https://wa.me/+2348039356492'
              target='_blank'
              rel='noopener noreferrer'
              className='p-[1rem] text-[1.2rem] rounded-[1.2rem] bg-primary md:text-[2rem] md:p-[2rem] md:rounded-[1.5rem] border-[2px] border-transparent transition-all text-gray-50 hover:text-primary hover:bg-transparent hover:border-gray-100'
            >
              <IoLogoWhatsapp />
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </Fragment>
  );
}
