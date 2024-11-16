import Image from "next/image";

type Props = {
  title: string;
  image: string;
  children: React.ReactNode;
};

export default function Header({ title, image, children }: Props) {
  return (
    <header className='h-[fit-content] md:h-80 overflow-hidden border-b-[2px] border-b-gray-400'>
      <div className='w-full h-full relative grid place-items-center bg-black'>
        <div className='absolute w-full'>
          <Image
            className='opacity-50'
            src={image}
            alt='Background'
            width={1330}
            height={886}
          />
        </div>
        <div className='w-[90%] p-[3rem_0] md:w-[50%] relative mx-auto text-center text-gray-100'>
          <h2 className='mb-4 text-sm-heading-4 lg:text-lg-heading-4 xl:text-xl-heading-4'>
            {title}
          </h2>
          <p className='text-[0.85rem] md:text-[1rem] text-[rgba(255,_255,_255,_0.7)]'>
            {children}
          </p>
        </div>
      </div>
    </header>
  );
}
