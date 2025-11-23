'use client'
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { projetosSociais } from '@/services/items'

export function Tab() {

  const cidade = projetosSociais.map(items => items.cidade)


  return (
    <div className="w-full min-h-10 h-auto flex items-center justify-between gap-2 flex-col sm:flex-row sm:h-10">
      <div className="flex flex-col sm:flex-row gap-2 text-primary w-full sm:w-auto">
        <Link href={'/new-post'} className="hidden bg-tertiary text-primary hover:bg-tertiary/80 p-2.5 rounded-md cursor-pointer transition-all duration-300 w-full sm:w-auto text-center max-xl:flex max-xl:justify-center">
          Nova Postagem
        </Link>
        <Select>
          <SelectTrigger className="bg-tertiary border-quaternary placeholder: w-full sm:w-auto" id="selects-categories">
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
        <Select>
          <SelectTrigger className="bg-terciary border-quaternary placeholder: w-full sm:w-auto" id="selects-categories">
            <SelectValue
              placeholder="Selecione uma cidade"
              className="text-primary"
            />
          </SelectTrigger>
          <SelectContent className="text-primary h-52 max-h-[60vh] sm:max-h-none">
            {cidade.map((cidade, index) => (
              <SelectItem key={index} value={index.toString()}>{cidade}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Link href={'/new-post'} className="bg-tertiary text-primary hover:bg-tertiary/80 p-2.5 rounded-md cursor-pointer transition-all duration-300 w-full sm:w-auto text-center max-xl:hidden">
        Nova Postagem
      </Link>
    </div>
  );
}
