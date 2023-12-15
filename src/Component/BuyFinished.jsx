import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const BuyFinished = () => {
  return (
    <>
      <Header/>
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
      </div><br /><br />  
      <Footer/>
     
    </>
  )
}
