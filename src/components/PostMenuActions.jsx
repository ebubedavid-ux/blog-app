import { BookmarkIcon, TrashIcon } from 'lucide-react'
import React from 'react'

function PostMenuActions() {
  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <BookmarkIcon/>
        <span>Save this Post</span>
      </div>
    
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <TrashIcon className='text-red-600'/>
        <span>Delete this Post</span>
      </div>
    </div>
    
  )
}

export default PostMenuActions
