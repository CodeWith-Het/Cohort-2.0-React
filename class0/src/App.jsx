import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Bottom from './components/Bottom/Bottom';

const App = () => {
  return (
    <div>
      <Navbar />
      <LeftSide />
      <RightSide />
      <Bottom />
    </div>
  )
}

export default App
