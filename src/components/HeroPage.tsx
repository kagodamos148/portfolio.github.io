'use client'

import React from 'react'
import Image from 'next/image'
import { Vortex } from './ui/vortex'

// Local imports


export const HeroPage = () => {
  const headerStyle = "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent text-white text-center font-sans font-bold"
  const sectionStyle = "relative z-10 text-lg md:text-7xl bg-clip-text justify-center text-black font-sans font-bold"

  return (
    <>
      {/* About Me */}
      <section>
        <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
          {/* About Me Section */}
                <Vortex
                  className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                  <h2 className="text-black text-2xl md:text-6xl font-bold text-center">
                    About Me Section
                  </h2>
                  <p className="text-black text-sm md:text-2xl max-w-xl mt-6 text-center">
                    This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
                    burned and you&apos;ll have a scar.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-black shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                      Order now
                    </button>
                    <button className="px-4 py-2  text-black ">Watch trailer</button>
                  </div>
                </Vortex>
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