import { useAuth, useUser } from '@clerk/clerk-react'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

function Write() {
  
  const {isLoaded, isSignedIn} = useUser()
  const [value, setValue] = useState("");

 // const navigate = useNavigate();

  const {getToken} = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    
//  onSuccess:(res)=>{
//navigate(`/${res.data.slug}`);
 // }
  });


  if(!isLoaded){
    return <div className=''>Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className=''>You should login!</div>
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
   

    console.log("Submitting Data:", data);

    mutation.mutate(data);

  };

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
        <input  name="title" className='text-4xl font-semibold bg-transparent outline-none' type='text' placeholder='My Awesome Story'/>
        <div className='flex items-center gap-4'>
          <label className='text-sm'>Choose a category</label>
          <select name='category' id='' className='p-2 rounded-xl bg-white shadow outline-none'>
            <option value='general'>General</option>
            <option value='web Design'>Web Design</option>
            <option value='databases'>Databases</option>
            <option value='databases'>Databases</option>
            <option value='search Engines'>Search Engines</option>
            <option value='marketing'>Marketing</option>
           
          </select>
        </div>
        <textarea className='p-4 rounded-xl bg-white shadow ' name='desc' placeholder='A Short Description'/>
        <ReactQuill theme='snow' className='flex-1 rounded-xl bg-white shadow '   
        value={value} onChange={setValue}/>
        <button disabled={mutation.isPending}   type="submit"  className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed'>
          {mutation.isPending ? 'loading...' : 'Send'}
          </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  )
}

export default Write;
