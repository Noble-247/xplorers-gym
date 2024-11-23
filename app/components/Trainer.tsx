import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

type Socials = {
  links: string;
  icon: React.ReactNode;
};

type Props = {
  image: string;
  imageWidth: number;
  ImageHeight: number;
  name: string;
  job: string;
  socials: Socials[];
};

export default function Trainer({
  image,
  imageWidth,
  ImageHeight,
  name,
  job,
  socials,
}: Props) {
  return (
    <Card className='w-[90%] mx-auto md:w-[100%]p-[1rem]'>
      <div className='overflow-hidden rounded-[0.2rem]'>
        <Image src={image} alt={name} width={imageWidth} height={ImageHeight} />
      </div>
      <h3 className='mt-[3rem] text-sm-heading-3 lg:text-lg-heading-3 xl:text-xl-heading-3'>
        {name}
      </h3>
      <p className='mt-[0.5rem]'>{job}</p>
      <div className='flex gap-[1rem] justify-center items-center m-[2rem_0]'>
        {socials.map((social, index) => {
          return (
            <Link
              className='text-[0.7rem] bg-gray-600 p-[0.8rem] rounded-[0.7rem] transition-all hover:bg-gray-500'
              key={index}
              href={social.links}
              target='_blank'
              rel='noopener noreferrer'
            >
              {social.icon}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
