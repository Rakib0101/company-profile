"use client"

import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useState } from "react"

// Define types for DOM elements
interface CaseStudyElement extends HTMLElement {
  querySelector(selector: string): HTMLElement | null;
}

const caseStudies = [
  {
    title: "Transforming Micro-Book Experiences",
    description: "This mobile application, launched in 2023, has achieved significant success with over 1 million users globally and is available on ...",
    image: "/images/projects/project-01.webp",
    category: "Fitness Industry",
  },
  {
    title: "Enhancing Fitness for Australians",
    description: "Fitmate is an innovative fitness app designed to transform the way Australians engage with their fitness routines. By partnering with...",
    image: "/images/projects/project-02.webp",
    category: "Web Application",
  },
  {
    title: "Empower your finance with alpine banking",
    description: "Alpine Empower Banking successfully transformed its vision into reality by offering a comprehensive financial ecosystem that addressed clients' needs for...",
    image: "/images/projects/project-03.webp",
    category: "Fintech",
  },
  {
    title: "Navigating the future of distributed energy systems",
    description: "The CRM platform for Akij Cement revolutionizes the referral system. Specifically tailored for engineers and masons, it provides intuitive tools..",
    image: "/images/projects/project-04.webp",
    category: "Full Stack",
  },
  {
    title: "Akij Cement&apos;s Digitalized Referrals",
    description: "The CRM platform for Akij Cement revolutionizes the referral system. Specifically tailored for engineers and masons, it provides intuitive tools...",
    image: "/images/projects/project-05.webp",
    category: "Web Application",
  },
  {
    title: "Revolutionize Your Dining Experience Today",
    description: "LeKlub aims to promote partner restaurants and encourage users to discover new establishments. Through a strong media presence on social...",
    image: "/images/projects/project-06.webp",
    category: "SaaS",
  },
  {
    title: "Intuitive vehicle management solutions",
    description: "Zantrik team approached us with an exciting challenge: Revamping their app from top to bottom to take the user experience...",
    image: "/images/projects/project-07.webp",
    category: "Automobile",
  },
  {
    title: "Ways & Villas: Maldivian Travel Redesign",
    description: "Discover romantic getaways, family vacations, private island getaways, water sports, lush spa treatments, and decadent culinary adventures. Start planning the...",
    image: "/images/projects/project-08.webp",
    category: "Travel & Tourism",
  },
  {
    title: "Onethread project management software redesign",
    description: "Onethread, the project management software redesign that is revolutionising the way teams collaborate and achieve their goals.",
    image: "/images/projects/project-09.webp",
    category: "Project Management",
  }
]

export function CaseStudies() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useGSAP(() => {
    if (!isClient) return

    gsap.registerPlugin(ScrollTrigger)
    
    // Create a timeline for header animations
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top 80%",
      }
    })

    headerTl
      .from(".showcase-tag", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      })
      .from(".showcase-title", {
        opacity: 0,
        y: 100,
        rotationX: 45,
        duration: 1,
        ease: "power4.out"
      }, "-=0.4")
      .from(".showcase-description", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

    // Animate case study items with advanced effects
    gsap.utils.toArray(".case-study-item").forEach((item: any, i) => {
      const image = item.querySelector(".study-image")
      const content = item.querySelector(".study-content")
      const category = item.querySelector(".study-category")
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      })

      tl.from(item, {
        opacity: 0,
        duration: 0.6,
      })
      .from(image, {
        scale: 1.2,
        opacity: 0,
        rotationY: i % 2 === 0 ? 15 : -15,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")
      .from(content, {
        x: i % 2 === 0 ? 100 : -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(category, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.6")
    })

    // Enhanced hover animations
    gsap.utils.toArray(".case-study-item").forEach((item: any) => {
      const image = item.querySelector(".study-image")
      const title = item.querySelector(".study-title")
      
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -10,
          duration: 0.4,
          ease: "power2.out"
        })
        gsap.to(image, {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out"
        })
        gsap.to(title, {
          color: "#6366f1", // or your primary color
          duration: 0.3
        })
      })

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        })
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        })
        gsap.to(title, {
          color: "white",
          duration: 0.3
        })
      })
    })
  }, [isClient])

  return (
    <section className="py-20 bg-black text-white" id="showcase">
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="showcase-tag text-white bg-primary rounded-full px-4 py-0.5 text-sm font-bold inline-block">
            Showcase
          </span>
          <h2 className="showcase-title font-display text-3xl sm:text-7xl font-bold tracking-tight mt-6">
            Featured Projects
          </h2>
          <p className="showcase-description mt-4 text-gray-400 max-w-2xl text-sm sm:text-lg">
            Showcasing our expertise in building innovative digital solutions across various industries and technologies
          </p>
        </div>

        <div className="case-studies-grid grid gap-16 sm:gap-32">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="case-study-item grid md:grid-cols-5 gap-8 items-center"
            >
              <div className={`relative overflow-hidden col-span-3 rounded-2xl ${
                index % 2 === 0 ? "md:order-last md:ms-20" : "md:order-first md:me-20"
              }`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={500}
                  className="study-image w-full transition-transform duration-300"
                />
              </div>
              <div className="study-content space-y-4 col-span-2">
                <span className="study-category text-white max-w-max bg-primary/50 text-sm px-3 py-1.5 rounded-full font-medium">
                  {study.category}
                </span>
                <h3 className="study-title text-2xl sm:text-4xl font-bold">
                  {study.title}
                </h3>
                <p className="text-gray-400">
                  {study?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

