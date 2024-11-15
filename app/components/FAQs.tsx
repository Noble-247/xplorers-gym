import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
import SectionHeader from "./SectionHeader";

export default function FAQs() {
  return (
    <section className='mt-40'>
      <div className='website_container'>
        <SectionHeader icon={<FaQuestion />} title='FAQs' />
        <div className='grid gap-4 mt-12 md:grid-cols-[1fr] lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-[1.5rem_5rem] items-center'>
          {faqs.map((faq) => {
            return (
              <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
