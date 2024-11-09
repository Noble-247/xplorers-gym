import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import { SiOpenaigym } from "react-icons/si";
import Card from "./Card";

export default function Values() {
  return (
    <section className='mt-40'>
      <div className='website_container grid grid-cols-[1fr] justify-center gap-16 lg:grid-cols-[38%_50%] lg:gap-[12%]'>
        <div className='hidden lg:block saturate-[0.25] hover:saturate-[1]'>
          <Image
            src={"/img/values.jpg"}
            alt='values'
            width={570}
            height={858}
          />
        </div>
        <div className='values__right'>
          <SectionHeader icon={<GiCutDiamond />} title='Values' />
          <p className='my-6 mx-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            consequuntur expedita corporis consequatur nisi deserunt veniam?
            Mollitia, quisquam consequatur minima?
          </p>
          <div className='grid grid-cols-[1fr] gap-12 md:gap-[4rem_3rem] md:grid-cols-[1fr_1fr] lg:gap-[3.4rem_2.4rem] mt-[4.5rem]'>
            {values.map((value) => (
              <Card
                className='w-[84%] mx-auto lg:w-full lg:pt-14 lg:text-left lg:relative'
                key={value.id}
              >
                <span className=' xl:-top-6 lg:-top-2 w-12 h-12 bg-primary text-gray-100 text-[1.5rem] p-[0.8rem] grid place-items-center mb-6 mx-auto rounded-2xl transition-all hover:bg-secondary hover:text-gray-600'>
                  <SiOpenaigym />
                </span>
                <h4 className='text-sm-heading-4  lg:text-lg-heading-4 xl:text-xl-heading-4'>
                  {value.title}
                </h4>
                <small className='mt-4 block font-[300]'>
                  {value.description}
                </small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
