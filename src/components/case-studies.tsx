"use client"

import Image from "next/image"

const caseStudies = [
  {
    title: "Jobflix - Job Portal",
    description: "Jobflix is a job portal that offers a variety of jobs for people to apply for. It is a popular spot for locals and tourists alike.",
    image: "/images/projects/project-01.png",
    category: "Job Portal",
  },
  {
    title: "Jobpilot - Job Portal",
    description: "Jobpilot is a job portal that offers a variety of jobs for people to apply for. It is a popular spot for locals and tourists alike.",
    image: "/images/projects/project-02.png",
    category: "Job Portal",
  },
  {
    title: "Adlisting - PHP Scripts for listing ads",
    description: "Adlisting is a listing ads on codecanyon. It is made with PHP, MySQL, and Bootstrap. It is a simple and easy to use script for listing ads.",
    image: "/images/projects/project-03.png",
    category: "Listing Ads",
  },
  {
    title: "a1 Car - Premier Car Rental Journey in Dubai",
    description: "a1 Car is a car rental company that offers a variety of cars for rent. It is a popular spot for locals and tourists alike.",
    image: "/images/projects/project-04.png",
    category: "Rentals",
  },
  {
    title: "Mi Cafecito - Coffee Shop",
    description: "Mi Cafecito is a coffee shop that offers a variety of coffee and pastries. It is a popular spot for locals and tourists alike.",
    image: "/images/projects/project-05.png",
    category: "Food",
  },
  {
    title: "Complete Appointment Solution with Appointly",
    description: "Streamline your scheduling with our intuitive appointment management system. Book appointments effortlessly, manage your time efficiently, and let your business run smoothly with automated reminders and hassle-free rescheduling.",
    image: "/images/projects/project-06.png",
    category: "Health",
  },
]

export function CaseStudies() {

  return (
    <section className="py-20 bg-black text-white" id="showcase">
      <div className="container">
        <div className="mb-16">
          <span className="text-white bg-primary rounded-full px-4 py-1 text-sm font-bold inline-block">Our Works</span>
          <h2 className="mt-2 font-display text-3xl sm:text-7xl font-bold tracking-tight">
            Case studies
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-lg">
            Well-crafted development and design solutions are essential present products that your audience will fall in love with
          </p>
        </div>

        <div className="grid gap-16 sm:gap-32">
          {caseStudies.map((study, index) => (
              <div
                key={index}
                className="grid md:grid-cols-5 gap-8 items-center"
              >
                <div className={`relative overflow-hidden col-span-3 rounded-2xl ${index % 2 === 0 ? "md:order-last" : ""}`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={500}
                    className="w-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="space-y-4 col-span-2">
                  <div className="text-indigo-400 font-medium">
                    {study.category}
                  </div>
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

