"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("http://localhost:5500/")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])



  return (
   <>
    

    <header className='bg-black flex gap-8 text-white py-4 px-4'>
      <ul><Link href={"/"}>Anasayfa</Link></ul>
      <ul><Link href={"/"}>Blog</Link></ul>
      <ul><Link href={"/"}>Projects</Link></ul>
      <ul><Link href={"/"}>Header</Link></ul>
      <ul><Link href={"/"}>Footer</Link></ul>
    </header>


    <section id="Anasayfa" className='mt-24 border w-4/5 mx-auto'>
        <form className='flex flex-col gap-4' action='http://localhost:5500' method='POST'>
            <label className='home-label'>Title</label>
            <input className='home-input' type='text' name='title' defaultValue={data.title} placeholder='Title'/>
            <label className='home-label'>SubTitle</label>
            <input className='home-input' type='text' name='subTitle' defaultValue={data.subTitle} placeholder='SubTitle'/>
            <label className='home-label'>Github Link</label>
            <input className='home-input' type='text'  name='gitHub' defaultValue={data.gitHub} placeholder='Github Link'/>
            <label className='home-label'>Linkedin Link</label>
            <input className='home-input' type='text'  name='linkedin' defaultValue={data.linkedin} placeholder='Linkedin Link'/>
            <label className='home-label'>Twitter Link</label>
            <input className='home-input' type='text'  name='twitter' defaultValue={data.twitter} placeholder='Twitter Link'/>
            <label className='home-label'>Paragraph</label>
            <input className='home-input' type='text' name='paragraph' defaultValue={data.paragraph} placeholder='Paragraph'/>
            <label className='home-label'>Photo</label>
            <input className='home-input' type='text' name='photo' defaultValue={data.photo} placeholder='Photo'/>
            <input type='submit'/>
        </form>
    </section>





   </>
  )
}
