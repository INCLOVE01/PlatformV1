'use client'

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export default function HomeCarousal(){
    const arr1 = ['couple-on-wheelchair-beach.jpg','girl-with-white-hat.jpg','couple-with-butterfly-eyes.jpg','goth-woman.jpg','woman-on-wheelchair-beige.jpg']
    

    return(
        <div className="w-full h-fit flex justify-center px-4">
            <Carousel className={'w-full h-fit py-2'} opts={{loop:true}} plugins={[AutoScroll({ active:true, stopOnInteraction:false})]}>
                <CarouselContent className={''}>
                    {arr1.map((item,key)=>(
                        <CarouselItem key={key} className={'md:basis-1/2 lg:basis-1/3'}>
                            <div className="w-full h-96 bg-slate-100 overflow-hidden" >
                                <Image src={`/images/${item}`} alt="pp" width={400} height={300} className="w-full h-full object-cover object-center" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}