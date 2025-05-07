import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block xl:w-1/3'>
        <Image src='postImg.jpeg' className='rounded-2xl object-cover' w='735' />
      </div>

      <div className='flex flex-col gap-4 xl:w-2/3 '>
        <Link to='/slug' className='text-4xl font-semibold'>
        
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Written by</span>
          <Link className='text-blue-800'>John Doe</Link>
          <span>on</span>
          <Link className='text-blue-800'>Web Design</Link>
          <Link className=''></Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Animi eum iure commodi illum pariatur praesentium consequuntur 
          odit harum optio blanditiis! Eligendi unde quas odio in totam 
          cumque illum maxime consectetur?
        </p>
        <Link className='underline text-blue-800'>Read More</Link>
      </div>
    
    </div>
  )
}

export default PostListItem
