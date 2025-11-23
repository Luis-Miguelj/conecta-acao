'use client'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'

export function BackHome() {
  const router = useRouter();

  return (
    <button className='absolute top-36 left-32 max-xl:top-20 max-xl:left-5 max-md:relative max-md:top-0 max-md:left-0 max-md:mb-4 p-2 bg-tertiary rounded-md text-primary cursor-pointer hover:bg-quaternary transition-all max-xl:hidden' onClick={() => router.push('/')} >
      <ArrowBigLeft className='max-xl:hidden' />
    </button>
  )
}