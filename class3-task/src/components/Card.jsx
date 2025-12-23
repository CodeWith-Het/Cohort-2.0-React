// Task 1 ka  code 
// import React from "react";

// const Card = ({ user }) => {
//   return (
//     <div className="m-10 h-96 w-72 bg-white rounded flex flex-col justify-center items-center gap-5">

//       <div className="h-16 w-16 rounded-full overflow-hidden">
//         <img
//           src={user.profile}
//           alt={user.fullName}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="text-center">
//         <h2 className="font-semibold text-2xl">{user.fullName}</h2>
//         <h4 className="text-gray-500 text-sm">@{user.fullName.split(" ")[0]}</h4>
//       </div>

//       <p className="text-sm text-center px-4">{user.title}</p>

//       <div className="flex gap-5">
//         <div className="flex flex-col items-center">
//           <h2 className="font-bold">{user.postCount}</h2>
//           <span className="text-sm">Posts</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <h2 className="font-bold">{user.likesCount}</h2>
//           <span className="text-sm">Likes</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <h2 className="font-bold">{user.viewsCount}</h2>
//           <span className="text-sm">Views</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Task 2 ka Code
// import React from "react";

// const Card = (props) => {
//   return (
//     <div className="h-[350px] w-72 rounded-3xl bg-gray-200 m-10 relative overflow-hidden">

//       <div className="p-1">
//         <img
//           src={props.image}
//           alt=""
//           className="h-[100px] w-full rounded-2xl object-cover"
//         />
//         <button className="bg-gray-200 absolute right-2 top-2 px-3 py-1 font-semibold text-sm rounded-full">
//           Follow +
//         </button>
//       </div>

//       <div className="h-24 w-24 rounded-full bg-white absolute top-14 left-5 overflow-hidden border-4 border-gray-200">
//         <img
//           src={props.profileImage}
//           alt=""
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="mt-16 ml-5 mr-5">
//         <h1 className="font-extrabold text-2xl">{props.name}</h1>
//         <p className="mt-1 text-sm text-gray-600">{props.bio}</p>
//       </div>

//       <div className="mt-5 mx-5 flex justify-between text-center">
//         <div>
//           <h2 className="font-extrabold text-lg">{props.stats.likes}</h2>
//           <h3 className="text-sm">Likes</h3>
//         </div>
//         <div>
//           <h2 className="font-extrabold text-lg">{props.stats.posts}</h2>
//           <h3 className="text-sm">Posts</h3>
//         </div>
//         <div>
//           <h2 className="font-extrabold text-lg">{props.stats.views}</h2>
//           <h3 className="text-sm">Views</h3>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Card;

// Task 3 ka code 
import React from 'react'

const Card = (props) => {
  return (
    <div className='h-96 w-72 bg-white overflow-hidden rounded-4xl m-10 relative'>
      <img src={props.image} alt="" className='w-full h-full rounded-4xl object-cover object-top' />

    <div className='absolute bottom-0 p-3 text-white w-full bg-white/30 backdrop-blur-lg border-t-4 border-white/30'>
    <h1 className='font-extrabold text-2xl'>{props.fullname}</h1>
    <p className='mt-2'>{props.bio}</p>

    <div className='flex gap-5 mt-5'>
    <div className='flex gap-2 items-center'>
      <i className="ri-user-3-fill"></i>
      <h1>{props.followersCount}</h1>
    </div>

    <div className='flex gap-2 items-center'>
      <i className="ri-chat-follow-up-fill"></i>
      <h1>{props.followingCount}</h1>
    </div>
     
     <button className='bg-gray-200 px-5 py- text-black font-semibold rounded-4xl cursor-pointer'>Follow +</button>
    </div>
    </div>
    </div>
  )
}

export default Card

