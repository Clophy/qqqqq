"use client"
import React from "react";
import Script from "next/script";
import HomePage from "@/components/home";



export default function Home() {
  

  return (
    <>
    

    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KN9FKWZCV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3KN9FKWZCV');
        `}
      </Script>
   <HomePage />

    </>
  )
}
