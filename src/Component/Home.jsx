import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { OnSearchIndicator } from "./OnSearchIndicator";
import { useAuth } from "../helpers/hooks/Authentication";
import { getAllAuction } from "../helpers/actions/api";
import { formatToRupiah } from "../helpers/functions/ConvertRupiah";
import CountdownTimer from "./CountdownTimer";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  return (
    // biar bisa bikin tag lebih dari satu pake <></>
    <>
      <Header />
      <div className="body">
        {/* Buat nampilin item */}
        <Container />
      </div>
      <Footer />
    </>
  );
}

function Container() {
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllAuction();
      setAuctions(res.data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="row">
        {/* Kolom pertama, search sama daftar auction */}
        <div className="content-container col">
          {/* Ini buat nampilin kontainer search */}
          <Search />
          {/* Ini buat nampilin indikator pas ngelakuin searching */}
          {/* <SearchInUser/> */}
          {/* Ini buat nampilin search */}
          {/* <OnSearchIndicator/> */}
          {/* Ini buat list Item */}
          {auctions.map((item, index) => (
            <div key={index}>
              {auctions.length === 0 ? (
                <p>No Auctions</p>
              ) : (
                <Item auction={item} />
              )}
            </div>
          ))}
        </div>
        {/* Kolom kedua, Isinya button */}
        <div className="col-md-4">
          <div className="item-tool" onClick={() => navigate("/create")}>
            <div>
              <h3>Start Auction</h3>
              <h5>Sell Yout Arts Here!</h5>
            </div>
            <img
              src="assets/bookmark-icon.png"
              alt="Make Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="profile-item-tool" onClick={() => navigate("/profile")}>
            <h3>Profile</h3>
            <img
              src="assets/profile.png"
              alt="Your Profile"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="myaux-item-tool" onClick={() => navigate("/myauction")}>
            <h3>My Auction</h3>
            <img
              src="assets/auction-icon.png"
              alt="Your Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="mybid-item-tool" onClick={() => navigate("/mybid")}>
            <h3>My Bid</h3>
            <img
              src="assets/bid-icon.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="winning-item-tool" onClick={() => navigate("/mybidwon")}>
            <h3>Winning Bid</h3>
            <img
              src="assets/icon-announce.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ auction }) {
  const navigate = useNavigate();
  return (
    <div className="item">
      {/* looping for auction items here */}
      {/* Ini nanti datanya dinamis dari BE */}
      <img
        className="item-image"
        src={auction.picture}
        alt="Auction Logo"
        style={{ width: "110px", margin: "auto" }}
      />
      <div>
        <h4>{auction.title}</h4>
        <h5>{`${auction.description.slice(0,25)}...`}</h5>
        <h6 style={{ color: "black" }}>
          <CountdownTimer expirationDate={auction.expired} />
        </h6>
      </div>
      <div>
        <h4>
          {auction.highest_bid === 0
            ? `Now : ${formatToRupiah(auction.start_bid)}`
            : `Now : ${formatToRupiah(auction.bid_at)}`}
        </h4>
        <h4 style={{ color:"#006039" }}> {`Buy Out : ${formatToRupiah(auction.buy_out_price)}`}</h4>
        <button className="btn-bid" onClick={() => navigate(`/buyitem/${auction.id}`)}>BID</button>
      </div>
      <div className="category">
            3D
      </div>
    </div>
  );
}

// container for search (yang gambarnya gede)
function Search() {
  return (
    <div className="search-container">
      {/* <input
        type="text"
        name="search"
        id="search"
        placeholder="Find Arts Here"
      /> */}
    </div>
  );
}

// container for search (yang gambarnya kecil)
function SearchInUser() {
  return (
    <div className="user-search-container">
      {/* manggil menu indicator, value nya di dinamisin dari fungsinya */}
      <MenuIndicator />
      {/* <input
        type="text"
        name="search"
        id="search"
        placeholder="Find Arts Here"
      /> */}
    </div>
  );
}

function MenuIndicator() {
  return (
    <div className="menu-indicator">
      {/* jadiin dinamis disini */}
      <p>Ini Nama Menu</p>
    </div>
  );
}
