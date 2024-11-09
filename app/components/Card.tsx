type Props = {
  className?: string;
  children: React.ReactElement[];
};

export default function Card({ className, children }: Props) {
  return (
    <article
      className={`bg-gray-500 border-[2px] border-solid border-transparent text-center py-[3rem] px-[2rem] rounded-[0_3rem_0_5rem] transition-all ${className} hover:bg-transparent hover:border-gray-400 hover:cursor-default`}
    >
      {children}
    </article>
  );
}
