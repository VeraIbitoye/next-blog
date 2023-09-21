import React from "react";
import Styles from './navbar.module.css'
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLink from "../authLinks/AuthLink";

const Navbar = () => {
  return (
    <div className={Styles.container}>
          <div className={Styles.social}>
<img src="/facebook.png" alt="facebook" width={24} height={24} />
<img src="/instagram.png" alt="instagram" width={24} height={24}/>
<img src="/tiktok.png" alt="tiktok" width={24} height={24}/>
<img src="/youtube.png" alt="youtube" width={24} height={24}/>
          </div>
          <div className={Styles.logo}>lamablog </div>
          <div className={Styles.links}>
            <ThemeToggle/>
            <a  href="/">Homepage</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
            <AuthLink/>
          </div>
    </div>
  )
}

export default Navbar
