import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[1307px] h-[730px] mx-auto p-8">
      <header className='text-center'>
        <button className='sm-button mb-[8px]'>About Us</button>
      <h1 className="header-1 text-center text-[#090A09]">Journey to Flib</h1>
      </header>
      <div className="flex w-[1307px] h-[592px] gap-[129px]">
      
        <div className="flex flex-col gap-[42px]">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <Image 
              alt='ss'
              width={100}
              height={100}
                src="https://i.postimg.cc/HxVYWCQ8/012a56fb-dd77-4e4a-9772-deafa9038f93.jpg" 
                className="rounded-full w-48 h-48"
              />
              <h2 className="mt-4 text-xl font-semibold">Sanyam Singh</h2>
              <p className="text-gray-600">Co-founder</p>
            </div>
          </div>
          <div className="flex justify-center gap-[64px]">
            <div className="flex flex-col items-center">
              <Image 
              alt='wd'
              width={100}
              height={100}
                src="https://i.postimg.cc/HxVYWCQ8/012a56fb-dd77-4e4a-9772-deafa9038f93.jpg"
                className="rounded-full w-48 h-48"
              />
              <h2 className="mt-4 text-xl font-semibold">Sanyam Singh</h2>
              <p className="text-gray-600">Co-founder</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
              alt='ad'
              width={100}
              height={100}
                src="https://i.postimg.cc/HxVYWCQ8/012a56fb-dd77-4e4a-9772-deafa9038f93.jpg" 
                className="rounded-full w-48 h-48"
              />
              <h2 className="mt-4 text-xl font-semibold">Sanyam Singh</h2>
              <p className="text-gray-600">Co-founder</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-[640px] h-[400px] mt-[64px] text-left">
          <p className="display1 text-[#6D736F] ">
            What pains us the most is poor quality swag, it’s not only a waste of money but also harms the brand image. Whether you are trying to attract the best talent or wow your clients, thoughtful swag matters.
          </p><br/>
          <p className="display1 text-[#6D736F]">
            Today, while we have figured out how to send rockets to Mars, procuring branded swag continues to be a hassle, even for large companies. We have taken it upon ourselves to be your procurement partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
