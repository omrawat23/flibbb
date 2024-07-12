import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Adjust the path to match the location of your images */}
      <Image src="/catalogue_page-0001.jpg" alt="Catalogue Page 1" className="w-80vw h-auto mb-4" />
      <Image src="/catalogue_page-0002.jpg" alt="Catalogue Page 2" className="w-80vw h-auto mb-4" />
      <Image src="/catalogue_page-0003.jpg" alt="Catalogue Page 3" className="w-80vw h-auto mb-4" />
      <Image src="/catalogue_page-0004.jpg" alt="Catalogue Page 4" className="w-80vw h-auto mb-4" />
    </div>
  );
};

export default Page;
