import Image from "next/image"
import Link from "next/link"

interface CardProps {
  id: string
  title: string
  description: string
  imageURL: string
  cidade: string
}

export function LeftSideCardPost({ id, title, description, imageURL, cidade }: CardProps) {
  return (
    <div className="w-full h-80 bg-white border-b border-0.5 border-gray-200 flex gap-8 justify-between items-center">
      {imageURL ? (
        <Image src={`${imageURL}`} width={500} height={400} className="max-xl:w-72 h-72 overflow-hidden object-cover rounded-md" alt="Image" />
      ) : (
        <h1>
          Imagem indisponivel no momento.
        </h1>
      )}

      <div className="flex flex-col justify-between gap-2 w-2/4 h-72 max-xl:w-full max-xl:px-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2>{cidade}</h2>
          <p>{description}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Link href={`/details/${id}`} className="bg-primary text-white px-4 py-2 rounded-md">Ver mais</Link>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Curtir</button>
        </div>
      </div>
    </div>
  )
}

export function RightSideCardPost({ id, title, description, imageURL, cidade }: CardProps) {
  return (
    <div className="w-full h-80 bg-white border-b border-0.5 border-gray-200 flex gap-8 justify-between items-center">
      <div className="flex flex-col justify-between gap-2 w-2/4 h-72 max-xl:w-full max-xl:px-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2>{cidade}</h2>
          <p>{description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/details/${id}`} className="bg-primary text-white px-4 py-2 rounded-md">Ver mais</Link>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Curtir</button>
        </div>
      </div>
      {imageURL ? (
        <Image src={`${imageURL}`} width={500} height={400} className="max-xl:w-72 h-72 overflow-hidden object-cover rounded-md" alt="Image" />
      ) : (
        <h1>
          Imagem indisponivel no momento.
        </h1>
      )}

    </div >
  )
}