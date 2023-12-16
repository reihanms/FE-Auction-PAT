import React from "react";
import { Footer } from "./Footer";
import { useAuth } from "../helpers/hooks/Authentication";
// import defaultProfile from "../../public/assets/profiledefault.jpg";
export const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <div class="profile-container">
        <img
          src="/assets/Banner.png"
          alt="Profile Background"
          class="profile-background-image"
        />
        <img
          src="/assets/av-logo-white.png"
          alt="Home"
          className="profile-logo"
        />
        <img
          src="/assets/icon-home.png"
          alt="Home"
          className="profile-icon-home"
        />
        <div class="profile-username">
          <h2>{user?.username}</h2>
          <p>{user?.address}</p>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src={user?.picture ? user.picture : "/assets/profiledefault.jpg"}
            alt="CardImage"
            class="card-image"
          />
          <div class="card-content">
            <table className="profile-table">
              <tr>
                <td>Auction</td>
                <td>{user?._count.auctions}</td>
              </tr>
              <tr>
                <td>Bids</td>
                <td>{user?._count.bids}</td>
              </tr>
              <tr>
                <td>Bids Won</td>
                <td>{user?._count.bids_won}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="profile-deskripsi-container">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          non fugiat quo commodi molestiae tempora corporis ad, aliquid eum
          magnam iusto maxime labore magni laborum beatae corrupti illo nisi
          sed?
        </p>
      </div>

      <div className="profile-button">
        <div className="col-md-4">
          <div className="myaux-item-tool">
            <h3 className="item-font">My Auction</h3>
            <img
              src="assets/auction-icon.png"
              alt="Your Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="mybid-item-tool">
            <h3 className="item-font">My Bid</h3>
            <img
              src="assets/bid-icon.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="winning-item-tool">
            <h3 className="item-font">Winning Bid</h3>
            <img
              src="assets/icon-announce.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
};
