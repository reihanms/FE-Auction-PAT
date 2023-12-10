import React from 'react'


const Login = () => {
  return (
    <>
      <div className="logo-container">
        <img src="assets/av-logo-ijo.png" alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className='form-'>
          <h1 style={{ fontFamily: "Poppins" }}><b>Login Now!</b></h1><br />
          <form action="/login" method="post">
            <input className='logreg' type="text" name="username" placeholder="Username" />
            <input className='logreg' type="password" name="password" placeholder="Password" />

            <div className='spacer'>
              <input type="submit" className='logreg' value="Login" />
              <div class="line-container">OR</div>
              <button class="google-login-button">
                <img src="assets/icon-google.png" alt="Google Icon" class="google-icon" value='Login With Google' />
                <b>Continue with Google</b>
              </button>
              <p style={{ fontFamily:"Poppins", textAlign:"center" }}>Don't have account? <a href="/register" style={{ color:"#3D524B" }}><b>Sign up</b></a></p>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Login