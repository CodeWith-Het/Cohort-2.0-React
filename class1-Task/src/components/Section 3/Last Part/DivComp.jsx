import React from 'react'

const DivComp = () => {
  return (
    <div className='divcomp'>
      <div className='bottomdiv1'>
        <button className='serviceBtn'>service</button> 
        <p className='div1para1'>Explore our full range of coaching. we've training, and tennis experiences. From first serve to match point got the right program for you.</p>
        <button className='exploremorebtn'>Explore More</button>
      </div>

      <div className='bottomdiv2'>
        <button className='trainingbtn'>Training Program</button>
        <p className='div2para2'>Programs designed forall tags and abilities</p>
      </div>
      
     <div className="bottomdiv3">
  <div className="overlay"></div>

  <div className="innerCard">
    <button className="innerCardBtn">Court Access</button>
    <p className="innerCardpara">Hourly Court Rental</p>
  </div>

  <div className="bottomdiv3kabottom">
    <h3>
      Step into a space built for players — to grow, compete, and thrive.
    </h3>
  </div>
</div>

    </div>
  )
}

export default DivComp
