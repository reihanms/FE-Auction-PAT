import React from 'react'

const CreateAuction = () => {
  return (
    <>
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
      <div className="item-container-sell">
        <div>
          <input type="file" className='in' style={{ width :"100%" , maxWidth: "500px"}} />  
        </div>
        <div className='deskripsi'>
          <label><b>Title of the work</b></label>
          <input type="text" className='in'/>
          <label><b>Description</b></label>
          <input type="textarea" className='textarea'/>
        </div>  
      </div>

      {/* kategori */}
      <div className="item-container-sell">
        <div>
          <label><b>Category :</b></label>
        </div>
        <div>
          <input type="radio" value="2D" name='kat'/> <span>2D</span>
          <input type="radio" value="3D" name='kat' /> <span>3D</span>
        </div>  
      </div>
      
      {/* PRICE + TIME RANGE */}
      <div className="price-container">
        <div className="item-container-price">
          <div className='deskripsi'>
            <h5 style={{ fontFamily: "Poppins", color:"#F1F1F1" }}>PRICE</h5> <br />
            <input type="text" className='in' placeholder='Starting at'/>
            <input type="text" className='in' placeholder='Buy Out at'/>
            <input type="text" className='in' placeholder='Price Increment'/>
          </div>  
        </div>
        <div className="item-container-price">
          <div className='deskripsi'>
            <h5 style={{ fontFamily: "Poppins", color:"#F1F1F1" }}>TIME RANGE</h5> <br />
            <div class="radio-group">
              <input type="radio" id="option1" name="option"/>
              <label for="option1">1 Hours</label>
              <input type="radio" id="option2" name="option"/>
              <label for="option2">6 Hours</label>
              <input type="radio" id="option2" name="option"/>
              <label for="option2">12 Hours</label>
            </div>
            <input type="text" className='in' placeholder='Pick Your Own Limit'/>
          </div>  
        </div>
      </div> <br />

      <div className="tombolreset">
        <button>RESET</button>
      </div><br />
      <div className="tombol">
        <button>CREATE AUCTION</button>
      </div>
     


    
    </>
  )
}

export default CreateAuction