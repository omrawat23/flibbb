import Link from 'next/link';
import { Montserrat, Montserrat_Alternates } from 'next/font/google'  
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className='sticky z-[100] inset-x-0 top-0 transition-all flex items-center justify-center mt-[24px]'>
      <div className='w-full max-w-[1792px] px-8 flex items-center justify-between'>
        <div className='flex items-center space-x-16'>
          <Link href='/' className={montserrat.className}>
            <span className="relative text-6xl text-[#2d9f5a] font-bold ">Flib</span>
          </Link>
          <div className='flex space-x-16 '>
            <Link href='https://flibbb-store.vercel.app/' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Products
            </Link>
            <Link href='/api/company' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Company
            </Link>
            <Link href='https://flibbb-store.vercel.app/pages/catalogue' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Catalogue
            </Link>
            <Link href='/about' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              About Us
            </Link>
          </div>
        </div>

        <div className='flex items-center space-x-4 '>
          {user ? (
            <>
              <Link href='/api/auth/logout'
                className='px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-100'>
                Sign out
              </Link>
              <Link href='/configure/dash'
                className='px-4 py-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600'>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link href='/api/auth/login'
                className='px-4 py-2 border border-gray-300 rounded-md body-2 text-[#707070] hover:bg-gray-100'>
                Log in
              </Link>
              <Link href='/api/auth/register' className="px-4 py-2 text-white rounded-md body-2 p-[10px_24px] gap-10 bg-[#2C9F59]">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
