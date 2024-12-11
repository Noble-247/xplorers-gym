import { FaQuestion } from "react-icons/fa";
import FAQ from "./FAQ";
import SectionHeader from "./SectionHeader";

const faqs: Faqs[] = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "The frequency of exercise depends on your fitness goals and current fitness level. The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic physical activity or 75 minutes of vigorous-intensity aerobic physical activity per week. Additionally, incorporating strength training exercises into your routine 2-3 times per week can help improve overall fitness and health.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "The best time to work out depends on your personal schedule, preferences, and body rhythms. Some people prefer morning workouts to boost energy and set a positive tone for the day. Others prefer evening workouts to relieve stress and unwind after a long day. Experiment with different times to find what works best for you.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The duration of your workouts depends on your fitness goals, current fitness level, and the type of exercise you're doing. Remember to listen to your body and adjust the duration and intensity of your workouts based on how you feel.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Yes, warming up before your workouts is essential to prepare your muscles, tendons, and cardiovascular system for physical activity. Aim for a 5-10 minute warm-up that includes light cardio and dynamic stretching.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Both strength training and cardio exercises are important for overall fitness and health. Aim for a balanced fitness routine that includes a mix of strength training, cardio, and flexibility exercises.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Lifting weights is an effective way to build strength and muscle mass, but it's not the only option. If you're new to strength training, consider starting with bodyweight exercises or machine-based exercises and gradually progressing to weightlifting. Always prioritize proper form and technique to avoid injury.",
  },
];

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
