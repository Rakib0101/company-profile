"use client"

import Image from "next/image"

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
    description: "Alpine Empower Banking successfully transformed its vision into reality by offering a comprehensive financial ecosystem that addressed clients’ needs for...",
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

  return (
    <section className="py-20 bg-black text-white" id="showcase">
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-white bg-primary rounded-full px-4 py-0.5 text-sm font-bold inline-block">Showcase</span>
          <h2 className="font-display text-3xl sm:text-7xl font-bold tracking-tight mt-6">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-lg">
            Showcasing our expertise in building innovative digital solutions across various industries and technologies
          </p>
        </div>

        <div className="grid gap-16 sm:gap-32">
          {caseStudies.map((study, index) => (
              <div
                key={index}
                className="grid md:grid-cols-5 gap-8 items-center"
              >
                <div className={`relative overflow-hidden col-span-3 rounded-2xl ${index % 2 === 0 ? "md:order-last md:ms-20" : "md:order-first md:me-20"}`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={500}
                    className="w-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="space-y-4 col-span-2">
                  <span className="text-white max-w-max bg-primary/50 text-sm px-3 py-1.5 rounded-full font-medium">
                    {study.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold">
                    {study.title}
                  </h3>
                  <p className="text-gray-400">
                    {study?.description}
                  </p>
                  {/* <a 
                    href="#" 
                    className="inline-block text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Check Full Case Study
                  </a> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

