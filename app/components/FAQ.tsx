"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  question: string;
  answer: string;
};

export default function FAQ({ question, answer }: Props) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  function showAndHideAnswers(): void {
    setIsAnswerShowing((previousState) => !previousState);
  }

  return (
    <article
      className='bg-gray-500 p-8 cursor-pointer rounded-2xl transition-all'
      onClick={() => showAndHideAnswers()}
    >
      <div className='flex justify-between items-center'>
        <h4>{question}</h4>
        <button className='bg-transparent text-gray-100 text-[1.5rem]'>
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p className='mt-6'>{answer}</p>}
    </article>
  );
}
