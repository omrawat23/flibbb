import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Flib has allowed us to increase our content production with a small team. Its easy to use platform makes it seamless for us to learn different resources within it.",
    name: "Leslyn Felder",
    title: "HR Manager",
    company: "Goose head Insurance",
    imageUrl: "path/to/image.jpg"
  },
  {
    quote: "Flib has allowed us to increase our content production with a small team. Its easy to use platform makes it seamless for us to learn different resources within it.",
    name: "Leslyn Felder",
    title: "HR Manager",
    company: "Goose head Insurance",
    imageUrl: "path/to/image.jpg"
  },
  {
    quote: "Flib has allowed us to increase our content production with a small team. Its easy to use platform makes it seamless for us to learn different resources within it.",
    name: "Leslyn Felder",
    title: "HR Manager",
    company: "Goose head Insurance",
    imageUrl: "path/to/image.jpg"
  },
  {
    quote: "Flib has allowed us to increase our content production with a small team. Its easy to use platform makes it seamless for us to learn different resources within it.",
    name: "Leslyn Felder",
    title: "HR Manager",
    company: "Goose head Insurance",
    imageUrl: "path/to/image.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="relative py-12 px-6 flex justify-center min-h-[220px] z-10">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start bg-green-600 rounded-lg shadow-lg overflow-hidden relative">
          <div className="flex-1 flex flex-col justify-start items-start bg-green-600 text-white p-8 z-20 mt-24">
            <h2 className="mb-4 display-4 text-left w-[508px] h-[168px]">Get started today, free</h2>
            <p className="mb-6 body-1-regular text-left w-[483px] h-[64px] text-[#F7FAF8]">Come see why leading businesses choose Flib for better services in swags</p>
            <button className="body-1 w-[164px] h-[50px] px-6 py-2 gap-10 border border-solid border-white rounded-md">Get started</button>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-44 p-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white text-green-600 p-6 rounded-lg shadow-md  ${
                  index % 2 === 0 ? 'animate-slideUpDown' : 'animate-slideDownUp'
                }`}
                style={{ width: '350px' }}
              >
                <p className="mb-4 font-poppins text-base font-semibold leading-6 text-left w-[321px] h-[120px] text-[#303733]">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Image className="w-12 h-12 rounded-full mr-4" src={testimonial.imageUrl} alt={testimonial.name} />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.title}</p>
                    <p className="text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
