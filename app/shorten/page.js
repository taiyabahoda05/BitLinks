"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

const Shorten = () => {
    const [url, seturl] = useState('');
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)
    
    const generate = async () => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
  
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
    }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='text-2xl font-bold mb-4'>Generate your short URLs</h1>
      <div className='flex flex-col gap-5'>
        <input type="text" 
        value={url}
        placeholder='Enter your URL here' 
        className='px-4 py-2 rounded-md bg-white
        focus:outline-purple-600' 
        onChange={e => seturl(e.target.value)}/>

        <input type="text"
        value={shorturl}
         placeholder='Enter preferred short URL' className='px-4 py-2 rounded-md bg-white focus:outline-purple-600'
         onChange={e => setshorturl(e.target.value)}/>

        <button onClick={generate} className='bg-purple-500 text-white rounded-lg shadow-lg font-bold py-1 cursor-pointer' >Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your Link</span> <code> <Link target="_blank" href={generated}>{generated}</Link>
      </code></>}

    </div>
  )
}

export default Shorten