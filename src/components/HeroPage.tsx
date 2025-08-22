'use client'

import React from 'react'
import Image from 'next/image'
import { Vortex } from './ui/vortex'
import { AnimatedText } from './AnimatedText';
import { Button } from './Button';
import Link from 'next/link'

// Local imports


export const HeroPage = () => {
  const headerStyle = "text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8"
  const sectionStyle = "relative z-10 text-lg md:text-7xl bg-clip-text justify-center text-black font-sans font-bold"

  return (
    <>
      {/* About Me */}
      <section>
        <div className="w-full mx-auto rounded-md overflow-hidden">
          {/* About Me Section */}
              <main className="pt-24 relative">

                <Vortex
                  className="flex items-center flex-col justify-center text-center px-2 md:px-10 py-4 h-screen relative mx-auto w-max"
                > 
                      {/* Hero Section */}
                      <section className="flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                        <div className="space-y-6 relative">
                          <div className="relative inline-block">
                            <AnimatedText text="Meghana Rao Nadendla" className='text-xl md:text-2xl text-gray-600 font-light'/>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] text-transparent bg-clip-text m-5 p-5">
                              Healing, Innovation, and Impact
                            </h1>
                          </div>
                          
                          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Clinical Pharmacist
                            </span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">|</span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Psychologist
                            </span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">|</span>{" "}
                            <span className="inline-block animate-slideUpAndFade animation-delay-2000">
                              Social Entrepreneur
                            </span>
                          </h2>
                          
                          <div className="flex gap-4 flex-col sm:flex-row justify-center pt-8 animate-slideUpAndFade animation-delay-4000">
                            <Button href="/about" className="relative overflow-hidden group">
                              <span className="relative z-10">View My Work</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Button>
                          </div>
                        </div>
                      </section>
                </Vortex>
                </main>
        </div>
      </section>

      {/* Hero Section with Image and Header */}
      <section className="relative w-full h-screen">
        <Image
          src="/unseen-studio-s9CC2SKySJM-unsplash.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Header */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={headerStyle}>
            Hello World!!!
          </h1>
        </div>
      </section>

      {/* Quote Section */}
      <section>
        <div className="flex items-center justify-centerw-full mx-auto rounded-md  h-screen overflow-hidden">
          {/* Quote Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className={sectionStyle}>
              "The only limit to our realization of tomorrow will be our doubts of today."
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}