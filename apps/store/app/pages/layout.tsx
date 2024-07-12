import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { ReactNode } from 'react'
import Navbar from '../../components/Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
     <Navbar/>
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout