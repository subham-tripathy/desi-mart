import React from 'react'
import Link from 'next/link'

const AllCategoryLink = ({ image, text, url}) => {
  return (
    <div className='w-32'>
        <Link href={url} className='flex flex-col'>
            <img src={image} className='border border-slate-400'/>
            <p className='text-xs'>{text}</p>
        </Link>
    </div>
  )
}

export default AllCategoryLink