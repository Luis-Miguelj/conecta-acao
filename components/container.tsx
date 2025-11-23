export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10 px-60 flex flex-col gap-6 max-xl:px-5 max-lg:px-8 max-md:py-6 max-md:px-4">
      {children}
    </div>
  )
}