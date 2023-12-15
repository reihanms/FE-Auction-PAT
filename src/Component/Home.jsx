import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { OnSearchIndicator } from "./OnSearchIndicator";

export default function HomePage(){
    return(
        // biar bisa bikin tag lebih dari satu pake <></>
        <>
            <Header/>
            <div className="body">
                {/* Buat nampilin item */}
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
                    {/* Ini buat nampilin kontainer search */}
                    <Search/>
                    {/* Ini buat nampilin indikator pas ngelakuin searching */}
                    {/* <SearchInUser/> */}
                    {/* Ini buat nampilin search */}
                    {/* <OnSearchIndicator/> */}
                    {/* Ini buat list Item */}
                    <Item/>
                </div>
                {/* Kolom kedua, Isinya button */}
                <div className="col-md-4">
                    <div className="item-tool">
                        <div>
                            <h3>Start Auction</h3>
                            <h5>Sell Yout Arts Here!</h5>
                        </div>
                        <img src="assets/bookmark-icon.png" alt="Make Auction" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="profile-item-tool">
                        <h3>Profile</h3>
                        <img src="assets/profile.png" alt="Your Profile" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="myaux-item-tool">
                        <h3>My Auction</h3>
                        <img src="assets/auction-icon.png" alt="Your Auction" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="mybid-item-tool">
                        <h3>My Bid</h3>
                        <img src="assets/bid-icon.png" alt="Your Bid" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="winning-item-tool">
                        <h3>Winning Bid</h3>
                        <img src="assets/icon-announce.png" alt="Your Bid" style={{ height: "50px", margin: "auto"}}/>
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
            <img className="item-image" src="landingpage/img/logo/Logo.png" alt="Auction Logo" style={{ width: "110px", margin: "auto"}}/>
            <div>
                <h4>Art Name</h4>
                <h5>Author Name</h5>
                <h6 style={{ color:"black" }}>time</h6>
            </div>
            <div>
                <h4>Current Price</h4>
                <h4>Max Price</h4>
                <button className="btn-bid">BID</button>
            </div>
        </div>
    );
}

// container for search (yang gambarnya gede)
function Search(){
    return(
        <div className="search-container">
            <input type="text" name="search" id="search" placeholder="Find Arts Here"/>
        </div>
    );
}

// container for search (yang gambarnya kecil)
function SearchInUser(){
    return(
        <div className="user-search-container">
            {/* manggil menu indicator, value nya di dinamisin dari fungsinya */}
            <MenuIndicator/>
            <input type="text" name="search" id="search" placeholder="Find Arts Here"/>
        </div>
    );
}

function MenuIndicator(){
    return (
        <div className="menu-indicator">
            {/* jadiin dinamis disini */}
            <p>Ini Nama Menu</p>
        </div>
    );
}