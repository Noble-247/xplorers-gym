import { FaCrown } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { programs } from "../data";
import Card from "./Card";
import { SiOpenaigym } from "react-icons/si";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

export default function Programs() {
  return (
    <section className='mt-32 lg:mt-16'>
      <div className='website_container '>
        <SectionHeader icon={<FaCrown />} title='Programs' />

        <div className='grid grid-cols-[1fr] gap-8 mt-12 md:grid-cols-[1fr_1fr] md:gap-12 md:mt-16 xl:grid-cols-[repeat(4,_1fr)]'>
          {programs.map((program) => (
            <Card className='w-[84%] md:w-full my-0 mx-auto' key={program.id}>
              <span className='w-12 h-12 bg-primary text-gray-100 text-[1.5rem] p-[0.8rem] grid place-items-center mb-6 mx-auto rounded-2xl transition-all hover:bg-secondary hover:text-gray-600'>
                <SiOpenaigym />
              </span>
              <h4 className='text-sm-heading-4  lg:text-lg-heading-4 xl:text-xl-heading-4'>
                {program.title}
              </h4>
              <small className='mt-4 block font-[300]'>{program.info}</small>
              <Link
                href={program.path}
                className='flex btn sm  hover:bg-secondary text-gray-600 mt-10 items-center justify-center transition-all'
              >
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
