import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { formatToRupiah } from "../helpers/functions/ConvertRupiah";
import {
  getAuction,
  postBidAuction,
  postBuyoutAuction,
} from "../helpers/actions/api";
import CountdownTimer from "./CountdownTimer";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const BuyItem = ({ id }) => {
  const navigate = useNavigate();
  console.log(id);
  const [orderData, setOrderData] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAuction(id);
      setOrderData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [id]);
  const initialData = {
    auction_id: parseInt(id, 10),
    bid_price: "",
  };
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit: (values, { props, resetForm, setErrors, setSubmitting }) =>
      // console.log(values)
      onSubmitBid(values, resetForm, setErrors, setSubmitting),
  });
  const onSubmitBid = async (values, resetForm, setErrors, setSubmitting) => {
    if (type === "bid") {
      await postBidAuction(values)
        .then((response) => {
          console.log(response);
          const { code, message } = response;
          if (code === 200) {
            Swal.fire({
              icon: "success",
              title: "Bid Succesfully Created!",
              text: "",
              confirmButtonText: "OK",
            });
            navigate("/home");
          } else {
            Swal.fire({
              icon: "error",
              title: "Gagal",
              text: message,
              confirmButtonText: "Kembali",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setSubmitting(false));
    } else {
      await postBuyoutAuction(values)
        .then((response) => {
          console.log(response);
          const { code, message } = response;
          if (code === 200) {
            Swal.fire({
              icon: "success",
              title: "Buyout auction success!",
              text: "",
              confirmButtonText: "OK",
            });
            navigate("/home");
          } else {
            Swal.fire({
              icon: "error",
              title: "Gagal",
              text: message,
              confirmButtonText: "Kembali",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setSubmitting(false));
    }
  };

  const handleBid = () => {
    formik.setFieldValue(
      "bid_price",
      orderData?.highest_bid === 0
        ? orderData?.start_bid
        : orderData?.bid_at
    );
    setType("bid");
    formik.handleSubmit();
  };
  const handleBuyout = () => {
    formik.setFieldValue(
      "bid_price", orderData.buy_out_price);
    setType("buyout");
    formik.handleSubmit();
  };
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
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="deskripsi">
          <label>
            <b>{orderData?.user?.name !== null ? orderData?.user?.name : ""}</b>
          </label>
          <textarea
            className="textarea"
            readOnly
            value={orderData.description}
          />
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
          <input
            type="text"
            class="in"
            value={
              orderData?.highest_bid === 0
                ? formatToRupiah(orderData.start_bid)
                : formatToRupiah(orderData?.highest_bid)
            }
            readOnly
          />
        </div>
        <div>
          <label style={{ fontFamily: "Poppins" }}>
            <b>BUY OUT</b>
          </label>
        </div>
        <div class="deskripsi">
          <input
            type="text"
            class="in"
            value={formatToRupiah(orderData.buy_out_price)}
            readOnly
          />
        </div>
      </div>

      {/* Reminder */}
      <div className="reminder">
        <label style={{ fontFamily: "Poppins", color: "#DDE2E3" }}>
          Remaining :{" "}
        </label>
        <span>
          {" "}
          {orderData?.expired && (
            <CountdownTimer expirationDate={orderData?.expired} />
          )}
        </span>
      </div>

      {/* Button */}
      <div className="item-container-bid">
        <div>
          <button className="btnone" onClick={() => handleBid("bid")}>
            BID AT
          </button>
        </div>
        <div class="deskripsi">
          <input
            type="text"
            class="in"
            value={
              orderData?.highest_bid === 0
                ? formatToRupiah(orderData.start_bid)
                : formatToRupiah(orderData.bid_at)
            }
            readOnly
          />
        </div>
        <div>
          <button className="btntwo" onClick={() => handleBuyout()}>
            BUY OUT
          </button>
        </div>
        <div class="deskripsi">
          <input
            type="text"
            class="in"
            value={formatToRupiah(orderData.buy_out_price)}
            readOnly
          />
        </div>
      </div>
      <Footer />
    </>
    // <></>
  );
};
