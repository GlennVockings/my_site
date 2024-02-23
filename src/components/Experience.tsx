"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

type Experience = {
  role: string,
  company: string,
  desc: string,
  start: string,
  end: string
}

const experiences: Experience[] = [
  {
    role: "Mid-level Frontend Engineer",
    company: "Pulselive (Sony Sports company)",
    desc: "<p>This role comprises of creating and improve widgets/apps of client websites to improve the user experience / look. And creating new in-house CMS product solutions, using the following technologies:</p><ul><li>React & Redux Expertise: Proficient in creating dynamic and interactive user interfaces with React and managing state with Redux to improve client websites and in-house CMS products and solutions.</li><li>Gulp Task Automation: Skilled in automating development tasks with Gulp to optimize workflows and ensure code quality.</li><li>Micro-Frontend Architect: Skilled in designing, developing, and integrating micro-frontends for modular and agile web development.</li><li>Freemarker Templating: Knowledgeable in server-side rendering with Freemarker templates to improve SEO and performance.</li></ul><br /><p>Skills from the role:</p><ul><li>Proficiency in HTML, CSS, and JavaScript for web component implementation and styling.</li><li>Git version control for collaborative development.</li><li>Modern front-end development tools and libraries.</li><li>Problem-solving expertise for cross-browser compatibility and performance optimization.</li><li>Strong communication and collaboration skills for cross-functional teamwork.</li><li>Commitment to web security best practices.</li></ul>",
    start: "December 2021",
    end: ""
  },
  {
    role: "Frontend Developer",
    company: "Wysi",
    desc: "<p>This involves building websites and application to our clients needs. Whether that’s building a new website and kiosk app for a local shopping centre or ecommerce sites for clients around the world, this is done by using HTML5/CSS3, JavaScript, GraphQL, Liquid, YAML. For ecommerce we use Stripe and Paypal.</p>",
    start: "March 2019",
    end: "November 2021"
  },
  {
    role: "Service Desk Analyst",
    company: "Idox",
    desc: "<p>1st Tier service desk analyst, which involves logging any issue a customer may have with the software, updating the support calls either via email or phone.</p><br/><p>I would advise resolutions to common issues.</p>",
    start: "February 2016",
    end: "March 2019"
  }
]

export const Experience= () => {
  const [active, setActive] = useState(0);


  return (
    <div id="experience" className="widget">
      <p className="heading-title">Experience</p>

      <div className="flex flex-col md:flex-row border-2 border-accent md:divide-x-2 divide-accent">
        <ul className="flex flex-row snap-x md:w-1/3 md:flex-col overflow-x-scroll md:overflow-auto">
          {
            experiences.map((experience, index) => {
              const { role, company, start, end } = experience
              return (
                <li 
                  key={company} 
                  className={
                    cn("max-h-16 w-full snap-start px-2 py-2 cursor-pointer border-b-2 border-accent border-r-2 md:border-r-0 hover:bg-accent hover:text-accent-foreground",
                      {
                        "bg-accent text-accent-foreground" : active === index
                      }
                    )
                  }
                  onClick={() => setActive(index)}
                >
                  <div className="whitespace-nowrap">
                    <p>{start} - {end ? end : "Present"}</p> 
                  </div>
                  <p className="font-bold text-md whitespace-nowrap">{role}</p>
                  <p className="font-bold">{company}</p>
                </li>
              )
            })
          }
        </ul>

        <div className="description">
          <div dangerouslySetInnerHTML={{ __html: experiences[active].desc }}></div>
        </div>
      </div>

    </div>
  )
}