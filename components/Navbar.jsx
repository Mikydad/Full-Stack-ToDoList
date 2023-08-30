import Link from 'next/link'
import React from 'react'
import { global } from 'styled-jsx/css'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-500 px-8 py-3">
        <Link href='/' className='text-white font-bold'>BlogList.</Link>
        <Link href='/addTopic' className='bg-white p-2'>Add Topic.</Link> 
    </nav>
  )
}

export default Navbar