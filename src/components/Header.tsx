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
          <Link href='/#about'>About</Link>
          <Link href='/#experience'>Experience</Link>
          <Link href='/#projects'>Projects</Link>
        </div>
      </nav>
    </div>
  )
}