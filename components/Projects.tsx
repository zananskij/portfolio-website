"use client" // this is a client component
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Swipe from "react-easy-swipe"

interface LinkWithLabelProps {
  href: string
  IconComponent: React.ElementType
  label: string
  className: string
}

const LinkWithLabel: React.FC<LinkWithLabelProps> = ({ href, IconComponent, label, className }) => {
  return (
    <Link href={href} target="_blank">
      <div className={`flex items-center space-x-2 ${className}`}>
        <IconComponent
          size={30}
          className="hover:-translate-y-1  transition-transform cursor-pointer  hover:text-teal-600 ease-out"
        />
        <p className="text-sm text-gray-600 hover:text-teal-600">{label}</p>
      </div>
    </Link>
  )
}

const projects = [
  {
    name: "Chatter",
    skillsUsed: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "bcrypt",
      "WebSockets",
      "Tailwind CSS",
    ],
    description:
      "An interactive, real-time chat application built with the MERN stack, featuring WebSockets for immediate messaging, secure user authentication using JWT and bcrypt for password hashing, all fully responsive and styled with Tailwind CSS.",
    images: ["/chatter.png", "/chatterlogin.png"],
    githubFrontend: "https://github.com/zananskij/chatter-client",
    githubBackend: "https://github.com/zananskij/chatter-api",
    link: "https://chatter-messenger.herokuapp.com/",
  },
  {
    name: "Simple Ecommerce",
    skillsUsed: [
      "JavaScript",
      "React",
      "Stripe Integration",
      "Secure Payment",
      "Express",
      "Axios",
      "CSS",
      "Mobile Friendly",
    ],
    description:
      "An intuitive e-commerce application featuring an interactive shopping cart and secure checkout via Stripe integration. Built with JavaScript, React, and Express, it utilizes Axios for efficient data handling. The mobile-friendly design is crafted with CSS, ensuring a user-friendly shopping experience.",
    images: ["/ecommerceMain.png", "/ecommerceProduct.png", "/ecommerceCart.png", "/ecommerceStripe.png"],
    githubFrontend: "https://github.com/zananskij/simple-ecommerce",
    githubBackend: "https://github.com/zananskij/simple-ecommerce-server",
    link: "https://simple-ecommerce.herokuapp.com/",
  },
  {
    name: "Streaming Backlist",
    skillsUsed: ["TypeScript", "React", "Express", "PostgreSQL", "Node.js", "Axios", "Tailwind CSS", "Responsive"],
    description:
      "Explore a vast library of movies and TV shows, powered by the TMDB API. Discover trending titles or search for specific ones, each with detailed information including release dates, user ratings, and overviews. Users can curate a Favorites list to catalog titles they've enjoyed, or plan ahead with a Watchlater list for future viewing. Fully responsive and optimized, this application delivers an exceptional browsing experience on devices of all sizes.",
    images: ["/streamingHome.png", "/streamingModal.png"],
    githubFrontend: "https://github.com/zananskij/Letterboxd-clone-frontend",
    githubBackend: "https://github.com/zananskij/Letterboxd-clone-backend",
    link: "https://letterboxd-clone.herokuapp.com/",
  },
  {
    name: "My Portfolio",
    skillsUsed: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive"],
    description:
      "My personal portfolio, built with Next.js, highlights my design-focused approach to web development and my proficiency in creating interactive, responsive UI/UX. Demonstrating my ability to pick up and learn a new technology, while also leveraging my skills in TypeScript and React, it serves as an example to my continuous growth and future-focused mindset.",
    images: ["/portfolio1.png", "/portfolio2.png"],
    githubFrontend: "https://github.com/zananskij/portfolio-website",
    link: "https://jonzananski.herokuapp.com/",
  },
]

const Projects = () => {
  const sliderSettings = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    transitionTime: 350,
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects[currentSlide].images.length)
  }

  const previousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projects[currentSlide].images.length) % projects[currentSlide].images.length
    )
  }

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Swipe onSwipeLeft={nextSlide} onSwipeRight={previousSlide}>
                      <Carousel {...sliderSettings} selectedItem={currentSlide}>
                        {project.images?.map((image, imageIdx) => (
                          <div key={imageIdx}>
                            <Link href={project.link}>
                              <Image
                                src={image}
                                alt=""
                                width={600}
                                height={600}
                                className="rounded-xl shadow-xl hover:opacity-70"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        ))}
                      </Carousel>
                    </Swipe>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
                      {project.skillsUsed.map((skill) => {
                        return (
                          <p
                            key={skill}
                            className="bg-gray-200 hover:bg-teal-600 hover:text-white px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                          >
                            {skill}
                          </p>
                        )
                      })}
                    </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 mt-5">
                      <LinkWithLabel
                        href={project.githubFrontend}
                        IconComponent={BsGithub}
                        label={project.githubBackend ? "Frontend Repo" : "Repo Here"}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                      {project.githubBackend && (
                        <LinkWithLabel
                          href={project.githubBackend}
                          IconComponent={BsGithub}
                          label="Backend Repo"
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      )}

                      <LinkWithLabel
                        href={project.link}
                        IconComponent={BsArrowUpRightSquare}
                        label="Live Project"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
