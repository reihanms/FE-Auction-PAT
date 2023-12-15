import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { formatToRupiah } from "../helpers/functions/ConvertRupiah";
import { getAuction } from "../helpers/actions/api";

export const BuyItem = ({ id }) => {
  console.log(id);
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAuction(id);
      setOrderData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [id]);
  
  return (
    <>
      <Header />
      {/* konten */}
      <div className="item-container-buy">
        <div className="deskripsi">
          <label>
            <b>{orderData?.title ? orderData.title : ""}</b>
          </label>
          <img
            src={orderData?.picture ? orderData.picture : ""}
            alt="immage"
            class="img-fluid"
            className="in"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
        <div className="deskripsi">
          <label>
            <b>{orderData?.user?.name !== null ? orderData?.user?.name : ""}</b>
          </label>
          <input type="textarea" className="textarea" />
        </div>
      </div>

      {/* konten */}
      <div className="item-container-bid">
        <div>
          <label style={{ fontFamily: "Poppins" }}>
            <b>START BID</b>
          </label>
        </div>
        <div class="deskripsi">
          <input type="text" class="in" value={orderData?.highest_bid === 0 ? formatToRupiah(orderData.start_bid) : formatToRupiah(orderData?.highest_bid)} readOnly/>
        </div>
        <div>
          <label style={{ fontFamily: "Poppins" }}>
            <b>BUY OUT</b>
          </label>
        </div>
        <div class="deskripsi">
          <input type="text" class="in" value={formatToRupiah(orderData.buy_out_price)} readOnly />
        </div>
      </div>

      {/* Reminder */}
      <div className="reminder">
        <label style={{ fontFamily: "Poppins", color: "#DDE2E3" }}>
          Remaining :{" "}
        </label>
        <span>
          {" "}
          <b> 1d 10h 24m 07s</b>
        </span>
      </div>

      {/* Button */}
      <div className="item-container-bid">
        <div>
          <button className="btnone">START BID</button>
        </div>
        <div class="deskripsi">
          <input type="text" class="in" value={orderData?.highest_bid === 0 ? formatToRupiah(orderData.start_bid) : orderData?.highest_bid} readOnly />
        </div>
        <div>
          <button className="btntwo">BUY OUT</button>
        </div>
        <div class="deskripsi">
          <input type="text" class="in"value={formatToRupiah(orderData.buy_out_price)} readOnly />
        </div>
      </div>
      <Footer />
    </>
    // <></>
  );
};
