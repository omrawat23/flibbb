import React from 'react';
import Image from 'next/image';
const Blog = () => {
  const posts = [
    {
      title: "Flutter Festival",
      description: "Join the most awaited event of nit rkl lorium ipsum loda lasun",
      date: "21 December 2023",
      link: "#",
      imageSrc: "https://i.postimg.cc/yxmy1DQV/Rectangle-3.png",
    },
    {
      title: "React Conference",
      description: "Explore the latest in React development at our annual conference.",
      date: "15 January 2024",
      link: "#",
      imageSrc: "https://i.postimg.cc/yxmy1DQV/Rectangle-3.png",
    },
    {
      title: "Vue Summit",
      description: "Engage with the Vue community and learn from the experts.",
      date: "10 February 2024",
      link: "#",
      imageSrc: "https://i.postimg.cc/yxmy1DQV/Rectangle-3.png",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
        <header className='text-center'>
        <button className='sm-button mb-[8px]'>Blog Post</button>
      <h1 className="text-center header-1 text-[#202522]">
        Read what our customers have to say about Flib
      </h1>
      </header>
      <div className="mt-[42px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-36 ml-[-130px]">
        {posts.map((post, index) => (
          <div 
            key={index} 
            className="relative w-[531.8px] h-[498px] bg-white rounded p-4 overflow-hidden shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),_0px_1px_2px_0px_rgba(0,0,0,0.30)] border-t-[1.4px]"
          >
            <Image width={500} height={100} className="h-[294px] w-[499px] object-cover" src={post.imageSrc} alt={post.title} />
            <div className="mt-[24px]">
              <div className="flex justify-between items-center ">
                <div className="header-2 text-[#000000]">{post.title}</div>
                <a href={post.link} className="text-[#2CA05A] body-11">View Post</a>
              </div>
              <p className="text-[#000000] body-2-regular mt-[16px]">
                {post.description}
              </p>
              <p className="text-[#000000] body-3-regular mt-[24px]">Date - {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
