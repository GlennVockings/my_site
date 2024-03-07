import Image, { StaticImageData } from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaChevronRight } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { ReactNode } from 'react';

interface Card {
  name: string,
  desc: string,
  image: StaticImageData,
  built: string[],
  github: string,
  link: string,
  icons: ReactNode[]
}


export const Card = ({ name, desc, image, built, github, link, icons }: Card) => {
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
          {
            built.map((tech, index) => {
              return (
                <TooltipProvider key={ tech }>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="icon">
                        {icons[index]}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{ tech }</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })
          }
        </div>
      </div>
      <div className='wrapper wrapper-2'>
        {
          github !== "" ? (
            <a href={ github } target="_blank" className='link'>
              <SiGithub />
              Github
            </a>
          ) : ''
        }
        {
          link !== "" ?
          (
            <a href={ link } className='link'>
              View site
              <FaChevronRight />
            </a>
          ) : ''
        }
      </div>
    </div>
  )
}