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
                {/* <Container/> */}
                {/* Buat nampilin Invoice */}
                <InvoiceContainer/>
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
                    {/* <Search/> */}
                    {/* Ini buat nampilin indikator pas ngelakuin searching */}
                    <SearchInUser/>
                    {/* Ini buat nampilin search */}
                    <OnSearchIndicator/>
                    {/* Ini buat list Item */}
                    {/* <Item/> */}
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
                    <div className="item-tool">
                        <h3>Profile</h3>
                        <img src="assets/profile.png" alt="Your Profile" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Auction</h3>
                        <img src="assets/auction-icon.png" alt="Your Auction" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Bid</h3>
                        <img src="assets/bid-icon.png" alt="Your Bid" style={{ height: "50px", margin: "auto"}}/>
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
            </div>
            <div>
                <h4>Current Price</h4>
                <h4>Max Price</h4>
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

function InvoiceContainer(){
    return(
        <div className="content">
            <div className="row">
                {/* Kolom pertama Invoice */}
                <div className="invoice-container col">
                    {/* Invoice Logo */}
                    <img className="invoice-logo" src="assets/av-logo-ijo.png" alt="Arteu Veiling"/>
                    {/* Body for Invoice */}
                    <div className="invoice-body">
                        <h1 className="invoice-header">INVOICE</h1>
                        {/* Ini table buat informasi item */}
                        <table className="invoice-table-item">
                            <tr>
                                <td className="text-left" rowSpan={4}><img className="item-image" src="assets/icon-google.png" alt="Item Figure"/></td>
                                <td>Title</td>
                                <td className="text-center">:</td>
                                <td className="text-right">INI BUAT TITLE ITEM</td>
                            </tr>
                            <tr>
                                <td className="text-left">Owner</td>
                                <td className="text-center">:</td>
                                <td className="text-right">INI BUAT NAMA OWNER</td>
                            </tr>
                            <tr>
                                <td className="text-left">Winner</td>
                                <td className="text-center">:</td>
                                <td className="text-right">INI BUAT NAMA PEMENANG</td>
                            </tr>
                            <tr>
                                <td className="text-left">Email</td>
                                <td className="text-center">:</td>
                                <td className="text-right">INI BUAT EMAIL OWNER</td>
                            </tr>
                        </table>
                        {/* Ini table buat detail invoice */}
                        <table className="invoice-table-summary">
                            <tr>
                                <th className="text-left">Description</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Price</th>
                            </tr>
                            {/* LOOPING DISINI */}
                            <tr>
                                <td className="text-left">INI DESKRIPSI</td>
                                <td className="text-center">99</td>
                                <td className="text-right">100000000</td>
                            </tr>
                            {/* BUAT TOTAL */}
                            <tr>
                                <td className="text-left"></td>
                                <td className="text-center"><b>Total</b></td>
                                <td className="text-right"><b>100000000</b></td>
                            </tr>
                        </table>
                        <div className="invoice-text-total">
                            <h2 className="text-right"><b>Rp 10000000000</b></h2>
                        </div>
                    </div>
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
                    <div className="item-tool">
                        <h3>Profile</h3>
                        <img src="assets/profile.png" alt="Your Profile" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Auction</h3>
                        <img src="assets/auction-icon.png" alt="Your Auction" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                    <div className="item-tool">
                        <h3>My Bid</h3>
                        <img src="assets/bid-icon.png" alt="Your Bid" style={{ height: "50px", margin: "auto"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
