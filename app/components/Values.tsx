import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { GiContract, GiCrown, GiCutDiamond, GiLotus } from "react-icons/gi";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";

const values: Values[] = [
  {
    id: 1,
    title: "WELLNESS",
    description:
      " Prioritize the physical and mental well-being of members and employees.",
    icon: <GiLotus />,
  },
  {
    id: 2,
    title: "INCLUSIVITY",
    description:
      "Foster a welcoming environment for people of all ages, abilities, and backgrounds",
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "EXCELLENCE",
    description: "Strive for exceptional service, facilities, and programming.",
    icon: <GiCrown />,
  },
  {
    id: 4,
    title: "INTEGRITY",
    description: "Operate with transparency, honesty, and ethics.",
    icon: <GiContract />,
  },
];

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
            By embracing these values, we create a positive, supportive, and
            motivating environment that helps members achieve their fitness
            goals and improves overall well-being.
          </p>
          <div className='grid grid-cols-[1fr] gap-12 md:gap-[4rem_3rem] md:grid-cols-[1fr_1fr] lg:gap-[3.4rem_2.4rem] mt-[4.5rem]'>
            {values.map((value) => (
              <Card
                className='w-[84%] mx-auto text-center lg:w-full lg:pt-14 lg:relative'
                key={value.id}
              >
                <span className=' xl:-top-6 lg:-top-2 w-12 h-12 bg-primary text-gray-100 text-[1.5rem] p-[0.8rem] grid place-items-center mb-6 mx-auto rounded-2xl transition-all hover:bg-secondary hover:text-gray-600'>
                  {value.icon}
                </span>
                <h4 className='text-sm-heading-4  lg:text-lg-heading-4 xl:text-xl-heading-4'>
                  <small>{value.title}</small>
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
