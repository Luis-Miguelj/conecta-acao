import Image from "next/image"
import Link from "next/link"

interface CardProps {
  id: string
  title: string
  description: string
  imageURL: string
  cidade: string
}
export function CardPostMobile({ id, title, description, imageURL, cidade }: CardProps) {
  return (
    <div className="w-full h-80 bg-white border-b border-0.5 border-gray-200 flex gap-8 justify-between items-center max-xl:flex-col max-xl:h-full max-md:gap-4 max-md:h-auto max-md:py-4">
      {imageURL ? (
        <Image
          src={`${imageURL}`}
          width={500}
          height={400}
          className="max-xl:w-72 h-72 max-md:w-full max-md:h-64 max-md:max-w-sm max-md:mx-auto overflow-hidden object-cover rounded-md"
          alt="Image"
        />
      ) : (
        <h1 className="text-sm max-md:text-xs">
          Imagem indisponivel no momento.
        </h1>
      )}

      <div className="flex flex-col justify-between gap-2 w-2/4 h-72 max-xl:w-full max-xl:px-10 max-md:px-4 max-md:h-auto max-md:gap-3">
        <div className="flex flex-col gap-2 max-md:gap-1.5">
          <h1 className="text-2xl font-bold max-md:text-xl max-md:leading-tight">{title}</h1>
          <h2 className="max-md:text-sm text-gray-600">{cidade}</h2>
          <p className="max-md:text-sm max-md:line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-end gap-2 max-md:justify-end max-md:flex-wrap max-md:gap-2">
          <Link
            href={`/details/${id}`}
            className="bg-primary text-white px-4 py-2 rounded-md max-md:px-3 max-md:py-1.5 max-md:text-sm hover:opacity-90 transition-opacity"
          >
            Ver mais
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded-md max-md:px-3 max-md:py-1.5 max-md:text-sm hover:opacity-90 transition-opacity">
            Curtir
          </button>
        </div>
      </div>
    </div>
  )
}