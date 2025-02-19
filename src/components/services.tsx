import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Website Strategy",
    description:
      "Let's build your success story by starting with a powerful website strategy. At Musemind, we formulate strategies that connect with your audience, maximize engagement, and deliver the results your business deserves.",
    image: "/images/services/service-1.webp",
    color: "bg-purple-100 dark:bg-purple-900/10",
  },
  {
    title: "Website Design & Re-Design",
    description:
      "Enhance your website's look and feel with modern, engaging designs that captivate visitors and boost conversion rates.",
    image: "/images/services/service-2.webp",
    color: "bg-green-100 dark:bg-green-900/10",
  },
  {
    title: "Website Information Architecture",
    description:
      "We organize your website's content intuitively, making navigation easier and improving user interaction and overall site performance.",
    image: "/images/services/service-3.webp",
    color: "bg-pink-100 dark:bg-pink-900/10",
  },
  {
    title: "Webflow Development",
    description:
      "To make our client's visions a reality, we employ Webflow to build fully responsive sites with elegant animations. Your audience will have a dynamic, user-focused platform that stands out and delivers a seamless experience.",
    image: "/images/services/service-4.webp",
    color: "bg-orange-100 dark:bg-orange-900/10",
  },
  {
    title: "Wordpress Development",
    description:
      "We help you to explore the full potential of your digital product with our comprehensive UX audit. We identify pain points, usability issues, and areas for improvement, providing actionable insights to enhance user satisfaction and boost conversion rates.",
    image: "/images/services/service-5.webp",
    color: "bg-blue-100 dark:bg-blue-900/10",
  },
  {
    title: "Framer Development",
    description:
      "With Framer, we transform your vision into interactive, high-quality prototypes and websites. You'll enjoy a consistent journey from brainstorming to a beautifully functional design that wows your audience.",
    image: "/images/services/service-6.webp",
    color: "bg-yellow-100 dark:bg-yellow-900/10",
  },
  {
    title: "Website SEO Optimization",
    description:
      "We optimize your website to stand out in search engines, drive organic traffic, and boost visibility. You'll enjoy higher rankings, more organic traffic, and a stronger online presence that drives real results.",
    image: "/images/services/service-7.webp",
    color: "bg-purple-100 dark:bg-purple-900/10",
  },
  {
    title: "CMS Development",
    description:
      "We develop custom CMS solutions, allowing you to effortlessly manage your content without needing technical expertise or developer assistance.",
    image: "/images/services/service-8.webp",
    color: "bg-cyan-100 dark:bg-cyan-900/10",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "With our comprehensive website maintenance and support, we've got you covered. From keeping things secure to ensuring everything runs smoothly, you'll have peace of mind knowing your site is always in top shape.",
    image: "/images/services/service-9.webp",
    color: "bg-green-100 dark:bg-green-900/10",
  },
]

export function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-teko text-4xl tracking-wide font-bold leading-tight sm:text-4xl md:text-5xl">
            Achieve success with our all-in-one web design and development services
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden border-none transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 ${service.color} opacity-40`} />
              <CardContent className="relative space-y-4 p-6">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

