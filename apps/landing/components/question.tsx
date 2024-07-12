"use client"
import React, { useState } from 'react';

const Questions = () => {
  const [open, setOpen] = useState(Array(4).fill(false));

  const toggle = (index: number) => {
    setOpen(open.map((item, idx) => idx === index ? !item : item));
  };

   const faqs = [
    {
      question: "How do I register for the hackathon?",
      answer: "To register for the hackathon, visit our official website and fill out the registration form."
    },
    {
      question: "What is the eligibility criteria?",
      answer: "Participants must be 18 years or older and have a valid student or professional ID."
    },
    {
      question: "What is the schedule?",
      answer: "The hackathon starts at 9 AM on June 25th and ends at 6 PM on June 27th."
    },
    {
      question: "Are there any prizes?",
      answer: "Yes, there are cash prizes for the top three teams and several other awards."
    }
  ];

  return (
    <div className="w-full flex justify-center items-center p-0 px-[64px] gap-[10px] min-h-screen">
      <div className="w-full max-w-[1312px] h-auto">
        <header className='text-center'>
          <button className='sm-button mb-[8px]'>FAQs</button>
          <h2 className="header-1 mb-10 text-center">Do You Have A Question?</h2>
        </header>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` w-[1312px] p-[16px_36px] mb-8 rounded-[16px] cursor-pointer transition-all duration-300 shadow-[0_1px_8px_2px_rgba(20,20,20,0.08)] ${open[index] ? 'h-[132px] gap-1 border-4 border-solid border-[#6BB881] bg-green-100' : 'h-[80px] shadow-[#14141414]'}`}
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center mt-[10px]">
              <p className="text-lg">{faq.question}</p>
              <button className="text-lg font-bold">
                <img
                  src={open[index] ? "icons/cross.svg" : "icons/plus.svg"}
                  alt={open[index] ? "Collapse" : "Expand"}
                  className="w-6 h-6"
                />
              </button>
            </div>
            {open[index] && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
        <div className="border-4 border-solid border-[#6BB881] bg-green-100 p-4 rounded-[16px] mt-4">
          <p className="text-lg font-bold">
            What all expenses will be covered by us for Round 2?
          </p><br/>
          <p>
            You will get cash prizes if you win; otherwise, you will always get an excellent
            opportunity to network with like-minded people, learn many things, and get cool
            swags.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
