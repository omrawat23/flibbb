import Image from "next/image";

const Catalogue = () => {
  return (
    <div className="py-3 px-6 flex justify-center">
    <div className="w-[1312px] h-[573px] px-[64px] lg:max-h-[16vh] "> 
      <div className="flex flex-col lg:flex-row items-center bg-green-600 rounded-xl shadow-lg overflow-hidden">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 ml-0 ">
              <div className="relative">
                <Image
                width={400}
                height={100}
                  src="https://i.postimg.cc/j54vMsST/1-1.jpg"
                  alt="Product 1"
                  className="w-full h-24 lg:h-auto overflow-hidden animate-slideDownUp object-cover rounded-md left-0"
                />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={100}
                  src="https://i.postimg.cc/0jtnqcSH/1-2.jpg"
                  alt="Product 2"
                  className="w-full h-24 lg:h-auto animate-slideDownUp overflow-hidden object-cover rounded-md"
                />
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Image
                  width={400}
                  height={100}
                  src="https://i.postimg.cc/BQ6NCf9W/1.jpg"
                  alt="Product 3"
                  className="w-full h-24  lg:h-auto animate-slideUpDown overflow-hidden object-cover rounded-md"
                />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={100}
                  src="https://i.postimg.cc/65mcjbt8/2.jpg"
                  alt="Product 4"
                  className="w-full h-24  lg:h-auto animate-slideUpDown overflow-hidden object-cover rounded-md"
                />
              </div>
              {/* Additional product images
              <div className="relative">
                <img
                  src="https://i.postimg.cc/JhbQh1JX/3.jpg"
                  alt="Product 5"
                  className="w-full h-36 lg:h-52 lg:h-auto animate-slideUpDown overflow-hidden object-cover"
                />
              </div> */}
            </div>
          </div>
          <div className="flex-1 bg-green-600 text-white p-8 text-start">
  <div className="flex flex-col items-start justify-start h-full">
    <h1 className="mb-4 display-4 text-left w-[508px] h-[168px]">
      Explore the Flib Catalogue
    </h1>
    <p className="body-1-regular text-left w-[483px] text-[#F7FAF8]  mb-6">
      Browse through our diverse range of high-quality merchandise, thoughtfully curated to meet your branding needs.
    </p>
      <button className="w-[264px] h-[50px] px-6 py-2 gap-10 border border-solid border-white rounded-md body-1">
        Go to the Catalogue
      </button>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
