import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function MainCategories() {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
      <div className='flex-1 flex items-center justify-between flex-wrap'>
        <Link to='/posts' className='bg-blue-800 text-white rounded-full px-4 py-2'>
        All posts
        </Link>
        <Link to='/posts?cat=web-design' className='hover:bg-blue-50 rounded-full px-4 py-2'>
        Web Design
        </Link>
        <Link to='/posts?cat= Development' className='hover:bg-blue-50 rounded-full px-4 py-2'>
        Development
        </Link>
        <Link to='/posts?cat=Databases' className='hover:bg-blue-50 rounded-full px-4 py-2'>
        Databases
        </Link>
        <Link to='/posts?cat=seo' className='hover:bg-blue-50 rounded-full px-4 py-2'>
        Search Engines
        </Link>
        <Link to='/posts?cat=Marketing' className='hover:bg-blue-50 rounded-full px-4 py-2'>
        Marketing
        </Link>
      
      </div>
       <span className='text-xl font-medium'>|</span>
      <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <SearchIcon/>
        <input type='text' placeholder='search a post...' className='bg-transparent outline-none'/>
      </div>
    </div>
  )
}

export default MainCategories
