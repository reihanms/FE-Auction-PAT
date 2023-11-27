import React from "react";

class Landingpage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <header id="header" class="header d-flex align-items-center fixed-top">
                    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                        <a href="index.html" class="logo d-flex align-items-center">
                        <img src="landingpage/img/logo/Logo.png" alt="Image" class="img-fluid" style={{ width: "110px"}}/>
                        </a>
                        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    </div>
                </header>

                {/**Landing Page*/}
                <section id="hero" class="hero d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                        <div class="col-xl-4">
                            <h2 data-aos="fade-up">Your Bid, Your Art Contribution.</h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                            <p>Bid boldly, and let the canvas of creativity unfold before your eyes.</p>
                            </blockquote>
                            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <a href="#about" class="btn-get-started">Register Here</a>
                            <a href="#about" class="btn-get-login">Login Now</a>
                            </div>

                        </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Landingpage;