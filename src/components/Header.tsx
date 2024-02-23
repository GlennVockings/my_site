import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <div className='logo'>
          <Image
            src='/logo.svg' 
            alt="logo" 
            fill
          />
        </div>

        <div className="links">
          <Link href='/#about' className='md:animate-appearLeft'>About</Link>
          <Link href='/#experience' className='md:animate-appearLeft'>Experience</Link>
          <Link href='/#projects' className='md:animate-appearLeft'>Projects</Link>
        </div>
      </nav>
    </div>
  )
}