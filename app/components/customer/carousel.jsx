'use client'
import React from 'react'
import CustomerData from './CustomerData'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const CarouselSlide = () => {
  return (
    <Carousel
    opts={{
      align: "center",
    }}
    className="w-full max-w-lg"
  >
    <CarouselContent>
      {CustomerData.map((item , index)=> (
        <CarouselItem key={index}>
          <div className=''>
         <Card>
         <CardContent><img className='w-12 h-12' src={item.icon} alt={item.name} /></CardContent>
         <CardContent><h2>{item.name}</h2></CardContent>
         <CardContent><h2>{item.title}</h2></CardContent>
         <CardContent><h2>{item.description}</h2></CardContent>
         <CardContent><img className="w-8 h-8" src={item.rateing} alt={item.title} /></CardContent>
         </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default CarouselSlide