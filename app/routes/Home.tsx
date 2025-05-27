import type { Route } from "./+types/Home";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BiLogoGmail } from 'react-icons/bi'
import Hero from "../assets/programmer.png"
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Resume from '../../public/resume.pdf'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odujebe Olalekan" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
}



const Home = () => {
  const navigate = useNavigate();

  const twitter = () => { 
    window.open("https://x.com/___Maloney", "_blank");
  }

  const github = () => { 
    window.open("https://github.com/Maloney18", "_blank");
  }

  const linkedin = () => { 
    window.open("https://www.linkedin.com/in/olalekan-solomon-486a1423b/", "_blank");
  }

  const gmail = () => { 
    window.open("mailto:lekansolomon18@gmail.com/", "_blank");
  }

  const openResume = () => {
    window.open(Resume, "_blank")
  }

  return (
  <section className="flex flex-col md:flex-row gap-5 items-center h-[90vh] p-5 md:p-10">
      <div className="flex-1 flex flex-row-reverse md:flex-row gap-10 md:gap-20 lg:gap-25 md:items-start">
        <div className="flex flex-col gap-7">
          <motion.div initial={{translateY:-20, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, type: 'spring', stiffness: 5, damping: 1, delay: 0}} className="flex gap-3">
            <FaGithub onClick={github} className="my-account"/>
          </motion.div>
          <motion.div initial={{translateY:-20, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, type: 'spring', stiffness: 5, damping: 1, delay: 1/2}} className="flex gap-3">
            <FaLinkedin onClick={linkedin} className="my-account"/>
          </motion.div>
          <motion.div initial={{translateY:-20, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, type: 'spring', stiffness: 5, damping: 1, delay: 2/2}} className="flex gap-3">
            <FaTwitter onClick={twitter} className="my-account"/>
          </motion.div>
          <motion.div initial={{translateY:-20, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, type: 'spring', stiffness: 5, damping: 1, delay: 3/2}} className="flex gap-3">
            <BiLogoGmail onClick={gmail} className="my-account"/>
          </motion.div>
        </div>

        <div className="flex flex-col gap-7 w-full">
          <motion.div initial={{scale: 0.5, translateX: -10, opacity: 0}} animate={{scale: 1, translateX: 0, opacity: 1}} transition={{duration: 1,  type: 'spring', stiffness: 100, damping: 3}} className="flex flex-col gap-3">
            <p  className="font-semibold text-base md:text-md lg:text-lg">Hello</p>
            <p className="text-3xl lg:text-4xl">I'm <span className="font-bold">Olalekan</span> </p>
            <p className="text-base md:text-md lg:text-lg">A Frontend Developer</p>
          </motion.div>


          <div className="flex gap-5 items-center">
            <button onClick={() => navigate('/projects', {viewTransition: true})} className="hero-btn hover:bg-(--secondary-color) bg-(--tertiary-color) hover:scale-[0.97]">
              View my work
            </button>

            <button onClick={openResume} className="z-10 relative hero-btn group">
              <span className="-z-10 absolute h-full w-0 left-0 top-0  bg-(--tertiary-color) group-hover:w-full rounded-lg transition-all duration-300 ease-in"></span>
              <span className="h-full left-0 top-0 absolute w-full rounded-lg border border-(--tertiary-color) group-hover:w-0 transition-all duration-300 ease-in group-hover:border-0"></span>
              My Resume
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 h-full">
        <img src={Hero} className="max-h-full" alt="programmer" />
      </div>
      
    </section>
  )
}

export default Home
