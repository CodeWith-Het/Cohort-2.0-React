import React, { useState } from 'react'

const App = () => {

const [expands, setExpands] = useState([])
const [titel, setTitel] = useState("")
const [amount, setAmount] = useState("")

const addHandler =(e) =>{
   e.preventDefault()

    if (!titel || !amount) return
  
   setExpands([...expands,{titel,amount}])

   setTitel("")
   setAmount("")
}

const deleteHandler = (idx) =>{
 const copyexpands = [...expands] 
 copyexpands.splice(idx,1);
 setExpands(copyexpands)
}

const totalAmount = expands.reduce((sum,elem)=>{
  return sum+Number(elem.amount)
},0)

  return (
    <div className='h-screen w-screen bg-black flex flex-col items-center justify-center gap-5'>
      <h1 className='text-white font-extrabold text-4xl '>Home Diary only 1 ruppes</h1>
      < div className='h-fit w-[50%] bg-gray-300 '>
        <form>
          <input 
          onChange={(e)=>{
            setTitel(e.target.value)
          }}
          value={titel}
        type="text" 
        className='border-2 w-[40%] mt-5 ml-5 px-2 py-2' 
        placeholder='Enter your Khana aur pina (e.g. chai,sugar)'
        />

        <input 
        onChange={(e)=>{
          setAmount(e.target.value)
        }}
        value={amount}
        type="number" 
        className='border-2 w-[40%] mt-5 ml-3 px-2 py-2' 
        placeholder='Enter of amount (e.g. chai,sugar)'
        />

        <button 
        onClick={addHandler}
        className='border-2 px-4 py-2 ml-4 bg-green-500 text-white rounded text-lg active:scale-95 hover:bg-green-600 cursor-pointer'>
            Add
        </button>

        </form>

        <section className='mt-2'>
          {expands.map(function(elem,idx){
            return <> 
            <div key={idx} className='flex items-center'>
          <div className='w-[85%] h-10 bg-white mt-5 ml-5 flex justify-between'>
            <h4 className='px-6 py-2'>{elem.titel}</h4>
            <h4 className='px-6 py-2'>{elem.amount} ₹</h4>
          </div>
            <button
                onClick={() => deleteHandler(idx)}
                className='active:scale-95 mt-5 ml-2'
              >
                <i className="ri-close-fill bg-red-600 px-4 py-3 text-white rounded-lg hover:bg-red-700"></i>
              </button>
        </div>
          </>
          })}
      </section>
    
          <h4 className='px-2 py-2 text-center w-[100%] h-10 bg-white mt-5 '>Total Khana And Pina:{totalAmount}</h4>

      </div>
    </div>
  )
}

export default App
