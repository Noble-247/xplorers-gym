import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-primary text-gray-100 mt-28 pt-28 text-[0.9rem]'>
      <div className='website_container grid grid-cols-[1fr] gap-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:grid-cols-[26rem_1fr_1fr_1fr]'>
        <article className='flex flex-col items-center md:items-start gap-[0.7rem]'>
          <Link href='/'>
            <Image
              src='/img/logo1.png'
              alt='Website Logo'
              height={121}
              width={164}
            />
          </Link>
          <p className='text-center md:text-start'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
            suscipit nobis. Reprehenderit placeat ipsum deleniti excepturi qui
            enim laborum labore, repellendus voluptas voluptate aspernatur.
          </p>
          <div className='mt-6 flex gap-4 items-center'>
            <a
              className='bg-gray-100 p-[0.7rem] border border-solid border-transparent rounded-[0.6rem] transition-all hover:text-gray-100 hover:bg-transparent'
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-gray-600' />
            </a>
            <a
              className='bg-gray-100 p-[0.7rem] border border-solid border-transparent rounded-[0.6rem] transition-all hover:text-gray-100 hover:bg-transparent'
              href='https://facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='text-gray-600' />
            </a>
            <a
              className='bg-gray-100 p-[0.7rem] border border-solid border-transparent rounded-[0.6rem] transition-all hover:text-gray-100 hover:bg-transparent'
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineTwitter className='text-gray-600' />
            </a>
            <a
              className='bg-gray-100 p-[0.7rem] border border-solid border-transparent rounded-[0.6rem] transition-all hover:text-gray-100 hover:bg-transparent'
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineInstagram className='text-gray-600' />
            </a>
          </div>
        </article>
        <article className='flex flex-col items-center md:items-start gap-[0.7rem]'>
          <h4 className='mb-[0.6rem] text-[1rem] font-[600]'>Permalinks</h4>
          <Link href='/about'>About</Link>
          <Link href='/plans'>Plans</Link>
          <Link href='/trainers'>Trainers</Link>
          <Link href='/gallery'>Gallery</Link>
          <Link href='/contact'>Contact</Link>
        </article>
        <article className='flex flex-col items-center md:items-start gap-[0.7rem]'>
          <h4 className='mb-[0.6rem] text-[1rem] font-[600]'>Insights</h4>
          <Link href='/s'>Blog</Link>
          <Link href='/s'>Case Studies</Link>
          <Link href='/s'>Events</Link>
          <Link href='/s'>Communities</Link>
          <Link href='/s'>FAQs</Link>
        </article>
        <article className='flex flex-col items-center md:items-start gap-[0.7rem]'>
          <h4 className='mb-[0.6rem] text-[1rem] font-[600]'>Get In Touch</h4>
          <Link href='/contact'>Contact Us</Link>
          <Link href='/s'>Support</Link>
        </article>
      </div>
      <div className='text-gray-100 text-center p-[1.5rem_0] bg-bulls-eye mt-20'>
        <small>
          2024 Emmatech Digital Solutions &copy; All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
