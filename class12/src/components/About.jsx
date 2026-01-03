import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='h-full w-full overflow-y-auto'>
      <div className='bg-black h-full w-full px-20 flex items-center justify-around'>

        {/* Left Side */}
        <div className='w-1/2 flex flex-col gap-8 text-white'>
        <h1 className='text-7xl font-bold tracking-tight'>
          Fiha Headphones
        </h1>
        
        <p className='text-white text-lg w-[550px] leading-relaxed'>
          Experience premium sound with deep bass, noise-free clarity, and comfort designed for everyday use. Step into a new world of music.
        </p>

        <button className='bg-[#007bff] hover:bg-[#0056b3] transition-all w-fit px-8 py-4 rounded-lg gap-3 font-bold text-sm uppercase tracking-widest shadow-lg shadow-blue-500/20'>
        <Link className='flex items-center gap-3' to='/shop'>
          Shop Now <ArrowRight size={20} />
        </Link>
        </button>
        </div>

        {/* right side */}
        <div className='bg-pink-500 h-92 w-92 rounded-full overflow-hidden'>
            <img src="https://i.pinimg.com/736x/74/c3/7b/74c37b1641467d6145d3090fc8fdb7f3.jpg" alt="" className='h-full w-full object-cover'/>
        </div>
    </div>

        {/* Bottom Part */}
         <div className="min-h-screen w-full flex items-center justify-around gap-20">

          {/* left side */}
          <div className='h-96 w-96 rounded-full overflow-hidden'>
              <img src="https://i.pinimg.com/736x/ee/98/bd/ee98bdeb579b09d6939c30236b851d70.jpg" alt="" className='h-full w-full object-cover'/>
          </div>

          {/* right side */}
          <div className='flex flex-col gap-6'>
            <h1 className='font-extrabold text-5xl'>Why Choose Fiha</h1>
            <p className='w-[600px] text-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla officia inventore id assumenda, quibusdam nesciunt saepe reiciendis laborum voluptatem beatae dolorem soluta, ab excepturi!</p>


            <div className='border-2 px-4 py-4 flex flex-col gap-5'>            
            {/* Upper details */}
            <div className='flex flex-col'>
              <h3 className='text-xl font-bold mb-2'>Key Futured</h3>
              <div className='flex gap-7'>
              <span className='w-[200px]'>
                <h3>features 1</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolorum.</p>
              </span>

              <span className='w-[200px]'>
                <h3>features 2</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolorum.</p>
              </span>

              </div>
            </div>

            {/* Bottom Details */}
            <div className='flex flex-col gap-5'>
      
              <div className='flex gap-7'>
              <span className='w-[200px]'>
                <h3>features 3</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolorum.</p>
              </span>

              <span className='w-[200px]'>
                <h3>features 4</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolorum.</p>
              </span>
              
              </div>
            </div>
            </div>

          </div>
        </div>
  </div>

  )
}

export default About
