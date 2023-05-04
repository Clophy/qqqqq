"use client"
import React from "react";
import '@/styles/global.css'
import {Noticia_Text} from '@next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Analytics} from '@vercel/analytics/react'

const notic = Noticia_Text({subsets:["latin"], weight:["400","700"]})

export default function RootLayout({ children }) {

 

  return (
    <html lang="tr">
      
      <head />
      <body className={notic.className}>
      <Header/>
      <main>
      {children}
      <Analytics/>
      </main>
      <Footer/>
      </body>
    </html>
  )
}
