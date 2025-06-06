import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  console.log("Environment Variables:", import.meta.env);
 console.log("ImageKit URL:", import.meta.env.VITE_IK_URL_ENDPOINT);


  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      <Link to='/'  className=' flex items-center gap-4 text-2xl font-bold'>
        <Image src='logo.png' alt='lin logo' w={32} h={32} />
      <span>EnoBlog</span>
      </Link>
      <div className='md:hidden'>
        <div
        className='cursor-pointer text-2xl'
        onClick={() => setOpen(prev => !prev)}>
        {open ? 'x' : '='}
        </div>
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-#e6e6ff transition-all  ease-in-out
         ${ open ? '-right-0' : '-right-[100%]'}`}>
          <Link to='/'>Home</Link>
          <Link to='/'>Trending</Link>
          <Link to='/'>Most Popular</Link>
          <Link to='/'>About</Link>
          <Link to=''>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>login 😎</button>
          </Link>
          </div>
      </div>
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
          <Link to='/'>Home</Link>
          <Link to='/'>Trending</Link>
          <Link to='/'>Most Popular</Link>
          <Link to='/'>About</Link>

          <SignedOut>
          <Link to='/login'>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>login 😎</button>
          </Link>
          <SignedOut></SignedOut>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
