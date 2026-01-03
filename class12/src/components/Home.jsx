import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const Home = () => {
  return (
    <div className='h-screen w-screen relative overflow-hidden bg-white'>
      

      {/* Main Container - Flexbox se Left/Right divide kiya */}
      <div className='flex h-[calc(100vh-80px)] items-center px-20'>
        
        {/* Left Side Content */}
        <div className='w-1/2 flex flex-col gap-6 z-10'>
          <h3 className='text-xl font-semibold text-orange-500 tracking-widest uppercase'>Gen-Z HeadPhone</h3>
          <h1 className='text-7xl font-extrabold leading-tight text-slate-900'>
            Roco Wireless <br /> Headphone
          </h1>

          <div className='flex gap-6 items-center'>
            <button className='px-8 py-4 bg-amber-400 text-lg font-bold rounded-full text-white shadow-lg hover:scale-105 transition-transform'>
                <Link to='/about'>About Us</Link>
            </button>

            <div className='flex gap-4 items-center'>
                {/* Avatars */}
                <div className='flex -space-x-4'>
                    <div className='h-12 w-12 rounded-full border-2 border-white overflow-hidden'>
                        <img src="https://i.pinimg.com/736x/d1/5e/7c/d15e7c6cd82e15ddc552ee1a6d27bd89.jpg" alt="user" className='h-full w-full object-cover'/>
                    </div>
                    <div className='h-12 w-12 rounded-full border-2 border-white overflow-hidden'>
                        <img src="https://i.pinimg.com/736x/36/58/0e/36580e03efce7d32c6771ddd9028dc39.jpg" alt="user" className='h-full w-full object-cover'/>
                    </div>
                    <div className='h-12 w-12 rounded-full border-2 border-white overflow-hidden'>
                        <img src="https://i.pinimg.com/736x/36/58/0e/36580e03efce7d32c6771ddd9028dc39.jpg" alt="user" className='h-full w-full object-cover'/>
                    </div>
                </div>

                {/* Rating Section */}
                <div className='flex flex-col'>
                    <div className='flex text-amber-500'>
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" />
                        <Star size={18} fill="currentColor" className='opacity-30' />
                    </div>
                    <p className='text-sm font-bold text-gray-600'>4.8 <span className='font-normal'>(1.2k Reviews)</span></p>
                </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
       <div className='w-1/2 relative flex justify-center items-center'>
          <div className='relative h-[500px] w-[500px] bg-orange-100 rounded-full flex items-center justify-center overflow-hidden'>
          <img 
            src="https://i.pinimg.com/736x/1a/f7/d5/1af7d59f0cfb513babc0226db2f7e511.jpg" 
            alt="headphone" 
            className='h-full w-full object-cover' 
          />
       </div>

</div>  

      </div>
    </div>
  )
}

export default Home