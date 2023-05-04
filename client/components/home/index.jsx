"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "./home.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";





  function HomePage() {
  const [data, setData] = useState({})
   useEffect(()=>{
     fetch("http://localhost:5500/")
      .then((res) => res.json())
      .then(data => setData(data))
    
    
  },[])
  return (
    <>
      <div className={Styles.contain}>
        <div className={Styles.photo}>
          <Image src={`/${data.photo}`} priority width={400} height={400} alt="baran genez" />
        </div>
        <div className={Styles.info}>
          <h1>{data.title}</h1>
          <h2>{data.subTitle}</h2>
          <div className={Styles.links}>
            <div>
              <Link href={`${data.gitHub}`} rel="nofollow"  title="github">
                <FaGithub />
              </Link>
            </div>
            <div>
              <Link href={`${data.linkedin}`} rel="nofollow" title="linkedin">
                <FaLinkedin />
              </Link>
            </div>
            <div>
              <Link href={`${data.twitter}`} rel="nofollow" title="twitter">
                <FaTwitter />
              </Link>
            </div>
            {/* <div><Link href={`${data.twitch}`}><FaTwitch/></Link></div>
            <div><Link href={`${data.youtube}`}><FaYoutube/></Link></div> */}
            {/* <div className={Styles.email}><Link href="mailto:barangenez@hotmail.com">Email</Link></div> */}
          </div>
          <p className={Styles.paragraph}>
            {data?.paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;