"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {

  return (
    <section className="relative min-h-screen bg-white py-20" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 col-span-2">
            <div className="space-y-6">
              <h1 className="text-[4rem] md:text-[6rem] lg:text-[10rem] leading-none font-teko font-bold relative">
                WE ARE
                <br />
                SKILLED IN
                <br />
                <span className="inline-block text-5xl relative text-indigo-600 mr-4 after:content-[''] after:block after:w-full after:h-1 after:bg-indigo-600 after:absolute after:bottom-0 after:left-0">
                  Web <br /> Design
                </span>
                AND
                <span className="inline-block text-5xl relative text-primary ml-4 after:content-[''] after:block after:w-full after:h-1 after:bg-primary after:absolute after:bottom-0 after:left-0">
                  Development
                </span>
              </h1>
            </div>

            <p className="text-gray-600 max-w-xl">
              We transform web solutions with our innovative and future-proof
              software products, empowering businesses to thrive and scale in
              the ever-evolving digital landscape. Our team of experts is
              dedicated to delivering cutting-edge solutions that help
              businesses stay ahead in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 my-8">
              <Link
                href="https://www.upwork.com/agencies/1826147102571778048/"
                target="_blank"
                className="px-12 py-2.5 font-semiboid shadow-lg rounded-full text-base uppercase transition-all duration-300 bg-primary text-white hover:bg-primary/80"
              >
                Hire Us
              </Link>
              <Link
                href="#showcase"
                className="font-semibold px-12 py-2.5 rounded-full text-base uppercase shadow-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-600/80 hover:text-white"
              >
                Showcase
              </Link>
            </div>
          </div>

          {/* Right Column - Image & Video */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <Image src="/images/hero-right-1.png" alt="Team" width={220} height={600} className="object-cover lg:w-1/2 h-auto" />
              <Image src="/images/hero-right-2.jpg" alt="Play" width={220} height={600} className="object-cover lg:w-1/2 h-auto rounded-r-full -mt-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
