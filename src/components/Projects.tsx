import { Card } from "./ui/Card";
import oxted from "../app/images/oxted.png";
import shop from "../app/images/shop.png";
import { StaticImageData } from "next/image";
import { SiMongodb, SiGraphql, SiTailwindcss, SiNextdotjs, SiExpress, SiPayloadcms, SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

type Projects = {
  name: string;
  desc: string;
  image: StaticImageData;
  built: string[];
  github: string;
  link: string;
};

const projects : Projects[] = [
  {
    name: "Football team website",
    desc: "",
    image: oxted,
    built: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "GraphQL",
    ],
    github: "https://github.com/GlennVockings/new_website",
    link: "https://oxtedfc.onrender.com"
  },
  {
    name: "Shop",
    desc: "",
    image: shop,
    built: [
      "Nextjs",
      "Tailwind CSS",
      "MongoDB",
      "Payload CMS",
    ],
    github: "",
    link: ""
  }
]

export const Projects = () => {

  const iconSelctor = ( name: string ) => {
    switch( name.toLowerCase() ) {
      case 'react':
        return <FaReact />
      case 'tailwind css':
        return <SiTailwindcss />
      case 'mongodb':
        return <SiMongodb />
      case 'graphql':
        return <SiGraphql />
      case 'nextjs':
        return <SiNextdotjs />
      case 'payload cms':
        return <SiPayloadcms />
      case 'express':
        return <SiExpress />
      case 'redux':
        return <SiRedux />
      default:
        return null;
    }
  }



  return (
    <div id="projects" className='widget'>
      <p className="heading-title animate-appearLeft">Projects</p>

      <div className="wrapper wrapper-3">
        {
          projects.map(project => {
            const icons = project.built.map(tech => iconSelctor(tech))
            return <Card key={project.name} icons={icons} {...project} />
          })
        }
      </div>

    </div>
  )
}