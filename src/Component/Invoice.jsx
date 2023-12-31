import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../helpers/actions/api";
import { useAuth } from "../helpers/hooks/Authentication";
import { formatToRupiah } from "../helpers/functions/ConvertRupiah";

export default function Invoice({ id }) {
  return (
    // biar bisa bikin tag lebih dari satu pake <></>
    <>
      <Header />
      <div className="body">
        {/* Buat nampilin Invoice */}
        <InvoiceContainer id={id} />
      </div>
      <Footer />
    </>
  );
}

function InvoiceContainer({ id }) {
  const [orderData, setOrderData] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getInvoice(id);
      setOrderData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [id]);
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="row">
        {/* Kolom pertama Invoice */}
        <div className="invoice-container col">
          {/* Invoice Logo */}
          <img
            className="invoice-logo"
            src="/assets/av-logo-ijo.png"
            alt="Arteu Veiling"
          />
          {/* Body for Invoice */}
          <div className="invoice-body" style={{ color: "black" }}>
            <h1 className="invoice-header">INVOICE</h1>
            {/* Ini table buat informasi item */}
            <table className="invoice-table-item">
              <tr>
                <td className="text-left" rowSpan={4}>
                  <img
                    className="item-image"
                    src={orderData?.auction_picture}
                    alt="Item Figure"
                  />
                </td>
                <td>Title</td>
                <td className="text-center">:</td>
                <td className="text-right">{orderData?.auction_title}</td>
              </tr>
              <tr>
                <td className="text-left">Owner</td>
                <td className="text-center">:</td>
                <td className="text-right">{orderData?.auction_owner}</td>
              </tr>
              <tr>
                <td className="text-left">Winner</td>
                <td className="text-center">:</td>
                <td className="text-right">{user?.name}</td>
              </tr>
              <tr>
                <td className="text-left">Email</td>
                <td className="text-center">:</td>
                <td className="text-right">{orderData?.auction_owner_email}</td>
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
                <td className="text-left">{orderData?.auction_title}</td>
                <td className="text-center">1</td>
                <td className="text-right">
                  {formatToRupiah(
                    orderData?.sub_total -
                      orderData?.tax_total -
                      orderData?.service_total
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-left">PPN 10%</td>
                <td className="text-center">1</td>
                <td className="text-right">
                  {formatToRupiah(orderData?.tax_total)}
                </td>
              </tr>
              <tr>
                <td className="text-left">Service Fees</td>
                <td className="text-center">1</td>
                <td className="text-right">
                  {formatToRupiah(orderData?.service_total)}
                </td>
              </tr>
              {/* BUAT TOTAL */}
              <tr>
                <td className="text-left"></td>
                <td className="text-center">
                  <b>Total</b>
                </td>
                <td className="text-right">
                  <b>{formatToRupiah(orderData?.sub_total)}</b>
                </td>
              </tr>
            </table>
            <div className="invoice-text-total">
              <h2 className="text-right">
                <b>{formatToRupiah(orderData?.sub_total)}</b>
              </h2>
            </div>
          </div>
        </div>

        {/* Kolom kedua, Isinya button */}
        <div className="col-md-4">
          <div className="item-tool" onClick={() => navigate("/create")}>
            <div>
              <h3>Start Auction</h3>
              <h5>Sell Yout Arts Here!</h5>
            </div>
            <img
              src="/assets/bookmark-icon.png"
              alt="Make Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div
            className="profile-item-tool"
            onClick={() => navigate("/profile")}
          >
            <h3>Profile</h3>
            <img
              src="/assets/profile.png"
              alt="Your Profile"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div
            className="myaux-item-tool"
            onClick={() => navigate("/myauction")}
          >
            <h3>My Auction</h3>
            <img
              src="/assets/auction-icon.png"
              alt="Your Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="mybid-item-tool" onClick={() => navigate("/mybid")}>
            <h3>My Bid</h3>
            <img
              src="/assets/bid-icon.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="winning-item-tool" onClick={() => navigate("/mybidwon")}>
            <h3>Winning Bid</h3>
            <img
              src="/assets/icon-announce.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
