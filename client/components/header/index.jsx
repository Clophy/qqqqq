"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Styles from './header.module.css'
import {GiHamburgerMenu} from "react-icons/gi"
import { usePathname } from 'next/navigation'


function Header() {
  const pathname = usePathname();
  
  const [active, setActive] = useState(pathname)
  const [hamburger, setHamburger] = useState(false)
 
   return (
    <>
    <header className={Styles.header}>
        <div className={Styles.logo}>
            <div className={Styles.name}>Baran Genez</div>
            <div className={Styles.title}>Front-End Developer</div>
        </div>
        <nav className={Styles.navbar}>
              <div className={Styles.hamburger} onClick={()=> setHamburger(!hamburger)}><GiHamburgerMenu/></div>
            <ul className={`${hamburger ? "flex":"hidden"} `}>
                <li onClick={() => {setActive(1); setHamburger(false)}} className={`${active == "/" && "text-[#61D0D4]"}`}><Link href="/" title='Home'>HOME</Link></li>
                <li onClick={() => {setActive(2); setHamburger(false)}} className={`${active == "/blog" && "text-[#61D0D4]"}`}><Link href="/blog" title='Blog'>BLOG</Link></li>
                <li onClick={() => {setActive(3); setHamburger(false)}} className={`${active == "/projects" && "text-[#61D0D4]"}`}><Link href="/projects" title='Projects'>PROJECTS</Link></li>
                {/* <li onClick={() => {setActive(4); setHamburger(false)}} className={`${active == 4 && "text-[#61D0D4]"}`}><Link href="/">SOME</Link></li> */}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header