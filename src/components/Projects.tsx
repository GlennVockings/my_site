import Image from 'next/image'
import oxted from '../app/images/oxted.png'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaReact } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export const Projects = () => {
  return (
    <div id="projects" className='widget'>
      <p className="heading-title">Projects</p>

      <div className="wrapper wrapper-3">
        <div className="card">
          <div>
            <Image
              src={oxted}
              alt="Oxted"
              width="350"
              height="240"
            />
          </div>
          <div className="card-content">
            <p className="card-title">Football team website</p>
            <p className='card-desc'>This is site for a football team.</p>
            <p className='leading-none'>Built with:</p>
            <div className="icons">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="icon">
                      <FaReact />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="icon">
                      <SiTailwindcss />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="icon">
                      <SiMongodb />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MongoDb</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="icon">
                    <SiGraphql />
                  </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GraphQL</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='wrapper wrapper-2'>
            <a href="https://github.com/GlennVockings/new_website" target="_blank" className='link'>
              <SiGithub />
              Github
            </a>
            <a href="https://oxtedfc.onrender.com" className='link'>
              View site
              <FaChevronRight />
            </a>
          </div>
        </div>

        <div className='card'>


        </div>


      </div>
    </div>
  )
}