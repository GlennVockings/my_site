import Image from 'next/image';
import headshot from './images/headshot.png'

import { About } from '../components/About'
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div>
          <p className="md:animate-appearLeft">Frontend</p> 
          <p className="md:animate-appearLeft md:delay-100">Developer</p>
        </div>
        <div className="md:animate-appearRight">
          <div className="image">
            <Image
              fill
              src={headshot}
              alt="headshot"
            />
          </div>
        </div>
      </div>

      <About />
      <Projects />
      <Experience />
    </div>
  )
}
