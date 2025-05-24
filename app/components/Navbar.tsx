import { useNavigate, NavLink } from "react-router"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/projects', name: 'Projects'}
  ]

  const mobileNav = () => (
    links.map((link, index) => (
      <motion.div key={link.name} initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, ease: 'easeInOut', delay: index / 2}} onClick={() => setIsOpen(false)}>
        <NavLink className={({isActive}) => isActive ? "nav-item text-(--primary-color) font-bold": "nav-item hover:text-(--primary-color) text-white"} to={link.path} viewTransition>{link.name}</NavLink>
      </motion.div>
    ))
  )

  return (
    <nav className="flex justify-between items-center p-2 md:py-5 md:px-10 h-[10vh] relative">
      <div className="text-xl lg:text-2xl font-bold text-white">Odujebe Olalekan</div>
      <div className="hidden lg:flex gap-5">
        <NavLink className={({isActive}) => isActive ? "nav-item text-(--tertiary-color) font-bold": "nav-item text-white hover:text-(--tertiary-color)"} to='/' viewTransition>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "nav-item text-(--tertiary-color) font-bold": "nav-item text-white hover:text-(--tertiary-color)"} to='/about' viewTransition>About</NavLink>
        <NavLink className={({isActive}) => isActive ? "nav-item text-(--tertiary-color) font-bold": "nav-item text-white hover:text-(--tertiary-color)"} to='/projects' viewTransition>Projects</NavLink>
      </div>

      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AnimatePresence mode="wait">
         { 
          isOpen 
          ? 
          <motion.div key='close' initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, ease: 'easeIn'}} exit={{translateY: 10, opacity: 0}}>
            <MdClose className="text-2xl"/>
          </motion.div>
          :
          <motion.div key='menu' initial={{translateY: -10, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.08, ease: 'easeIn'}} exit={{translateY: -10, opacity: 0}}>
            <FiMenu className="text-2xl"/>
          </motion.div>
          
        }

        </AnimatePresence>
      </div>


      <AnimatePresence mode="wait" key='nav'>
        {
          isOpen &&
          <motion.div initial={{width: 0, height: 0, right: 0, borderBottomLeftRadius: '100%'}} animate={{width: '100%', height: '90vh', right: 0, borderBottomLeftRadius: 0 }} transition={{duration: 0.1, ease: 'easeIn'}} exit={{width: 0, height: 0, borderBottomLeftRadius: '100%'}} className="bg-(--secondary-color) h-[90vh] flex flex-col items-center justify-center gap-5 z-30 lg:hidden absolute top-12">

            <div className="flex flex-col gap-5 items-center">
              {mobileNav()}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>
  )
}

export default Navbar