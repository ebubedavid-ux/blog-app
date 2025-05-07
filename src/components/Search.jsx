import { SearchIcon } from 'lucide-react'
import React from 'react'

function Search() {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
      <SearchIcon/>
      <input type='text' placeholder='search a post...' className='bg-transparent outline-none '/>
    </div>
  )
}

export default Search
