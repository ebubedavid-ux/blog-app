import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import { ArrowUpRight } from 'lucide-react'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

function Homepage() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex gap-4'>
          <Link to='/'>Home</Link>
          <span>.</span>
          <span className='text-blue-800'>Blogs and Articles</span>
      </div>
      <div className='flex items-center justify-between'>
      

      <div className=''>
        <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
          Lorem ipsum dolor, sit amet consr adipisicing elit. </h1>
        <p className='mt-8 text-md md:text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat pariatur quidem 
        </p>
      </div>

      <Link to='write' className='hidden md:block relative'>
      <svg 
       viewBox='0 0 200 200'
       width='200'
       height='200'
       //className='text-lg tracking-widest animate-spin animatedButton' 
       className='text-lg tracking-widest '
      >
        <path
        id='circlePath'
        fill='none'
        d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
        />
        <text>
            <textPath href='#circlePath' startOffset='0%'>Write your story .</textPath>
            <textPath href='#circlePath'  startOffset='50%'>Share your idea .</textPath>
        </text>
      </svg>
      <button className=' absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center'>
    <ArrowUpRight className='text-white'/>
      </button>
      </Link>
      </div>

    <MainCategories/>
    <FeaturedPosts/>

    <div className=''>
      <h1 className='my-8 text=2xl text-gray-600'>Recent Posts</h1>
      <PostList/>
    </div>

    </div>
  )
}

export default Homepage
