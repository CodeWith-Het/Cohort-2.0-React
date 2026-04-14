import React, { useState } from 'react'

const App = () => {

const [allUser, setAllUser] = useState([])
const [name, setName] = useState('')
const [role, setRole] = useState('')
const [color, setColor] = useState('#000000')


const submithandler =(e) =>{
  e.preventDefault()

  if(!name || !role) return;

  const newAddUser = [...allUser,{name,role,color}]
  setAllUser(newAddUser)

  console.log(newAddUser)

  setName("")
  setRole("")

}

  return (
    <div className='h-screen w-screen bg-white flex flex-col items-center'>
      
      <h1 className='text-3xl font-extrabold mt-5 mb-10 text-center'>Live ID Card Generator</h1>

      <div className='flex w-full max-w-5xl items-center justify-center h-[60vh]'>

        <div className='w-1/3 flex flex-col items-center p-5'>
          <h3 className='text-2xl font-bold mb-5'>Enter Details</h3>

           <form className='w-full flex flex-col gap-4' 
            onSubmit={(e)=>{
              submithandler(e)
            }}
          >
            <div className='flex flex-col'>
              <label className='font-semibold mb-1'>Name</label>
              <input 
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }} 
                type="text" 
                placeholder='Enter Name'
                className='border-2 border-black p-2 rounded-md w-full'
              />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold mb-1'>Role</label>
              <input
              value={role}
              onChange={(e)=>{
                setRole(e.target.value)
              }} 
                type="text" 
                placeholder='Enter Role'
                className='border-2 border-black p-2 rounded-md w-full'
              />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold mb-1'>Text Color</label>
              <input 
              value={color}
              onChange={(e)=>{
                setColor(e.target.value)
              }}
                type="color"
                className='border-2 border-black h-10 w-full cursor-pointer rounded-md' 
              />
            </div>

            <button className='bg-blue-400 w-full h-10 text-white rounded-2xl hover:bg-blue-500 cursor-pointer'>Card Generator</button>
          </form>
          
        </div>

        <div className="h-full w-[2px] bg-black mx-10"></div>

        {/* Right side */}
      <div className='h-96 w-96 flex flex-col gap-3 items-center justify-center'>
        <h2 className='font-bold text-2xl'>Live Preview</h2>

        {allUser.map((elem,idx)=>{
          return <div key={idx} 
          className='h-65 w-full border-4 border-amber-500 bg-gray-200 flex flex-col items-center justify-center'
          style={{color:elem.color}}
          >
          <h1 className='text-6xl font-extrabold'>{elem.name}</h1>
          <h2 className='text-3xl'>{elem.role}</h2>
        </div>
        })}
      </div>

      </div>

    </div>
  )
}

export default App
