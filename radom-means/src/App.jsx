import React, { useState } from 'react'
import axios from "axios"

const App = () => {

const [mems, setMems] = useState(null)

const getMemsData = async () =>{
  const answer = await axios.get("https://api.imgflip.com/get_memes")

  const merge = answer.data.data.memes

  const r1 = Math.floor(Math.random()*(answer.data.data.memes.length))
  setMems(merge[r1])
}

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-red-800 gap-5'>

      <h1 className='text-2xl text-white font-bold'>😂 Mems gernator</h1>
      <img src={mems?.url} alt="" className='h-72 w-62 object-cover ' />

        <button 
        onClick={()=>getMemsData()}
        className='px-4 py-2 bg-green-600 text-white rounded-3xl border-0 hover:bg-green-700 active:scale-95 cursor-pointer'>New Mems Gernated</button>
    </div>
  )
}

export default App

// https://api.imgflip.com/get_memes   this is api