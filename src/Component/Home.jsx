import React from "react";

export default function HomePage(){
    return(
        // buat allow 2 tag yang sama di dalam satu komponen
        <>
            <Header/>
            <ItemContainer/>
        </>
    );
}

function ItemContainer(){
    return(
        <div class="item-container">
            <Item/>
            {/* looping for auction items here */}
        </div>
    );
}

function Item(){
    return(
        <div className="item">
            {/* Ini nanti gambarnya dinamis */}
            <img src="landingpage/img/logo/Logo.png" alt="Image" class="img-fluid" style={{ width: "110px", margin: "auto"}}/>
            <div>
                <h4>Art Name</h4>
                <h5>Author Name</h5>
            </div>
            <div>
                <h4>Current Price</h4>
                <h4>Max Price</h4>
            </div>
        </div>
    );
}

function Header(){
    return(
            <div style={{backgroundColor: "#3D524B", padding: "7px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                <div>
                <img src="assets/av-logo.png" alt="Image" class="img-fluid" style={{ height: "60px", margin: "auto"}}/>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginLeft: "auto", marginEnd: "0px"}}>
                    <h1>Username</h1>
                    <img src="assets/profile.png" alt="Image" class="img-fluid" style={{ height: "60px", margin: "auto"}}/>
                </div>
            </div>
    );
}

function footer(){
    
}
