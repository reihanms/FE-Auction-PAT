import React from 'react'

export const BuyFinished = () => {
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
      </div><br />

      <div className="btnfinish">
        <button><span style={{ fontFamily:"Poppins", fontSize:"40px" }}><b>AUCTION COMPLETE</b></span></button>
      </div>

     
    </>
  )
}
