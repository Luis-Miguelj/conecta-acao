import Link from "next/link";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Menu as MenuHamburguer } from "lucide-react";

export function Menu() {
  return (
    <Menubar className="bg-transparent border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger id="trigger-menu">
          <MenuHamburguer className="text-white hover:text-primary" size={30} />
        </MenubarTrigger>
        <MenubarContent className="mx-5">
          <MenubarItem>
            <Link href="/auth/login" className="w-full text-primary py-1.5 px-2.5 bg-tertiary hover:bg-tertiary/80 rounded-md cursor-pointer transition-all duration-300">Login</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/auth/cadastro" className="w-full text-primary py-1.5 px-2.5 bg-tertiary hover:bg-tertiary/80 rounded-md cursor-pointer transition-all duration-300">Cadastro</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}