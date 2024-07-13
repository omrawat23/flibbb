import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=' py-[40px] px-[64px] bg-[#FFFFFF] shadow-[0px_-1px_24px_8px_rgba(20,20,20,0.08),0px_0px_1px_0px_rgba(20,20,20,0.08)]'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row md:justify-between items-start w-full  bg-[#FFFFFF]'>
          <div className='flex flex-col items-start md:w-1/3 mb-8 md:mb-0 '>
            <h2 className='text-lg font-semibold mb-2'>Get to know more about us</h2>
            <p className='text-sm mb-4'>Reach out to us to know more about our services and product. We’ll reach out to you within 4hrs</p>
            <Image width={70} height={90} src='https://i.postimg.cc/QCkhyBy0/Flib.jpg' alt='Flib' className='h-6 mb-2 mt-8' />
            <p className='text-sm text-muted-foreground mb-1 text-[#303733]'>
              hassle free swags
            </p>
            <p className='text-sm text-muted-foreground text-[#303733]'>
              &copy; 2023 Flib. All rights reserved
            </p>
          </div>
          <div className='flex flex-col items-end md:w-2/3'>
            <form className='flex items-center space-x-2 mb-4'>
            <input type='email' placeholder='  Email' className='w-[401px] h-[56px] gap-[10px] border border-solid rounded-md border-t-[1.6px] border-[#938F99]  p-[4px 0px]' />


            <button type='submit' className='header-332 w-[114px] h-[56px] px-[24px] py-[12px] gap-[10px]  border-solid border-[1.2px] border-green-500 text-green-600  rounded-md'>
              Submit
            </button>

            </form>
            <div className='flex justify-between w-full mt-12 '>
              <div className='flex flex-col space-y-2 ml-56 '>
              <Link href='#' className='body-3  text-[#404642]'>
                  About
                </Link>
                <Link href='#' className='body-3 text-[#404642]'>
                  Services
                </Link>
                <Link href='#' className='body-3 text-[#404642]'>
                  Careers
                </Link>
                <Link href='#' className='body-3 text-[#404642]'>
                  Terms
                </Link>
                <Link href='#' className='body-3  text-[#404642]'>
                  Privacy & Policy
                </Link>
              </div>
              <div className='flex flex-col items-end space-y-2'>
                <Link href='#' className='body-3  text-[#404642]'>
                  Get Help
                </Link>
                <Link href='#' className='body-3  text-[#404642]'>
                  FAQ
                </Link>
                </div>
                <div className='flex flex-col space-y-5'>
                  <Link href='#' className='body-3 hover:text-gray-600'>
                    <Image width={100} height={100} src='/icons/email.svg' alt='Email' className='w-[24px] h-[24px]' />
                  </Link>
                  <Link href='#' className='body-3  hover:text-gray-600'>
                    <Image width={100} height={100} src='/icons/linkedin.svg' alt='LinkedIn' className='w-[24px] h-[24px]' />
                  </Link>
                  <Link href='#' className='body-3  hover:text-gray-600'>
                    <Image width={100} height={100} src='/icons/insta.svg' alt='Instagram' className='w-[24px] h-[24px]' />
                  </Link>
                </div>
              
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer