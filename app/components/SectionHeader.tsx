type Props = {
  icon: React.ReactElement;
  title: string;
  className?: string;
};

export default function SectionHeader({ icon, title, className }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className='bg-gray-500 text-secondary text-[1.5rem] p-[0.8rem] rounded-2xl'>
        {icon}
      </span>
      <h2 className='text-sm-heading-2 lg:text-lg-heading-2 xl:text-xl-heading-2'>
        {title}
      </h2>
    </div>
  );
}
