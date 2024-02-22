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
          <p>Frontend <br/> Developer</p>
        </div>
        <div>
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
