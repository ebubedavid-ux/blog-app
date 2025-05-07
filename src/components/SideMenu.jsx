import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Search</h1>
      <Search/>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Filters</h1>
      <div className='flex flex-col text-sm'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type='radio' name='sort' value='newset'className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'/>
          Newest
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type='radio' name='sort' value='popular'className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'/>
          Most Popular
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type='radio' name='sort' value='trending'className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'/>
         Trending
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input type='radio' name='sort' value='oldest'className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800'/>
          Oldest
        </label>
      </div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <Link className='underline ' to='/posts'>All</Link>
       <Link to='/posts?cat=web-design' className='underline '>
              Web Design
              </Link>
              <Link to='/posts?cat= Development'className='underline '>
              Development
              </Link>
              <Link to='/posts?cat=Databases' className='underline '>
              Databases
              </Link>
              <Link to='/posts?cat=seo' className='underline '>
              Search Engines
              </Link>
              <Link to='/posts?cat=Marketing' className='underline '>
              Marketing
              </Link>

      </div>
    </div>
  )
}

export default SideMenu
