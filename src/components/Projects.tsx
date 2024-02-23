import { Card } from "./ui/Card"
import oxted from "../app/images/oxted.png"
import { StaticImageData } from "next/image"

type Projects = {
  name: string,
  desc: string,
  image: StaticImageData,
  built: string[],
  github: string,
  link: string
}

const projects : Projects[] = [
  {
    name: "Football team website",
    desc: "",
    image: oxted,
    built: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "GraphQL"
    ],
    github: "https://github.com/GlennVockings/new_website",
    link: "https://oxtedfc.onrender.com"
  }
]

export const Projects = () => {
  return (
    <div id="projects" className='widget'>
      <p className="heading-title animate-appearLeft">Projects</p>

      <div className="wrapper wrapper-3">
        {
          projects.map(project => {
            return <Card key={project.name} {...project} />
          })
        }
      </div>

    </div>
  )
}