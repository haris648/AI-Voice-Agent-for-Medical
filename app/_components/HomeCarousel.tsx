
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HomeCarousel() {
  return (
    <Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">Slide 1</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">Slide 2</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}

export default HomeCarousel