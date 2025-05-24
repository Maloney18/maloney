import ProjectCard from '~/components/projectCard';
import type {Route} from './+types/Projects'
import Trendy from '../assets/trendy.png'
import Phose from '../assets/phose.png'
import Password from '../assets/password.png'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Projects" },
    { name: "description", content: "A sneak peek to some of my cool projects" },
  ];
}

const Projects = () => {
  const projects = [
    {
      title: 'Trendy',
      liveUrl: 'https://movie-trends-two.vercel.app/',
      githubUrl: 'https://github.com/Maloney18/movie-trends',
      tools: ['Next js', 'Chakra Ui', 'Typescript', 'TMDB Api'],
      snapshot: Trendy,
      description: 'A responsive media showcase app built with Next.js and TypeScript, featuring real-time movie and series data via TMDB and YouTube APIs. Utilized React Query for efficient data handling and Chakra UI for accessible, reusable UI components.'
    },
    {
      title: 'Phose Enterprise',
      liveUrl: 'https://phose-enterprise.vercel.app/',
      tools: ['React js', 'Tailwind', 'Email js'],
      snapshot: Phose,
      description: "A React.js web app to elevate an event management brand's online presence, featuring past projects, achieved a fully responsive design using Tailwind, and embedded Google Maps. Integrated EmailJS for backend-free contact form submissions."
    },
    {
      title: 'Password Manager',
      liveUrl: 'https://password-manager-roan.vercel.app/',
      tools: ['React js', 'Firebase', 'Redux'],
      snapshot: Password,
      description: "A dynamic React.js frontend integrated with Firebase for authentication, Firestore CRUD, and file storage. Used Axios for API requests and React-Redux for scalable state management, ensuring a responsive and user-friendly experience."
    }
  ]

  return (
    <div className='flex flex-col font-bold gap-10 lg:gap-25 py-2 lg:px-10 md:py-0 lg:pb-5'>
      <p className='text-2xl lg:text-4xl self-center'>My Projects</p>

      <div className='flex gap-10 md:gap-20 flex-col'>
        {
          projects.map((project, index) => (
            <ProjectCard key={project.title} projectDetails={project} reverse={index % 2 === 1}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects