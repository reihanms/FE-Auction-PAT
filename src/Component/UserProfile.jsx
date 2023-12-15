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
        <div class="profile-content">
          <h1>{user?.username}</h1>
          <p>{user?.email}</p>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
          <img
            src={user?.picture ? user.picture : "/assets/profiledefault.jpg"}
            alt="Card_Image"
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
        <h2>About Me</h2>
        <p>
          {user?.phone_number}
        </p>
      </div>

      <br />
      <Footer />
    </>
  );
};
