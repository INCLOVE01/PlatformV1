'use client'

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { IdVerifiedFreeIcons } from "@hugeicons/core-free-icons"

export default function MatchCardAnimation (){

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const { scrollYProgress } = useScroll()
    const rotate1 = useTransform(scrollYProgress,[0,0.4], [-10,10])
    const inView1 = useInView(ref1,{amount:0, once:true})
    const rotate2 = useTransform(scrollYProgress,[0,0.4], [10,-10])
    const inView2 = useInView(ref2,{amount:0, once:true})
    const inview3 = useInView(ref3, {amount:0.9, once:true})

    return(
        <>         
        <div ref={ref3} className={`relative w-full h-fit flex justify-center md:max-w-7xl p-4`}>
          <div className="absolute -z-10 top-0 translate-y-1/2 w-full h-1/2 rounded-4xl bg-red-200 md:w-[90%] lg:w-[70%]">      </div>

          <div className="relative w-full h-[calc(max-content+100rem)] flex items-center justify-center gap-2 px-2 py-8 md:w-fit">

            <div className={`absolute z-10 top-0 left-0 w-max h-max rounded-full overflow-hidden md:top-1/2 md:-left-1/10 ${inview3 ? 'popup delay-200' : 'opacity-0'}`}>
              <Commons className={''} title="Spotify" support="songs" no="3" src={"https://img.icons8.com/color/48/spotify--v1.png"} alt={"spotify--v1"}/>
            </div>
            <div className={`absolute z-10 top-1/3 right-1/4 w-max h-max rounded-full overflow-hidden md:right-[-10%] ${inview3 ? 'popup delay-220' : 'opacity-0'}`}>
              <Commons className={''} title="Netflix" support="shows" no="2" src={"https://img.icons8.com/color/48/netflix-desktop-app--v1.png"} alt={"netflix-desktop-app--v1"}/>          
            </div>
            <div className={`absolute z-10 bottom-2 left-1/2 -translate-x-1/2 w-max h-max rounded-full overflow-hidden ${inview3 ? 'popup delay-270' : 'opacity-0'}`}>
              <Commons className={''} title="Place" support="place" no="1" src={"https://img.icons8.com/color/48/beach.png"} alt={"place"} />
            </div>

            {/* first card */}
            <motion.div ref={ref2} style={{ rotate: inView2 ? rotate2 : '0deg' }} transition={{ease:'easeInOut'}} className={`relative w-xs aspect-2/3 bg-red-100  rounded-3xl overflow-hidden border outline-2 outline-slate-200 shadow-md md:outline-4 ${inview3 ? 'card-left' : ''}`}>
              <Image src={'/images/women-with-prosthetic-arm-portrait.jpg'} alt="img" width={300} height={300} className="w-full h-full object-cover object-top"/> 
              <div className="absolute z-10 bottom-0 left-0 w-full h-fit py-3 px-3 text-white backdrop-brightness-90 flex flex-col text-sm md:text-xl sm:px-6 sm:py-4">
                <div className="flex items-end gap-2">
                  <span className="font-medium flex items-center gap-2 ">Irene Jae,</span>
                  <span className=" ">21</span>
                  <HugeiconsIcon icon={IdVerifiedFreeIcons} fill="#7AA4FF"/>
                </div>
                <span>3.5km away</span>
                <span>6 common interests</span>
              
              </div> 
            </motion.div>

            {/* second card */}
            <motion.div ref={ref1} style={{ rotate: inView1 ? rotate1 : '0deg' }} transition={{ease:'easeInOut'}} className={`relative w-xs aspect-2/3 bg-slate-100 rounded-3xl overflow-hidden border outline-2 outline-slate-200 shadow-md md:outline-4 ${inview3 ? 'card-right' : ''}`}>
              <Image src={'/images/man-smiling.jpg'} alt="img" width={300} height={300} className="w-full h-full object-cover object-top "/> 
              <div className="absolute z-10 bottom-0 left-0 w-full h-fit py-3 px-3 text-white backdrop-brightness-90 flex flex-col text-sm md:text-xl sm:px-6 sm:py-4">
                <div className="flex items-end gap-2">
                  <span className=" font-medium flex items-center gap-2 md:">Tom Harvey,</span>
                  <span className=" ">26</span>
                  <HugeiconsIcon icon={IdVerifiedFreeIcons} fill="#7AA4FF"/>
                </div>
                <span>3.5km away</span>
                <span>6 common interests</span>              
              </div>          
            </motion.div>

            <div className={`absolute z-10 right-3 top-2 w-8 p-1 aspect-square rounded-full bg-slate-50 shadow-sm border md:w-11 ${inview3 ? 'popup delay-700' : 'opacity-0'}`}>
              <img width="32" height="32" src="https://img.icons8.com/retro/32/cafe.png" alt="cafe" className="w-full h-full"/>
            </div>
            <div className={`absolute z-10 left-3 bottom-2 w-8 p-1 aspect-square rounded-full bg-slate-50 shadow-sm border md:w-11 md:bottom-5 ${inview3 ? 'popup' : 'opacity-0'}`}>
              <img width="40" height="40" src="https://img.icons8.com/office/40/controller.png" alt="controller"/>            
            </div>

          </div>
        </div>

        </>
    )
}


const Commons = ({className, title='title', no='2', support='places', src, alt}:{className : string, title : string, no : string, support : string, src:string, alt : string})=>{
  return(
    <>
      <div className={cn(`w-fit h-fit flex items-center justify-start gap-2 border border-slate-200 shadow-inner rounded-full bg-white py-1 pl-1.5 pr-2.5 overflow-hidden`, className)}>
        <div className="w-8 aspect-square rounded-full overflow-hidden">
          <img width="48" height="48" src={src} alt={alt} className="w-full h-full object-cover"/>
        </div>
        <div className="w-fit h-fit flex flex-col gap-0.5 pr-2 ">
          <span className="font-semibold text-xs">{title}</span>
          <p className="w-full h-fit text-xs line-clamp-1 text-orange-300">{no} common {support}</p>
        </div>
      </div>
    </>
  )
}