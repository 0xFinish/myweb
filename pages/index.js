import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Introduction } from '../components/Introduction'

export default function Home() {
  return (
    <div className='text-white'>
      <Navbar></Navbar>
      <Introduction></Introduction>
    </div>
  )
}
