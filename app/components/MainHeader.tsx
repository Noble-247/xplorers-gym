import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className='mt-0 pt-48 pr-0 pb-0 ps-0 h-screen lg:h-[fit-content] lg:px-0 xl:w-screen xl:h-screen xl:py-0 xl:grid xl:place-items-center'>
      <div className='website_container grid grid-cols-[1fr] lg:gap-0 lg:grid-cols-[1fr_1fr] xl:h-full xl:items-center xl:gap-24'>
        <div className='mt-[-3rem]'>
          <h4 className='text-sm-heading-4 lg:text-lg-heading-4 xl:text-xl-heading-4 text-secondary font-medium mb-[1rem]'>
            #GetFitStayFit
          </h4>
          <h1 className='text-sm-heading-1 lg:text-lg-heading-1 xl:text-xl-heading-1'>
            Join The Legends Of The Fitness World
          </h1>
          <p className='mt-[1rem] mx-0 mb-[3.5rem]'>
            Welcome to Xplorers Gym, where we think that fitness is about
            creating a lifestyle rather than just working out.
          </p>
          <Link
            href={"/plans"}
            className='btn lg hover:bg-secondary hover:text-gray-600 transition-all'
          >
            Get Started
          </Link>
        </div>

        <div className='grid place-items-center relative '>
          <div className='hidden lg:block lg:w-[16rem] h-[16rem] lg:bg-[linear-gradient(75deg,_#ffb116,_transparent)] lg:rounded-full lg:absolute lg:transition-all lg:hover:blur-[10px] xl:w-[25rem] xl:h-[25rem]'></div>
          <div className='hidden lg:block'>
            <Image
              src={"/img/main_header.png"}
              alt='Header'
              width={478}
              height={553}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
