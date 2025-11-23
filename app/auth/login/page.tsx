'use client'
import { Container } from '@/components/container';
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BackHome } from '@/components/back-home';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha inválida'),
})

type LoginSchema = z.infer<typeof loginSchema>;
export default function Login() {

  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginSchema>(
    {
      resolver: zodResolver(loginSchema),
    }
  );


  const onSubmit = (data: any) => {
    console.log(data);
  }
  return (
    <Container>
      <button className='absolute top-36 left-32 max-xl:top-20 max-xl:left-5 max-md:relative max-md:top-0 max-md:left-0 max-md:mb-4 p-2 bg-tertiary rounded-md text-primary cursor-pointer hover:bg-quaternary transition-all max-xl:hidden' onClick={() => router.push('/')} >
        <ArrowBigLeft />
      </button>
      <div className='flex gap-4 justify-center items-start w-full h-full min-h-screen md:min-h-0'>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 h-full py-8 md:py-0'>
          <h1 className='text-3xl md:text-4xl font-bold mb-6 md:mb-0'>Login</h1>
          <div className='flex flex-col gap-6 justify-center items-center w-full md:w-1/2 h-full px-4 md:px-0'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4 w-full max-w-md md:h-96'>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='email' className='font-semibold text-base md:text-lg'>Email: <span className='text-red-500'>*</span></label>
                <input type="email" placeholder='Email' {...register('email')} className='w-full rounded-md bg-quaternary border-2 border-tertiary p-2 md:p-3 outline-secondary duration-300 text-sm md:text-base' />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='password' className='font-semibold text-base md:text-lg'>Senha: <span className='text-red-500'>*</span></label>
                <input type="password" placeholder='Senha' {...register('password')} className='w-full rounded-md bg-quaternary border-2 border-tertiary p-2 md:p-3 outline-secondary duration-300 text-sm md:text-base' />
              </div>

              <Button type='submit' className='w-full cursor-pointer mt-2'>Login</Button>

              <Link href="/auth/cadastro" className='text-sm text-primary hover:text-primary/80 transition-all duration-300 mt-2'>Cadastre-se</Link>
              <Link href={'/'} className='hidden max-xl:flex text-primary text-sm hover:text-primary/80 transition-all duration-300 p-2.5'>Voltar para o início</Link>
            </form>
          </div>

        </div>

      </div>
    </Container>
  )
}