'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export function FormNewPost() {
  return (
    <form className="flex flex-col gap-3 md:gap-4">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-sm md:text-base">Titulo da postagem:</span>
          <input type="text" className="w-full p-2 md:p-2.5 text-sm md:text-base rounded-md bg-quaternary outline-secondary border border-secondary" placeholder="Titulo" />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-sm md:text-base">Categoria:</span>
          <Select>
            <SelectTrigger className="bg-tertiary border border-secondary text-sm md:text-base" id="selects-categories">
              <SelectValue
                placeholder="Selecione uma categoria"
                className="text-primary"
              />
            </SelectTrigger>
            <SelectContent className="text-primary">
              <SelectItem
                value="1"
                id="select-items"
              >
                Meio ambiente
              </SelectItem>
              <SelectItem value="2" id="select-items">Educação</SelectItem>
              <SelectItem value="3" id="select-items">Humanitário</SelectItem>
              <SelectItem value="4" id="select-items">Saúde</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm md:text-base">Localização:</span>
          <input type="text" className="p-2 md:p-2.5 text-sm md:text-base w-full bg-quaternary rounded-md border border-secondary" placeholder="Localização" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm md:text-base">Descrição:</span>
          <textarea className="p-2 md:p-2.5 text-sm md:text-base w-full bg-quaternary rounded-md border border-secondary min-h-[100px] md:min-h-[120px]" placeholder="Descrição" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm md:text-base">Link para contato:</span>
          <input type="text" className="p-2 md:p-2.5 text-sm md:text-base w-full bg-quaternary rounded-md border border-secondary" placeholder="Link" />
        </div>
        <button className="bg-primary text-white p-2.5 md:p-3 text-sm md:text-base rounded-md border border-primary cursor-pointer transition-all w-full md:w-auto">
          Criar postegem
        </button>
        <Link href={'/'} className='hidden max-xl:flex max-xl:justify-center text-primary text-sm hover:text-primary/80 transition-all duration-300 p-2.5'>Voltar para o início</Link>

      </div>
    </form>
  )
}