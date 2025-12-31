import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

const [user, setuser] = useState([])
const [bgColor, setBgColor] = useState("#ffffff")

const bgColorGenerate = ()=>{
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)

  setBgColor(`rgb(${r},${g},${b})`)
}

const getData =async () =>{
  const answer = await axios.get("https://randomuser.me/api/")

  // this information
  // console.log(answer.data.results[0].picture.large)
  // console.log(answer.data.results[0].name.first)
  // console.log(answer.data.results[0].dob.date)
  // console.log(answer.data.results[0].email)
  // console.log(answer.data.results[0].location.city)


  // setuser(answer.data.results[0].picture.large)
  // setuser(answer.data.results[0].name.first)
  // setuser(answer.data.results[0].dob.date)
  // setuser(answer.data.results[0].email)
  // setuser(answer.data.results[0].location.city)

  setuser(answer.data.results)
  bgColorGenerate();  
}
  return (
    <>
    <div>
    {user.map(function(elem,idx){
      return <div key={idx} className='main'
      style={{backgroundColor:bgColor}}>
        <div className='img-div'>
            <img src={elem.picture.large} alt="" />
        </div>
        <div className='info-div'>
        <h2>{elem.name.first}</h2>
        <h3>{elem.dob.date}</h3>
        <p>{elem.email}</p>
        <p>{elem.location.city}</p>
        </div>
    </div>
    })
  }
  
   <button onClick={getData}>Get New User</button>
  </div>
  </>
  )
}

export default App
