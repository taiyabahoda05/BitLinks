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
    if (!result.success) {
      alert(result.message)
      return
    }

    setGenerated(`${window.location.origin}/${shorturl}`)
    seturl("")
    setshorturl("")
    alert(result.message)
  })
  .catch((error) => console.error(error));
    }

  return (
    <div className='mx-4 my-8 flex w-auto max-w-lg flex-col gap-4 rounded-lg bg-purple-100 p-5 sm:mx-auto sm:my-12 sm:w-[calc(100%-3rem)] sm:p-8'>
      <h1 className='mb-2 text-2xl font-bold sm:mb-4'>Generate your short URLs</h1>
      <div className='flex flex-col gap-5'>
        <input type="text" 
        value={url}
        placeholder='Enter your URL here' 
        className='min-w-0 rounded-md bg-white px-4 py-2
        focus:outline-purple-600' 
        onChange={e => seturl(e.target.value)}/>

        <input type="text"
        value={shorturl}
         placeholder='Enter preferred short URL' className='min-w-0 rounded-md bg-white px-4 py-2 focus:outline-purple-600'
         onChange={e => setshorturl(e.target.value)}/>

        <button onClick={generate} className='cursor-pointer rounded-lg bg-purple-500 py-2 font-bold text-white shadow-lg' >Generate</button>
      </div>

      {generated && <>
        <span className='text-lg font-bold'>Your Link</span> <code className="min-w-0 break-all"><Link target="_blank" href={generated}>{generated}</Link>
      </code></>}

    </div>
  )
}

export default Shorten