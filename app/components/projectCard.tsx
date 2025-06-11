import { motion } from "framer-motion"

type props = {
  projectDetails: {
    title: string,
    description: string,
    liveUrl: string,
    githubUrl?: string,
    tools: string[],
    snapshot: string,
  },
  reverse?: boolean
}

const ProjectCard = ({projectDetails, reverse} : props) => {
const {title, description, liveUrl, githubUrl, tools, snapshot} = projectDetails

  const handleGithub = () => {
    window.open(githubUrl, "_blank")
  }

  const handleLive = () => {
    window.open(liveUrl, "_blank")
  }


  return (
    <div className={`project-card-container ${reverse ? "lg:items-end" : "lg:items-start"}`}>
      <motion.div key={title} initial={{translateY: 10, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 1, ease: 'easeIn'}} className="flex flex-col gap-5 lg:w-[750px] flex-1">
        <p className={`text-lg lg:text-2xl font-bold ${reverse ? "self-end" : "self-start"}`}>{title}</p>

        <div className={`flex flex-col gap-3 ${reverse ? "items-end" : "items-start"}`}>
          <div className="flex items-center gap-2 flex-wrap">
            {tools?.map((tool, index) => (
              <p key={index} className="text-xs md:text-sm rounded-2xl p-0.5 md:py-1.5 px-2 md:rounded-3xl border border-(--tertiary-color)">{tool}</p>
            ))}
          </div>

          <p className="text-sm w-full md:w-2/3 font-normal md:text-justify">{description}</p>
        </div>

        <div className={`flex gap-5 items-center ${reverse ? 'self-end' : 'self-start'}`}>
          {githubUrl && <button className="bg-(--tertiary-color) rounded-lg p-2 text-xs md:text-sm font-semibold cursor-pointer hover:bg-(--secondary-color) hover:scale-[0.97] transition duration-300" onClick={handleGithub}>Visit Github</button>}
          <button className="p-2 font-semibold cursor-pointer text-xs md:text-sm hover:scale-[0.97] transition duration-300" onClick={handleLive}>
            <span className="border-b border-(--tertiary-color) pb-0.5">View project</span>
          </button>
        </div>
      </motion.div>

      <motion.div key={title + '1'} initial={{translateY: 10, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 1, ease: 'easeIn'}} className='lg:h-max'>
        <img src={snapshot} alt={title} className='object-contain object-center h-full lg:w-[750px] rounded-md'/>
      </motion.div>
    </div>
  )
}

export default ProjectCard