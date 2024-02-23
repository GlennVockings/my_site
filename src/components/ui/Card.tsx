import Image, { StaticImageData } from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaReact } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiGithub } from "react-icons/si";

interface Card {
  name: string,
  desc: string,
  image: StaticImageData,
  github: string,
  link: string
}


export const Card = ({ name, desc, image, github, link }: Card) => {
  return (
    <div className="card animate-appearLeft">
      <div>
        <Image
          src={image}
          alt={name}
          width="350"
          height="240"
        />
      </div>
      <div className="card-content">
        <p className="card-title">{ name }</p>
        <p className='card-desc'>{ desc }</p>
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
        <a href={ github } target="_blank" className='link'>
          <SiGithub />
          Github
        </a>
        <a href={ link } className='link'>
          View site
          <FaChevronRight />
        </a>
      </div>
    </div>
  )
}