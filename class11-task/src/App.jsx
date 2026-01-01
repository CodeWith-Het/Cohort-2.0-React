import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [jokes, setJokes] = useState(null)

const getData = async () => {
  const answer = await axios.get("https://official-joke-api.appspot.com/random_joke")
  // console.log()
  // console.log(answer.data.setup)
  setJokes(answer.data)
}

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl mb-5'>😂 Joke Generator</h1>

      {/* card */}
      <div className='h-[200px] bg-gray-200 text-black w-[500px] flex flex-col justify-end items-center rounded-2xl gap-1'>

            <h3 className='px-8 py-2 text-xl w-fit text-center'>{jokes?.setup}</h3>
            <h3 className='px-5 py-1 text-xl text-blue-500 w-fit text-center'>{jokes?.punchline}</h3>

        <button 
        className=' w-fit bg-red-600 text-white border-0 hover:bg-red-700 active:scale-95 cursor-pointer px-3 py-3 rounded-4xl mb-5'
        onClick={()=>getData()}
        >Get New Joke</button>
      </div>
    </div>
  )
}

export default App