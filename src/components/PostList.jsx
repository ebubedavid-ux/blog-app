import React from 'react'
import PostListItem from './PostListItem'
import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const fetchPosts = async (pageParam, searchParams) => {
 // const searchParamsObj = Object.fromEntries([...searchParams]);

 // console.log(searchParamsObj);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`,
    // {
   // params: { page: pageParam, limit: 10, ...searchParamsObj }},
);
  return res.data;
};

function PostList() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts()
     
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <div className='flex flex-col gap-12 mb-8'>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </div>
  )
}

export default PostList
