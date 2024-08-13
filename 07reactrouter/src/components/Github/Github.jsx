import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("http://api.github.com/users/adityathakur17")
    //     .then(res=>res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-orange-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className="rounded-full " src={data.avatar_url}  alt="Git Picture" />
    </div>
    
  )
}

export default Github

export const  githubInfoLoader = async()=>{
    const response = await fetch("http://api.github.com/users/adityathakur17")
    return response.json()
}