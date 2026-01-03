import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Smart Phone 12",
    price: "$799",
    img: "https://i.pinimg.com/736x/74/c3/7b/74c37b1641467d6145d3090fc8fdb7f3.jpg",
  },
  {
    id: 2,
    name: "Microwave Oven",
    price: "$249",
    img: "https://i.pinimg.com/736x/ee/98/bd/ee98bdeb579b09d6939c30236b851d70.jpg",
  },
  {
    id: 3,
    name: "Blender",
    price: "$129",
    img: "https://i.pinimg.com/1200x/ee/78/4d/ee784da6760159bf9a3d8bda6dd3e93b.jpg",
  },
  {
    id: 4,
    name: "Gaming Console",
    price: "$499",
    img: "https://i.pinimg.com/1200x/2c/c4/64/2cc46417e69524e95eade7fe29ab7556.jpg",
  },
  {
    id: 5,
    name: "Security Camera",
    price: "$99",
    img: "https://i.pinimg.com/1200x/95/68/56/95685627182ca9f5af846a218fa83b68.jpg",
  },
  {
    id: 6,
    name: "WiFi Router",
    price: "$149",
    img: "https://i.pinimg.com/736x/06/74/d3/0674d31730251da2d8a34684a78ed545.jpg",
  },
  {
    id: 7,
    name: "Coffee Machine",
    price: "$299",
    img: "https://i.pinimg.com/736x/76/56/f9/7656f9b20713336b037e30fe87085cf6.jpg",
  },
  {
    id: 8,
    name: "Laptop Pro",
    price: "$1299",
    img: "https://i.pinimg.com/736x/76/56/f9/7656f9b20713336b037e30fe87085cf6.jpg",
  },
];

const Shop = () => {
  return (
    <div className='w-full min-h-screen bg-black text-white overflow-y-auto'>

      {/* Left Side And Upper Part*/} 
      <div className='min-h-screen w-full flex items-center justify-between px-20'>

        <div className='flex flex-col gap-8 w-[600px]'>
          <h1 className='text-7xl w-[700px]'>
            Next Generation Virtual Reality
          </h1>

          <p className='text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus incidunt, dignissimos in quidem iusto ad quae nesciunt explicabo esse.
          </p>

          <button className='px-10 py-2.5 bg-blue-600 rounded-full text-lg font-bold text-white w-fit'>
            <Link to='/contact'>Contact</Link>
          </button>
        </div>

        {/* Right Side*/}
        <div className='h-96 w-96 rounded-full overflow-hidden'>
          <img
            src="https://i.pinimg.com/736x/ad/1a/62/ad1a62dd42ad4c3358bdcbe095eb0bac.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </div>
      </div>

      {/* Seller Part */}
      <div className="bg-[#2b2b2b] min-h-screen px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col "
            >
              <div className="h-48 w-full flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="mt-4 text-center text-black">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button className='text-white px-1 py-3 bg-red-500 w-fullm rounded-4xl mt-2 cursor-pointer'>Add</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Shop
