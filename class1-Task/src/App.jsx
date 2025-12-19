import React from 'react'
import Navbar from './components/Section 1/Navbar/Navbar'
import Center from './components/Section 1/Center/Center'
import Top from './components/Section 2/Top/Top'
import CenterSide from './components/Section 2/Center/CenterSide'
import BottomPart from './components/Section 2/Bottom/BottomPart'
import DivComp from './components/Section 3/Last Part/DivComp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Center />
      <Top />
      <CenterSide />
      <BottomPart />
      <DivComp />
    </div>
  )
}

export default App
