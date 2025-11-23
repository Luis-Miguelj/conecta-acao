'use client'
import { Container } from '@/components/container';


import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Button } from '@/components/ui/button';
import { BackHome } from '@/components/back-home';
import Link from 'next/link';

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().min(3, 'Nome inválido'),
  password: z.string().min(6, 'Senha inválida'),
  phone: z.string().min(6, 'Senha inválida'),
})

type RegisterSchema = z.infer<typeof registerSchema>;
export default function Register() {

  const { register, handleSubmit } = useForm<RegisterSchema>(
    {
      resolver: zodResolver(registerSchema),
    }
  );


  const onSubmit = (data: any) => {
    console.log(data);
  }
  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-4 justify-center items-start w-full min-h-full'>


        <div className='flex flex-col justify-center items-center w-full md:w-1/2 min-h-full px-4 md:px-0'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-0'>Cadastre-se</h1>
          <div className='flex flex-col gap-4 md:gap-8 justify-center items-center w-full md:w-1/2 min-h-full mt-4 md:mt-0'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4 w-full md:w-auto min-h-96'>
              <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 w-full'>
                <div className='flex flex-col gap-2 w-full lg:w-auto'>
                  <label htmlFor='name' className='font-semibold text-base sm:text-lg'>Nome: <span className='text-red-500'>*</span></label>
                  <input type="text" placeholder='Nome' {...register('name')} className='w-full lg:w-96 rounded-md bg-quaternary border-2 border-tertiary p-2 outline-secondary duration-300' />
                </div>
                <div className='flex flex-col gap-2 w-full lg:w-auto'>
                  <label htmlFor='phone' className='font-semibold text-base sm:text-lg'>Telefone: <span className='text-red-500'>*</span></label>
                  <input type="text" placeholder='Telefone' {...register('phone')} className='w-full lg:w-96 rounded-md bg-quaternary border-2 border-tertiary p-2 outline-secondary duration-300' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 w-full'>
                <div className='flex flex-col gap-2 w-full lg:w-auto'>
                  <label htmlFor='email' className='font-semibold text-base sm:text-lg'>E-mail: <span className='text-red-500'>*</span></label>
                  <input type="email" placeholder='E-mail' {...register('email')} className='w-full lg:w-96 rounded-md bg-quaternary border-2 border-tertiary p-2 outline-secondary duration-300' />
                </div>
                <div className='flex flex-col gap-2 w-full lg:w-auto'>
                  <label htmlFor='confirm-password' className='font-semibold text-base sm:text-lg'>Senha: <span className='text-red-500'>*</span></label>
                  <input type="password" placeholder='Senha' {...register('password')} className='w-full lg:w-96 rounded-md bg-quaternary border-2 border-tertiary p-2 outline-secondary duration-300' />
                </div>
              </div>

              <Button type='submit' className='w-full lg:w-auto lg:min-w-96 cursor-pointer mt-2'>Cadastrar-se</Button>
              <Link href={'/'} className='hidden max-xl:flex text-primary text-sm hover:text-primary/80 transition-all duration-300 p-2.5'>Voltar para o início</Link>
            </form>
          </div>
        </div>
      </div>
      <BackHome />

    </Container>
  )
}