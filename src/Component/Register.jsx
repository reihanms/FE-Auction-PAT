import React from 'react'


const Registerpage = () => {
  return (
    <>
      <div className="logo-container">
        <img src="assets/av-logo-ijo.png" alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className='form-'>
          <h1 style={{ fontFamily: "Poppins" }}><b>Register Here</b></h1><br />
          <button class="google-login-button" style={{ width : "560px" }}>
            <img src="assets/icon-google.png" alt="Google Icon" class="google-icon" value='Login With Google' />
            <b>Continue with Google</b>
          </button> 
          <div class="line-container">OR</div>
          <form action="/login" method="post">
            <input type="text" name="notelp" placeholder="Phone Number" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <div className='spacer'>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Registerpage