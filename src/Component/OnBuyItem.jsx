import React from 'react'

export const OnBuyItem = () => {
  return (
    <>
      {/* header */}
      <div className='header'>
        <div>
          <img src="assets/av-logo.png" alt="Image" class="img-fluid" style={{ height: "60px", margin: "auto"}}/>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginLeft: "auto", marginEnd: "0px"}}>
          <h1 className="header-text">Username</h1>
          <img src="assets/profile.png" alt="Image" class="img-fluid" style={{ height: "60px", margin: "auto"}}/>
        </div>
      </div>

      {/* konten */}
      <div className="item-container-buy">
        <div className='deskripsi'>
          <label><b>TITLE</b></label>
          <img src="assets/av-logo-ijo.png" alt="Image" class="img-fluid"className='in' style={{ width :"100%" , maxWidth: "500px"}} />  
        </div>
        <div className='deskripsi'>
          <label><b>Username</b></label>
          <input type="textarea" className='textarea'/>
        </div>  
      </div>
    
      {/* konten */}
      <div className="item-container-bid">
        <div>
          <label style={{ fontFamily:"Poppins" }}><b>START BID</b></label>
        </div>
        <div class='deskripsi'>
          <input type="text" class='in'/>
        </div>  
        <div>
          <label style={{ fontFamily:"Poppins" }}><b>BUY OUT</b></label>
        </div>
        <div class='deskripsi'>
          <input type="text" class='in'/>
        </div> 
      </div>

      {/* Reminder */}
      <div className='reminder'>
        <label style={{ fontFamily:"Poppins", color:"#DDE2E3"}} >Remaining : </label><span> <b> 1d 10h 24m 07s</b></span>
      </div>
    

      {/* Button */}
      <div className="item-container-bid">
        <div>
          <button className='btnone'>BID AT</button>
        </div>
        <div class='deskripsi'>
          <input type="text" class='in'/>
        </div>  
        <div>
          <button className='btntwo'>BUY OUT</button>
        </div>
        <div class='deskripsi'>
          <input type="text" class='in'/>
        </div> 
      </div>
    </>
  )
}
