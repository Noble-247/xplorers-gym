import { FaCrown, FaRunning } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { GrYoga } from "react-icons/gr";
import { GiAerodynamicHarpoon, GiBoxingRing, GiMuscleUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";

const programs: Programs[] = [
  {
    id: 1,
    title: "YOGA",
    info: "Our Yoga Classes Are Carefully Tailored To Keep You Centered Mentally And Physically",
    path: "/programs/111",
    icon: <GrYoga />,
  },
  {
    id: 2,
    title: "CORE CARDIO",
    info: "Our Core Cardio Classes Are Essentially Designed To Help You Reach Your Fitness Goals.",
    path: "/programs/222",
    icon: <GiMuscleUp />,
  },
  {
    id: 3,
    title: "TABATA",
    info: "A High-Intensity Interval Training (HIIT) Workout, Featuring Exercises That Lasts Minutes.",
    path: "/programs/333",
    icon: <FaRunning />,
  },
  {
    id: 4,
    title: "LES MILLS GRIT",
    info: "With A Few Short Sessions A Week, You Can Improve Fitness And Increase Athleticism.",
    path: "/programs/444",
    icon: <GiBoxingRing />,
  },
  {
    id: 5,
    title: "AEROBICS",
    info: " Join Us Every Saturday Morning For Our Carefully Planned I-Fitness Aerobics Classes.",
    path: "/programs/444",
    icon: <GiAerodynamicHarpoon />,
  },
  {
    id: 6,
    title: "SPINNING",
    info: " Our Spinning Class Is A Low-Impact Exercise That Is Ideal For All Fitness Enthusiasts.",
    path: "/programs/444",
    icon: <CgGym />,
  },
];

export default function Programs() {
  return (
    <section className='mt-32 lg:mt-16'>
      <div className='website_container '>
        <SectionHeader icon={<FaCrown />} title='Programs' />

        <div className='grid grid-cols-[1fr] gap-8 mt-12 md:grid-cols-[1fr_1fr] md:gap-12 md:mt-16 xl:grid-cols-[repeat(4,_1fr)]'>
          {programs.map((program) => (
            <Card className='w-[84%] md:w-full my-0 mx-auto' key={program.id}>
              <span className='w-12 h-12 bg-primary text-gray-100 text-[1.5rem] p-[0.8rem] grid place-items-center mb-6 mx-auto rounded-2xl transition-all hover:bg-secondary hover:text-gray-600'>
                {program.icon}
              </span>
              <h4 className='text-sm-heading-4  lg:text-lg-heading-4 xl:text-xl-heading-4'>
                <small>{program.title}</small>
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
