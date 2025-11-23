'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "./menu";

export function Header() {
  const pathname = usePathname();

  const isLoginPage = pathname === "/auth/login";
  const isRegisterPage = pathname === "/auth/cadastro";

  if (isLoginPage || isRegisterPage) {
    return (
      <header className="w-full flex items-center justify-center min-h-28 bg-secondary shadow text-primary">
        <div className="flex items-center justify-between w-full mx-20 max-xl:mx-5 max-md:mx-2">
          <h1 className="text-3xl max-xl:text-2xl max-md:text-xl font-semibold">ConectaAção</h1>
        </div>
        <div className="hidden max-xl:flex">

        </div>
      </header>
    )
  }


  return (
    <header className="w-full flex items-center justify-center min-h-28 bg-secondary shadow text-primary">
      <div className="flex items-center justify-between w-full mx-20 max-xl:gap-6 max-xl:mx-5">
        <h1 className="text-3xl max-xl:text-2xl font-semibold">ConectaAção</h1>
        <nav className="flex gap-6 max-xl:gap-3 max-xl:hidden">
          <Link href="/auth/login" className="py-1.5 px-2.5 bg-tertiary hover:bg-tertiary/80 rounded-md cursor-pointer transition-all duration-300">Login</Link>
          <Link href="/auth/cadastro" className="py-1.5 px-2.5 bg-tertiary hover:bg-tertiary/80 rounded-md cursor-pointer transition-all duration-300">Cadastro</Link>
        </nav>
        <nav className="hidden max-xl:flex bg-transparent">
          <Menu />
        </nav>
      </div>
    </header>
  )
}