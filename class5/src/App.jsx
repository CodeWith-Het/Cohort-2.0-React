// import React,{useState} from 'react'

// const App = () => {

//     const [marks, setMarks] = useState([50,33,89,78,28])

//     const graceButton = () =>{

//         const gracingMarks=marks.map((elem)=>{
//         if(elem<33){
//                 return elem+5
//             }else{
//                 return elem
//             }
//         })
//         setMarks(gracingMarks)
//     }

//   return (
//     <div className='text-white text-4xl'>
//         {marks.map((elem,idx)=>(
//                <h1 key={idx}>student {idx+1}={elem} ({elem>=33?"PASS":"FAIL"})</h1> 
//             ))}
//             <button onClick={graceButton} className='border-2 border-white bg-green-400 px-3 py-3 mt-5 rounded-3xl text-black active:scale-[0.95]'>Gracing Marks</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Others from './components/Others'

const App = () => {
  const [gender, setGender] = useState("male")

  const chageGender = () =>{
    if(gender =="male"){
        setGender("female")
    }else if(gender !== "male" && gender == "female") {
        setGender("other")
    }else{
        setGender("male")
    }
  }

  return (
    <div>
      <h1 className='text-white text-6xl font-bold p-15'>{gender}</h1>
      <button onClick={chageGender} className='bg-gray-400 text-black font-bold text-4xl rounded-3xl px-5 py-5 mx-15 active:scale-[0.95] cursor-pointer'>Change Gender</button>      
      <div>{gender == "male"?<Mens />:gender == "female"?<Womens />:<Others />}</div>
    </div>

  )
}

export default App

