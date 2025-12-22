import React from 'react'
import Card from './components/Card'

// const users = [
//   {
//     fullName: "Aarav Sharma",
//     title: "Frontend Developer",
//     profile: "https://randomuser.me/api/portraits/men/11.jpg",
//     coverImage: "https://picsum.photos/800/300?random=1",
//     likesCount: 1240,
//     postCount: 45,
//     viewsCount: 18200,
//     followed: true
//   },
//   {
//     fullName: "Priya Patel",
//     title: "UI/UX Designer",
//     profile: "https://randomuser.me/api/portraits/women/21.jpg",
//     coverImage: "https://picsum.photos/800/300?random=2",
//     likesCount: 980,
//     postCount: 32,
//     viewsCount: 15400,
//     followed: false
//   },
//   {
//     fullName: "Rohan Mehta",
//     title: "Full Stack Engineer",
//     profile: "https://randomuser.me/api/portraits/men/31.jpg",
//     coverImage: "https://picsum.photos/800/300?random=3",
//     likesCount: 2150,
//     postCount: 78,
//     viewsCount: 26500,
//     followed: true
//   },
//   {
//     fullName: "Neha Verma",
//     title: "Product Manager",
//     profile: "https://randomuser.me/api/portraits/women/41.jpg",
//     coverImage: "https://picsum.photos/800/300?random=4",
//     likesCount: 1670,
//     postCount: 54,
//     viewsCount: 22100,
//     followed: false
//   },
//   {
//     fullName: "Aditya Singh",
//     title: "Backend Developer",
//     profile: "https://randomuser.me/api/portraits/men/51.jpg",
//     coverImage: "https://picsum.photos/800/300?random=5",
//     likesCount: 1320,
//     postCount: 39,
//     viewsCount: 18900,
//     followed: true
//   },
//   {
//     fullName: "Kavya Iyer",
//     title: "Data Analyst",
//     profile: "https://randomuser.me/api/portraits/women/61.jpg",
//     coverImage: "https://picsum.photos/800/300?random=6",
//     likesCount: 860,
//     postCount: 27,
//     viewsCount: 13200,
//     followed: false
//   },
//   {
//     fullName: "Arjun Kapoor",
//     title: "DevOps Engineer",
//     profile: "https://randomuser.me/api/portraits/men/71.jpg",
//     coverImage: "https://picsum.photos/800/300?random=7",
//     likesCount: 1740,
//     postCount: 61,
//     viewsCount: 24300,
//     followed: true
//   },
//   {
//     fullName: "Simran Kaur",
//     title: "Mobile App Developer",
//     profile: "https://randomuser.me/api/portraits/women/81.jpg",
//     coverImage: "https://picsum.photos/800/300?random=8",
//     likesCount: 1110,
//     postCount: 34,
//     viewsCount: 17650,
//     followed: false
//   },
//   {
//     fullName: "Vikram Joshi",
//     title: "Software Architect",
//     profile: "https://randomuser.me/api/portraits/men/91.jpg",
//     coverImage: "https://picsum.photos/800/300?random=9",
//     likesCount: 2890,
//     postCount: 102,
//     viewsCount: 35200,
//     followed: true
//   },
//   {
//     fullName: "Ananya Roy",
//     title: "Content Creator",
//     profile: "https://randomuser.me/api/portraits/women/12.jpg",
//     coverImage: "https://picsum.photos/800/300?random=10",
//     likesCount: 940,
//     postCount: 29,
//     viewsCount: 14100,
//     followed: false
//   }
// ];

// const App = () => {
//   return (
//     <div className="flex flex-wrap justify-center bg-black">
//       {users.map((user, index) => (
//         <Card key={index} user={user} />
//       ))}
//     </div>
//   )
// }

// export default App

// Task 2 ke liye

const profile = [
  {
    id: 1,
    name: "Het Patel",
    role: "Product Designer",
    bio: "Product Designer who focuses on simplicity & usability",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
    stats: { likes: "72.9K", posts: "828", views: "342.9K" }
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "UI Designer",
    bio: "Designing clean and user-friendly interfaces",
    coverImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    stats: { likes: "65.2K", posts: "540", views: "210.4K" }
  },
  {
    id: 3,
    name: "Neha Sharma",
    role: "UX Researcher",
    bio: "Turning user insights into great products",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    stats: { likes: "48.7K", posts: "312", views: "178.9K" }
  },
  {
    id: 4,
    name: "Rohan Verma",
    role: "Frontend Developer",
    bio: "Building fast and scalable UI",
    coverImage: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
    stats: { likes: "91.4K", posts: "980", views: "402.1K" }
  },
  {
    id: 5,
    name: "Priya Singh",
    role: "Graphic Designer",
    bio: "Visual storytelling with creativity",
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    stats: { likes: "56.8K", posts: "420", views: "233.6K" }
  },
  {
    id: 6,
    name: "Kunal Patel",
    role: "Product Manager",
    bio: "Bridging business and technology",
    coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
    stats: { likes: "77.3K", posts: "610", views: "319.2K" }
  },
  {
    id: 7,
    name: "Ananya Iyer",
    role: "Content Creator",
    bio: "Creating content that connects",
    coverImage: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
    stats: { likes: "39.9K", posts: "275", views: "154.8K" }
  },
  {
    id: 8,
    name: "Dev Malhotra",
    role: "Full Stack Developer",
    bio: "From backend logic to frontend polish",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
    stats: { likes: "102.6K", posts: "1204", views: "512.7K" }
  },
  {
  id: 11,
  name: "Riya Desai",
  role: "UI Designer",
  bio: "Designing modern and user-friendly interfaces",
  coverImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
  stats: {
    likes: "54.3K",
    posts: "389",
    views: "198.7K"
  }
},
{
  id: 12,
  name: "Mohit Sharma",
  role: "Frontend Developer",
  bio: "Building responsive and performant web apps",
  coverImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
  profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
  stats: {
    likes: "68.1K",
    posts: "512",
    views: "276.4K"
  }
},
];

const App = () => {
  return (
    <div className="flex flex-wrap justify-center">
        {profile.map((elem)=>{
            return <Card key={elem.id}
          name={elem.name}
          bio={elem.bio}
          image={elem.coverImage}
          profileImage={elem.profileImage}
          stats={elem.stats} />
        })}
    </div>
  )
}

export default App
