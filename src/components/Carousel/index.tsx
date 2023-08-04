import { useEffect, useRef } from 'react'
import * as S from './styles'

interface CarouselProps {
  items: React.ReactNode[]
}

const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const interval = setInterval(() => {
      if (carousel) {
        carousel.scrollLeft += carousel.offsetWidth
      }
    }, 3000)

    const handleScroll = () => {
      if (carousel) {
        const lastItem = carousel.lastElementChild as HTMLDivElement
        if (lastItem) {
          const slideWidth = carousel.offsetWidth
          if (
            carousel.scrollLeft + carousel.offsetWidth >=
            lastItem.offsetLeft + slideWidth
          ) {
            carousel.scrollLeft -= lastItem.offsetLeft
          }
        }
      }
    }

    carousel?.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(interval)
      carousel?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.CarouselContainer ref={carouselRef}>
      {items?.map((item, index) => (
        <S.CarouselItem key={index}>{item}</S.CarouselItem>
      ))}
    </S.CarouselContainer>
  )
}

export default Carousel
