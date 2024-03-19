import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col mt-10 text-white bottom-0'>
      <div className='w-full text-center text-lg font-bold bg-slate-400 py-5'>
        <Link href={''}>Back To top</Link>
      </div>
      <div className='flex justify-evenly w-full bg-slate-600 py-10'>
        <div>
          <h1 className='text-xl font-bold mb-3'>Get to know me</h1>
          <ul className='ml-3 space-y-3'>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={'/aboutTheProject'}>About The App</Link></li>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={''}>About Me</Link></li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-bold mb-3'>Connect with me</h1>
          <ul className='ml-3 space-y-3'>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={''}>GitHub</Link></li>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={''}>Linked In</Link></li>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={''}>Instagram</Link></li>
            <li><Link className='hover:bg-slate-500 px-2 py-1 rounded-md' href={''}>Facebook</Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer