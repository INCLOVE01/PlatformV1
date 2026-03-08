import React from "react";
import Image from "next/image";
import Useicon from "@/components/UseIcon";
import { Accessibility, ArrowRight, Eye, Heart, Lock, MessageCircle, Quote, Shield, Sparkles, Star, UserCheck, Users, Volume2 } from "@hugeicons/core-free-icons";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page(){

      const values = [
    {
      icon: Heart,
      title: "Inclusive by Design",
      description: "We believe love is universal. Our platform is built from the ground up to be accessible, welcoming, and empowering for people of all abilities.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Users,
      title: "Genuine Connections",
      description: "Beyond swiping, we foster meaningful relationships through authentic profiles, thoughtful matching, and a community that celebrates diversity.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Safe & Respectful",
      description: "Your safety and dignity matter. We maintain a zero-tolerance policy for discrimination and provide tools to ensure a respectful environment.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Sparkles,
      title: "Breaking Barriers",
      description: "We challenge stigmas and break down the barriers that have kept people with disabilities from accessing mainstream dating platforms.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

    const features = [
    {
      icon: Accessibility,
      title: "Accessibility First",
      description: "Screen reader optimized, keyboard navigation, adjustable text sizes, and high contrast modes built in from day one."
    },
    {
      icon: UserCheck,
      title: "Verified Profiles",
      description: "Optional verification system to help build trust while respecting privacy and individual comfort levels."
    },
    {
      icon: MessageCircle,
      title: "Thoughtful Matching",
      description: "Go beyond photos. Share your interests, values, and what makes you unique to find compatible connections."
    },
    {
      icon: Lock,
      title: "Privacy Controls",
      description: "You decide what to share and when. Full control over your profile visibility and personal information."
    },
    {
      icon: Volume2,
      title: "Multiple Communication",
      description: "Text, voice messages, video calls—communicate in the way that works best for you."
    },
    {
      icon: Eye,
      title: "Anti-Discrimination",
      description: "Active moderation and reporting tools ensure a respectful community where everyone feels safe."
    }
  ];

    const testimonials = [
    {
      name: "Sarah M.",
      quote: "For the first time, I felt like a dating app was actually made for me. InClove understands that accessibility isn't an afterthought—it's essential.",
      rating: 5
    },
    {
      name: "James K.",
      quote: "I met my partner on InClove after years of feeling invisible on other platforms. This community gets it. People here see beyond disability.",
      rating: 5
    },
    {
      name: "Priya R.",
      quote: "The respect and authenticity on InClove is refreshing. I've made genuine friendships and found people who truly understand my journey.",
      rating: 5
    }
  ];

    return(
        <>
            <section id="section1" className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                    src="https://images.unsplash.com/photo-1666213302169-741d8a9597db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY291cGxlcyUyMGxvdmV8ZW58MXx8fHwxNzYxNDk4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Diverse couples in love"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/60 to-purple-900/80" />
                </div>
                
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 border-2 border-white/20">
                    <Useicon icon={Heart} className="w-10 h-10 text-pink-300 fill-pink-300" />
                    </div>
                    <h1 className="mb-6">Love Knows No Limits</h1>
                    <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                    InClove is redefining dating by creating a space where everyone—regardless of ability—can find genuine connection, companionship, and love.
                    </p>
                    <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
                    Because everyone deserves to be loved for who they are.
                    </p>
                </div>
            </section>

            <section id="values-mission" className="py-24 px-6 bg-gradient-to-b from-white via-purple-50/30 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="mb-4">Our Mission & Values</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        InClove was created to fill a gap in the dating world—a platform that truly understands 
                        and celebrates the diversity of human experience and ability.
                    </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-8 pb-6 text-center">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${value.color} mb-6`}>
                            <Useicon icon={value.icon} className="w-8 h-8" />
                            </div>
                            <h3 className="mb-3">{value.title}</h3>
                            <p className="text-gray-600">
                            {value.description}
                            </p>
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </section>

            <section id="story" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                        Our Story
                        </div>
                        <h2 className="mb-6">Why InClove Exists</h2>
                        <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Dating apps have revolutionized how people meet and connect, but they&apos;ve 
                            left millions behind. People with disabilities face unique challenges—from 
                            inaccessible interfaces to discrimination and stigma on mainstream platforms.
                        </p>
                        <p>
                            InClove was born from a simple realization: everyone deserves the opportunity 
                            to find love, companionship, and meaningful connection. We&apos;re not just another 
                            dating app—we&apos;e a community built on understanding, respect, and celebration 
                            of diversity.
                        </p>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                            <Useicon icon={Quote} className="w-8 h-8 text-purple-500 mb-3" />
                            <p className="text-gray-800 italic">
                            &quot;We believe that disability doesn&apos;t define a person&apos;s capacity to love or 
                            be loved. InClove creates a space where authenticity is celebrated and 
                            connections are built on who you truly are.&quot;
                            </p>
                        </div>
                        <p>
                            Today, we&apos;re proud to serve a growing community of people who are finding 
                            friendship, romance, and genuine human connection in a space designed with 
                            their needs at the forefront.
                        </p>
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <Image
                        src="https://images.unsplash.com/photo-1553989577-14e950184619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjBjb21tdW5pdHklMjBwZW9wbGV8ZW58MXx8fHwxNzYxNDk4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Inclusive community"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                        width={400}
                        height={400}
                        />
                        <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-xl text-white">
                            <div className="mb-2">10,000+</div>
                            <p className="text-white/90">Active Members</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-xl text-white">
                            <div className="mb-2">2,500+</div>
                            <p className="text-white/90">Connections Made</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="mb-4">Built Different, Built Better</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Every feature is designed with accessibility, safety, and genuine connection in mind.
                    </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <Useicon icon={feature.icon} className="w-6 h-6" />
                            </div>
                            <div>
                            <h4 className="mb-2">{feature.title}</h4>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <section id="review" className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="mb-4 text-white">Stories From Our Community</h2>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto">
                        Real connections, real stories, real love.
                    </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                        <CardContent className="pt-8 pb-6">
                            <Useicon icon={Quote} className="w-10 h-10 text-pink-300 mb-4" />
                            <p className="text-white/95 mb-6 text-lg leading-relaxed">
                            &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Useicon icon={Star} key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            </div>
                            <p className="text-white/80">— {testimonial.name}</p>
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </section>

                <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1736615494551-234dde339853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhhbmRzJTIwbG92ZXxlbnwxfHx8fDE3NjE0MDU1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Love and connection"
          className="w-full h-full object-cover"
          width={400} height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/85 to-purple-900/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <Useicon icon={Heart} className="w-16 h-16 mx-auto mb-6 text-pink-300 fill-pink-300" />
        <h2 className="mb-6 text-white">Your Journey Starts Here</h2>
        <p className="text-xl text-white/95 mb-4 max-w-2xl mx-auto leading-relaxed">
          Join a community where you&apos;re celebrated for who you are.
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Find friendship, romance, and genuine human connection in a space designed 
          with accessibility, respect, and inclusivity at its core.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={'/home'} 
            
            className="bg-white text-rose-600 flex items-center px-2 py-1 rounded-md hover:bg-gray-100 gap-2 shadow-xl hover:shadow-2xl transition-all"
          >
            Join InClove <Useicon icon={ArrowRight} className="w-5 h-5" />
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 gap-2"
          >
            Learn More
          </Button>
        </div>
        <p className="text-white/70 mt-8 text-sm">
          Free to join • Safe & Inclusive • 10,000+ Members
        </p>
      </div>
    </section>

        </>
    )
}