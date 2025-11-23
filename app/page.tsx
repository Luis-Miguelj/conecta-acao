'use client'
import { useEffect, useState } from 'react'
import { LeftSideCardPost, RightSideCardPost } from "@/components/card-post";
import { Container } from "@/components/container";
import { Tab } from "@/components/tab";
import { projetosSociais } from "@/services/items";
import { CardPostMobile } from '@/components/card-post-mobile';
export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial state
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Tab />
      {isMobile ? (
        <>
          {projetosSociais.map((items, index) => (
            <CardPostMobile key={index} cidade={items.cidade} description={items.descricao} title={items.titulo} imageURL={items.imageURL} id={items.id.toString()} />
          ))}
        </>
      ) : (
        <>
          {projetosSociais.map((items, index) =>
            index % 2 === 0 ? (
              <LeftSideCardPost
                key={index}
                id={items.id.toString()}
                title={items.titulo}
                description={items.descricao}
                imageURL={items.imageURL}
                cidade={items.cidade}
              />
            ) : (
              <RightSideCardPost
                key={index}
                id={items.id.toString()}
                title={items.titulo}
                description={items.descricao}
                imageURL={items.imageURL}
                cidade={items.cidade}
              />
            ),
          )}
        </>
      )}
    </Container>
  );
}
