import React from 'react'
import Card from './components/Card'

const users = [
  {
    fullName: "Aarav Sharma",
    title: "Frontend Developer",
    profile: "https://randomuser.me/api/portraits/men/11.jpg",
    coverImage: "https://picsum.photos/800/300?random=1",
    likesCount: 1240,
    postCount: 45,
    viewsCount: 18200,
    followed: true
  },
  {
    fullName: "Priya Patel",
    title: "UI/UX Designer",
    profile: "https://randomuser.me/api/portraits/women/21.jpg",
    coverImage: "https://picsum.photos/800/300?random=2",
    likesCount: 980,
    postCount: 32,
    viewsCount: 15400,
    followed: false
  },
  {
    fullName: "Rohan Mehta",
    title: "Full Stack Engineer",
    profile: "https://randomuser.me/api/portraits/men/31.jpg",
    coverImage: "https://picsum.photos/800/300?random=3",
    likesCount: 2150,
    postCount: 78,
    viewsCount: 26500,
    followed: true
  },
  {
    fullName: "Neha Verma",
    title: "Product Manager",
    profile: "https://randomuser.me/api/portraits/women/41.jpg",
    coverImage: "https://picsum.photos/800/300?random=4",
    likesCount: 1670,
    postCount: 54,
    viewsCount: 22100,
    followed: false
  },
  {
    fullName: "Aditya Singh",
    title: "Backend Developer",
    profile: "https://randomuser.me/api/portraits/men/51.jpg",
    coverImage: "https://picsum.photos/800/300?random=5",
    likesCount: 1320,
    postCount: 39,
    viewsCount: 18900,
    followed: true
  },
  {
    fullName: "Kavya Iyer",
    title: "Data Analyst",
    profile: "https://randomuser.me/api/portraits/women/61.jpg",
    coverImage: "https://picsum.photos/800/300?random=6",
    likesCount: 860,
    postCount: 27,
    viewsCount: 13200,
    followed: false
  },
  {
    fullName: "Arjun Kapoor",
    title: "DevOps Engineer",
    profile: "https://randomuser.me/api/portraits/men/71.jpg",
    coverImage: "https://picsum.photos/800/300?random=7",
    likesCount: 1740,
    postCount: 61,
    viewsCount: 24300,
    followed: true
  },
  {
    fullName: "Simran Kaur",
    title: "Mobile App Developer",
    profile: "https://randomuser.me/api/portraits/women/81.jpg",
    coverImage: "https://picsum.photos/800/300?random=8",
    likesCount: 1110,
    postCount: 34,
    viewsCount: 17650,
    followed: false
  },
  {
    fullName: "Vikram Joshi",
    title: "Software Architect",
    profile: "https://randomuser.me/api/portraits/men/91.jpg",
    coverImage: "https://picsum.photos/800/300?random=9",
    likesCount: 2890,
    postCount: 102,
    viewsCount: 35200,
    followed: true
  },
  {
    fullName: "Ananya Roy",
    title: "Content Creator",
    profile: "https://randomuser.me/api/portraits/women/12.jpg",
    coverImage: "https://picsum.photos/800/300?random=10",
    likesCount: 940,
    postCount: 29,
    viewsCount: 14100,
    followed: false
  }
];

const App = () => {
  return (
    <div className="flex flex-wrap justify-center bg-black">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  )
}

export default App
