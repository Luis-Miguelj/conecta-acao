import { BackHome } from '@/components/back-home'
import { Container } from '@/components/container'
import { projetosSociais } from '@/services/items'
import { Forward } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface DetailsProps {
  params: Promise<{ id: string }>
}

export default async function Details({ params }: DetailsProps) {

  const { id } = await params
  const items = projetosSociais.filter((item) => item.id.toString() === id)[0]

  return (
    <Container>
      <div className='flex gap-10 max-md:flex-col max-md:gap-6'>
        <div className='w-full max-md:w-full'>
          {items.imageURL ? (
            <Image
              src={`${items.imageURL}`}
              width={600}
              height={600}
              className="w-full h-auto max-md:w-full max-md:h-auto overflow-hidden object-cover rounded-md"
              alt="Image"
            />
          ) : (
            <h1 className='text-sm max-md:text-xs'>
              Imagem indisponivel no momento.
            </h1>
          )}
        </div>
        <div className='flex flex-col justify-between w-full h-[32em] max-md:h-auto max-md:gap-6'>
          <div className='flex flex-col gap-6 max-md:gap-4'>
            <h1 className='text-5xl font-bold max-md:text-3xl max-md:leading-tight'>{items.titulo}</h1>
            <h2 className='text-2xl font-medium max-md:text-lg'>{items.cidade}</h2>
            <p className='text-lg max-md:text-base max-md:leading-relaxed'>{items.descricao}</p>
          </div>
          <div className='flex justify-end items-center gap-4 max-md:flex-col max-md:w-full max-md:gap-3'>
            <Link
              className='p-2 bg-primary rounded-md transition-all text-white max-md:w-full max-md:text-center max-md:px-4 max-md:py-3 hover:opacity-90'
              href="https://www.figma.com/design/s6wIGhRRHlKirWdH88Yyjj/prototipo-team-library?node-id=0-1&p=f&t=QZrfS08lG8yw7gOf-0"
            >
              Acesse o link para participar!
            </Link>

            <button className='p-2 text-white cursor-pointer bg-primary rounded-md transition-all max-md:w-full max-md:flex max-md:justify-center max-md:items-center max-md:py-3 hover:opacity-90'>
              <Forward />
            </button>
            <Link href={'/'} className='hidden max-xl:flex max-xl:justify-center text-primary text-sm hover:text-primary/80 transition-all duration-300 p-2.5'>Voltar para o início</Link>

          </div>
        </div>
      </div>
      <BackHome />
    </Container>
  )
}