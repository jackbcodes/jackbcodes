import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import Meta from './meta'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SocialIcon from './SocialIcon'
import Link from 'next/link'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 16))
  }, [scrollY])

  const socialLinks = [
    { href: 'https://twitter.com/jackbcodes', icon: <FaTwitter /> },
    { href: 'https://www.instagram.com/jackbcodes/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/in/jack-brown-34462b179/', icon: <FaLinkedin /> },
    { href: 'https://github.com/jackbcodes', icon: <FaGithub /> },
  ]
  return (
    <>
      <Meta />
      <div className='bg-white dark:bg-gray-900 min-h-screen'>
        <header className='sticky top-0 z-50'>
          <nav
            className={`bg-white dark:bg-gray-900 px-4 lg:px-6 py-6 transition-shadow duration-200 ease-in-out ${
              isScrolled ? 'shadow-md dark:shadow-lg' : ''
            }`}
          >
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
              <Link href='/' className='flex items-center'>
                <span className='self-center text-2xl font-outfit font-semibold whitespace-nowrap dark:text-white'>
                  jackbcodes
                </span>
              </Link>
              <ul className='flex flex-row space-x-3 lg:space-x-4'>
                {socialLinks.map(({ href, icon }) => (
                  <li key={href}>
                    <SocialIcon href={href} icon={icon} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
