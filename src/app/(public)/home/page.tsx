
import React from "react";
import Image from "next/image";
import HomeCarousal from "./components/carousal";
import { Button } from "@/components/ui/button";
import {  ArrowUpRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import MatchCardAnimation from "./components/matchCard";
import WaitlistForm from "@/components/forms/waitlist";

export default function Page(){
    return(
        <>
        <main className="w-full h-max flex flex-col gap-8">
            <section id="hero" className="w-full h-max">
                <div>
                    <div className="relative w-full h-screen bg-white">
                        <div className="absolute top-16 left-0 z-10 bg-white/30 backdrop-blur-2xl p-4 mt-8 w-full h-max  flex flex-col items-center justify-center gap-8 sm:gap-12 sm:p-8 md:gap-16">
                            <div className="w-full flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
                                <h1 className="text-3xl font-bold text-start sm:text-center md:text-4xl lg:text-5xl">Discover, Chat, Meet & Find Your Spark</h1>
                                <p className="max-w-2xl text-start text-sm font-semibold leading-5 md:text-lg md:leading-7 sm:text-center">Authentic Connections, Safe and Open for Everyone. Here, your true self is valued and protected—join a community built on trust, respect, and genuine connection</p>
                            </div>
                            <div className="w-full max-w-xl h-max ">                    
                                <WaitlistForm/>
                            </div>
                        </div>
                        <div className="relative w-full h-full p-0 md:grid md:grid-cols-3 md:grid-rows-1">
                            <Image src={'https://images.pexels.com/photos/3436830/pexels-photo-3436830.jpeg'} loading="lazy" alt="face" width={500} height={500}  className={`md:col-span-1 md:row-span-1 object-cover w-full h-full`}/>
                            <Image src={'https://images.pexels.com/photos/3978578/pexels-photo-3978578.jpeg'} loading="lazy" alt="face" width={500} height={500}  className={`md:col-span-1 md:row-span-1 object-cover w-full h-full hidden md:flex`}/>
                            <Image src={'https://images.pexels.com/photos/6760915/pexels-photo-6760915.jpeg'} loading="lazy" alt="face" width={500} height={500}  className={`md:col-span-1 md:row-span-1 object-cover w-full h-full hidden md:flex`}/>

                        </div>       
                        
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="w-full h-fit px-4 mt-20 md:mt-30">
                    <p className="w-full max-w-4xl text-2xl text-start px-4 md:text-4xl">Inclove is a platform where you can meet and match without barriers or stereotypes, backed by cutting-edge security and privacy features, for people who want to go beyond their social circle & connect with people far and near..</p>
                </div>
            </section>

            <section className="py-8">
                <div className="w-full h-fit flex flex-col items-center">
                    <div className="w-full max-w-4xl h-fit flex flex-col gap-2 px-4">
                        <div className="w-fit h-fit px-2 py-1 rounded-full bg-red-100 text-red-500 font-medium flex items-center gap-2"> 
                        <div className="relative w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                        <span>Smart Match Feed</span>
                        </div>
                        <p className="py-2 font-medium text-lg sm:text-2xl md:text-3xl">Personalised feed based on your lifestyle & preferences. Get matched with people for who they are!</p>
                    </div>
                    <div className="w-full h-fit flex justify-center items-center mt-10 sm:mt-20 ">
                        <MatchCardAnimation/>
                    </div>
                </div>
            </section>

            <section>
                    <div className="w-full h-fit flex flex-col gap-10 items-center">
                        <div className="w-full max-w-4xl h-fit flex flex-col gap-2 px-4">
                            <div className="w-fit h-fit px-2 py-1 rounded-full bg-blue-100 text-blue-500 font-medium flex items-center gap-2"> 
                            <div className="relative w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            <span>Built For Everyone</span>
                            </div>
                            <p className="py-2 font-medium text-lg sm:text-2xl md:text-3xl">
                            Find real connections without filters, labels, or masks. Our platform is designed to be a safe, inclusive space where everyone can match and meet authentically—where your identity, choices, and voice are respected.
                            </p>
                        </div>
                        
                        <div className="w-full h-fit my-10">
                            <HomeCarousal/>
                        </div>
                        
                        <p className=" w-full max-w-4xl px-4 md:text-xl">
                            We believe that everyone deserves a place to connect without fear of judgment, stereotype, or exploitation. That’s why we’ve built a platform with trust and safety at its core—combining modern security features to protect against misuse with an open, inclusive environment that celebrates diversity. Whether you’re here to find friends, explore relationships, or simply meet new people, this is the space where you can be yourself and belong
                        </p>
                    </div>


            </section>

            <section className="py-8">
                <div className="w-full h-fit flex flex-col items-center gap-5">
                    <div className="w-full max-w-4xl h-fit flex flex-col gap-2 px-4">
                        <div className="w-fit h-fit px-2 py-1 rounded-full bg-yellow-100 text-yellow-500 font-medium flex items-center gap-2"> 
                        <div className="relative w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                        <span>Safe & Secure</span>
                        </div>
                    </div>          
                    <p className="py-2 px-4 text-lg font-medium max-w-4xl sm:text-2xl md:text-3xl">
                        Meet confidently, connect securely. Our platform uses the latest verification, privacy, and AI-driven safety technology—so you can focus on authentic relationships while we keep your experience safe.
                    </p>

                    {/* bento */}
                    <div className="w-full max-w-5xl bg-slate-100 grid grid-flow-row-dense grid-cols-2 auto-rows-[4rem] gap-2 rounded-xl p-4 mt-10 md:mt-16 md:grid-cols-4 md:gap-4">

                        <div className="relative w-full h-full col-span-2 row-span-5 flex flex-col items-center pb-6 bg-[#9DBFFF] rounded-md overflow-hidden md:col-span-2 md:row-span-6">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-xs h-72 m-auto rounded-xl outline-4 outline-white/80 overflow-hidden shadow-2xl md:h-96">
                            <Image src={'/images/pp1.jpg'} alt="img" width={300} height={300} className="w-full h-full object-cover"/>
                            <div className="absolute bottom-0 left-0 w-full h-fit bg-white/10 backdrop-blur-2xs text-white  px-4 py-4">
                            <span className="text-xl font-bold flex items-center gap-2 ">Emma Johan, 24 
                                {/* <VerifiedIcon/> */}
                            </span>
                            <span>Chicago</span>
                            <Button className={'w-full mt-2 bg-[#a53860] text-white'}>View Profile</Button>
                            </div>
                        </div>
                        <div className="mt-auto text-2xl font-bold text-neutral-800 md:text-3xl px-4">
                            <span>Real & Verified Profiles Only</span>
                        </div>
                        </div>


                        <div className="col-span-2 row-span-3 bg-white border rounded-md p-4">
                        <div>
                            <span className="text-lg font-semibold">Location Sharing Controls</span>
                            <p className="text-sm">Choose if/when to share precise location data—and only with specific matches or trusted contacts</p>
                        </div>
                        <div>
                            <Image alt="location" width={200} height={100} src="https://www.shutterstock.com/shutterstock/photos/2254949983/display_1500/stock-vector-a-continuous-one-line-drawing-of-a-google-map-view-in-an-urban-area-route-directions-and-locations-2254949983.jpg"/>
                        </div>
                        </div>

                        <div className="w-full h-full col-span-1 row-span-3 bg-[#bde0fe] border flex flex-col items-start justify-start gap-1 p-3 flex-wrap rounded-lg sm:col-span-1">
                        <Image src="https://img.icons8.com/office/50/accessibility2.png" alt="accessible" width={32} height={32}/>
                        <span className="text text-base font-medium sm:text-lg">Accessibility Suite</span>
                        <p className="text-sm md:text-base">We have incorporated extensible list of tools for easy navigation, so nothing can stop you. </p>
                        </div>

                        <div className="col-span-1 row-span-3 w-full h-full flex flex-col rounded-md p-3 bg-white border overflow-hidden">
                        <span className="text-lg font-semibold">E2E encryption</span>
                        <p className="text-sm">Private conversations protected with End-to-End encryption. </p>
                        <div className="w-[50%] aspect-square ml-auto">
                            <video autoPlay muted loop width="100%" poster="video-thumbnail.jpg">
                            <source src="/asset/comments.mp4" type="video/mp4" />
                            </video>
                        </div>
                        </div>

                        <div className="row-span-3 col-span-1 w-full h-full flex flex-col gap-2 items-start p-3 bg-[#7678ed]/30 rounded-md">
                        <Image src="https://img.icons8.com/deco-color/48/shield.png" alt="safety" width={32} height={32}/>
                        <span className="text-lg font-semibold">Safety Center Access</span>
                        <p className="text-sm md:text-base">You’re always in control, share your data when and whom you want for your total security</p>
                        </div>

                        <div className="row-span-3 col-span-1 bg-white border rounded-md overflow-hidden md:col-span-2">
                        <div className="w-full h-full flex flex-col p-4">
                            <Image src="https://img.icons8.com/fluency/48/bard.png" alt="ai" width={32} height={32}/>
                            <p className="text text-base font-medium sm:text-lg">AI Content Safety</p>
                            <p className="text-sm md:text-base">Automated monitoring to detect, prevent, and flag abusive language, scams, and inappropriate content for proactive protection.</p>
                        </div>
                        </div>
                        <div className="hidden md:flex row-span-3 col-span-1 rounded-md border bg-yellow-200">

                        </div>

                    </div>
                
                </div>
            </section>

            <section className="py-8">
                <div className="w-full h-fit flex flex-col items-center">
                    <div className="w-full max-w-4xl h-fit flex flex-col gap-2 px-4">
                        <div className="w-fit h-fit px-2 py-1 rounded-full bg-orange-100 text-orange-500 font-medium flex items-center gap-2"> 
                        <div className="relative w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                        <span>Vibing Community</span>
                        </div>
                        <p className="py-2 font-medium sm:text-2xl md:text-3xl ">Connect. Share. Belong. Join our vibrant community where meaningful conversations spark lasting connections</p>
                    </div>
                    <div className="w-full h-fit flex justify-end overflow-hidden mt-5 sm:mt-8 md:mt-12 lg:mt-16">
                        <div className="relative w-sm aspect-[4/5] border-2 rounded-xl bg-slate-100 translate-x-1/4 shadow-md sm:translate-x-1/6 sm:w-sm md:aspect-[3/2] md:w-[60%] overflow-hidden">
                            <Image src={'/images/c1.webp'} alt="img" width={700} height={700} className="w-full h-full object-cover"/>
                            <div className="absolute z-20 left-1/2 top-1/2 -translate-1/2 w-fit h-fit flex flex-col gap-3">
                            <span className="text-2xl font-bold ">Millenialz_Dating</span>
                            <Button>Join community <HugeiconsIcon icon={ArrowUpRight01FreeIcons}/></Button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
        </>
    )
}