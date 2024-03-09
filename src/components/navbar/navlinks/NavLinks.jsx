"use client"

import styles from "./navlinks.module.css"
import NavLink from "./navlink/NavLink"
import { useState } from 'react'
import Image from "next/image"

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Store",
    path: "/business",
  },
]

const NavLinks = () => {

    const [open, setOpen] = useState(false)

  // Temporary
  const session = true
  const isAdmin = false
    return (
      <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link, idx) => (
        <NavLink item={link} key={idx} />
      ))}
      {session ? (
              <>
                  {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                    <button className={styles.logout}>Logout</button>
              </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
            </div>
        <Image
          className={styles.menuBtn}
          src="/menu.png"
          alt="menuButton"
          width={30}
          height={30}
          onClick={() => setOpen(prev => !prev)} />
            {
                open && <div className={styles.mobileMenu}>
                    {links.map((link, idx) => (
                        <NavLink item={link} key={idx} />
                    ))}
                </div>
            }
            </div>
  )
}

export default NavLinks
