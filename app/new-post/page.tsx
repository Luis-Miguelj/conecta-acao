'use client'
import { BackHome } from "@/components/back-home";
import { Container } from "@/components/container";
import Image from "next/image";

import { useState } from "react";
import { FormNewPost } from "./_components/form-new-post";
import { projetosSociais } from "@/services/items";

export default function NewPost() {
  const [imageSelect, setImageSelect] = useState<string>('')

  const images = projetosSociais.map(items => items.imageURL)


  return (
    <Container>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
        <BackHome />
        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5">
          <div className="h-[20em] md:h-[32em] flex justify-center items-center w-full rounded-md bg-tertiary cursor-pointer hover:bg-quaternary transition-all border border-tertiary">
            {
              imageSelect ? (
                <Image src={imageSelect} className="w-full h-full object-cover overflow-hidden rounded-md" alt="imagem" width={500} height={500} />
              ) : (
                <h1 className="text-2xl md:text-3xl font-extrabold">
                  +
                </h1>
              )
            }
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-5 flex-wrap w-full h-18 overflow-y-scroll scroll-smooth max-xl:h-full" id="images">
            {
              images.map((image, index) => (
                <button key={index} className="cursor-pointer p-1 md:p-1.5 bg-quaternary rounded-md" onClick={() => {
                  setImageSelect(image)
                }}>
                  <Image alt={index.toString()} src={image} width={40} height={40} className="h-10 w-full" />
                </button>
              ))
            }
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <FormNewPost />
        </div>
      </div>
    </Container>
  )
}