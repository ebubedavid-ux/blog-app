import React from 'react'
import Image from './Image'

function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className=''>
        <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40'/>
        <span className='font-medium'>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>

      <div className='mt-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fuga temporibus, nostrum culpa eligendi maiores a iure vol
          uptatem totam. Earum, impedit ipsam eveniet recusandae i
          psa quo voluptates vitae magni! Rerum, iure.
        </p>
      </div>
    </div>
  )
}

export default Comment
