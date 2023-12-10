import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function HomePage(){
    return(
        // biar bisa bikin tag lebih dari satu pake <></>
        <>
            <Header/>
            <div className="body">
                <Container/>
            </div>
            <Footer/>
        </>
    );
}

function Container(){
    return(
        <div className="content">
            <div className="row">
                {/* Kolom pertama, search sama daftar auction */}
                <div className="content-container col">
                    {/* entah looping item disini atau di dalam fungsi Item() */}
                    <Search/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
                {/* Kolom kedua, Isinya button */}
                <div className="col-md-4">
                    <div className="item-tool">
                        <div>
                            <h3>Start Auction</h3>
                            <h5>Sell Yout Arts Here!</h5>
                        </div>
                        <img src="assets/bookmark-icon.png" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>Profile</h3>
                        <img src="assets/profile.png" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Auction</h3>
                        <img src="assets/auction-icon.png" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Bid</h3>
                        <img src="assets/bid-icon.png" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Item(){
    return(
        <div className="item">
            {/* looping for auction items here */}
            {/* Ini nanti datanya dinamis dari BE */}
            <img src="landingpage/img/logo/Logo.png" style={{ width: "110px", margin: "auto"}}/>
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

function Search(){
    return(
        <div className="search">
            <input type="text" name="search" id="search" placeholder="Find Arts Here"/>
        </div>
    );
}
