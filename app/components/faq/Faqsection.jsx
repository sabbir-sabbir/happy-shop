'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faqsection = () => {
  return (
   <>
   <div className='w-full h-auto py-4 px-12 flex items-center justify-center  mt-24 bg-gradient-to-tl from-[#fefae0] via-[#c7f9cc]/25 to-[#f7e1d7]/15 '>
   <Accordion type="single" collapsible  defaultValue="item-2"  className="w-full max-w-2xl mx-auto bg-white ">
  <AccordionItem value="item-1" className="px-3">
    <AccordionTrigger className="text-lg font-poppins text-zinc-600">It is a long established fact that a reader will be distracted </AccordionTrigger>
    <AccordionContent className="font-poppins text-[14px] text-zinc-500">
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className="px-3">
    <AccordionTrigger className="text-lg font-poppins text-zinc-600" >using Lorem Ipsum is that it has a more-or-less normal distribution</AccordionTrigger>
    <AccordionContent className="font-poppins text-[14px] text-zinc-500">
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" className="px-3">
    <AccordionTrigger className="text-lg font-poppins text-zinc-600" >There are many variations of passages of Lorem Ipsum available</AccordionTrigger>
    <AccordionContent className="font-poppins text-[14px] text-zinc-500">
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4" className="px-3">
    <AccordionTrigger className="text-lg font-poppins text-zinc-600">Contrary to popular belief, Lorem Ipsum is not simply random text</AccordionTrigger>
    <AccordionContent className="font-poppins text-[14px] text-zinc-500">
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5" className="px-3">
    <AccordionTrigger className="text-lg font-poppins text-zinc-600">The standard chunk of Lorem Ipsum used since the 1500s </AccordionTrigger>
    <AccordionContent className="font-poppins text-[14px] text-zinc-500">
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

   </div>
   </>
  )
}

export default Faqsection