import { cn } from '../lib/utils'
import { HTMLAttributes } from 'react'
import Image from 'next/image'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <Image
        src='/why.gif'
        
        className='pointer-events-none z-50 select-none'
        alt='phone image'
        width={400}
        height={100}
      />

      <div className='absolute -z-10 inset-0'>
        {/* <Image
          className='object-cover min-w-full min-h-full'
          src='/why.gif'
          alt='overlaying phone image'
          width={100}
          height={100}
        /> */}
      </div>
    </div>
  )
}

export default Phone