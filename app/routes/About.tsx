import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaGithub } from 'react-icons/fa'
import { FaSquareGit } from 'react-icons/fa6'
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri"
import { SiChakraui, SiTypescript } from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"
import AboutImg from '../assets/about-me.png'
import type { Route } from "./+types/About";
import { motion } from 'framer-motion';
import React from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About me" },
    { name: "description", content: "Here are some interesting info about me" },
  ];
}

const About = () => {
  const skills = [
    { name: "Html", icon: <FaHtml5 className='skill-icon'/> },
    { name: "Css", icon: <FaCss3Alt className='skill-icon'/> },
    { name: "Sass", icon: <FaSass className='skill-icon'/> },
    { name: "Git", icon: <FaSquareGit className='skill-icon'/> },
    { name: "GitHub", icon: <FaGithub className='skill-icon'/> },
    { name: "React", icon: <FaReact className='skill-icon'/> },
    { name: "Next", icon: <RiNextjsLine className='skill-icon'/> },
    { name: "Redux", icon: <TbBrandRedux className='skill-icon'/> },
    { name: "Tailwind", icon: <RiTailwindCssFill className='skill-icon'/> },
    { name: "Chakra UI", icon: <SiChakraui className='skill-icon'/> },
    { name: "Javascript", icon: <FaJsSquare className='skill-icon'/> },
    { name: "Typescript", icon: <SiTypescript className='skill-icon'/> },
  ]

  const aboutMe="I'm a frontend developer with over 3 years of hands-on experience turning complex ideas into seamless, user-focused interfaces. I specialize in crafting pixel-perfect, responsive designs that not only look great but perform flawlessly across devices. Beyond code, I thrive in collaborative environments, communicating clearly, solving problems with intent, and adapting quickly to new challenges. Whether it's aligning with design teams or fine-tuning performance, I bring a balance of technical precision and team-oriented mindset to every project I work on."

  const animatedLetters = aboutMe.split('').map((letter, idx) => {
    return (
      <span key={`${aboutMe}-${idx}`} className='relative'>
        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: idx * 0.08, duration: 0, ease: 'easeInOut'}}>{letter}</motion.span>
        <motion.span initial={{opacity: 0}} animate={{opacity: [0,1,0]}} transition={{times: [0, 0.1, 1], delay: idx * 0.08, duration: 0.125, ease: 'easeInOut'}} className='absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-(--secondary-color)'/>        
      </span>
    )
  })


  const renderSkills = () => {
    return skills.map((skill, index) => (
      <motion.div initial={{translateX: -20, opacity: 0}} animate={{translateX: 0, opacity: 1}} transition={{duration: 0.08, type: 'spring', stiffness: 300, damping: 2, delay: index / 2}} key={index} className='skill-container'>
        {skill.icon}
        <p className='w-max'>{skill.name}</p>
      </motion.div>
    ))
  }

  return (
    <section className='flex flex-col items-center gap-8 py-2 px-5 lg:px-10'>
      <div className='flex gap-5 items-center w-full'>
        <div className='flex-1 w-full hidden md:block'>
          <img src={AboutImg} className='h-[70vh] max-w-full' alt="about me" />
        </div>

        <div className='flex-1 flex flex-col gap-5'>
          <p className='font-semibold lg:font-bold text-2xl'>About me</p>

          <p className='font-normal text-sm lg:text-base leading-8 text-justify'>
            {/* {
              eachWord.map((word, index) => (
                
              ))
            } */}
            {animatedLetters}
          </p>
        </div>
      </div>

      <div className='flex flex-col text-xl items-center gap-7 justify-center'>
        <p className='font-semibold lg:font-bold text-2xl'>Skills</p>

        <div className='flex gap-7 items-center justify-center w-full flex-wrap'>
         {renderSkills()} 
        </div>
      </div>
    </section>
  )
}

export default About