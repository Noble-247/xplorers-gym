import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
};

export default function NotFound() {
  return (
    <main className='h-screen flex justify-center justify-items-center border-4 border-white'>
      <section className='sm:w-[90%] md:w-[80%] text-center px-[1rem] md:px-[8rem] mx-auto border-2 border-primary py'>
        <h2 className='mt-[50%] sm:mt-[33%] md:mt-[50%] font-bold text-gray-100 text-small-heading-2 sm:text-medium-heading-1 md:text-heading-2'>
          Page Not Found
        </h2>
        <p className='mt-[2rem] block'>
          The page you are looking for might have been removed or had its name
          changed, or is temporarily unavailable
        </p>
        <Link
          className='mt-[2rem] block btn hover:bg-secondary hover:text-gray-100'
          href={"/"}
        >
          Go Back Home
        </Link>
      </section>
    </main>
  );
}
