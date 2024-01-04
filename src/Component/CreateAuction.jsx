import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useFormik } from "formik";
import { postCreateAuction, postUploadFile } from "../helpers/actions/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/hooks/Authentication";

const CreateAuction = () => {
  const navigate = useNavigate();
  const { init } = useAuth()
  const initialData = {
    picture: "",
    title: "",
    description: "",
    category: "",
    price_increment: "",
    buy_out_price: "",
    start_bid: "",
    day: "",
    hour: "",
  };
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit: (values, { props, resetForm, setErrors, setSubmitting }) =>
      // console.log(values)
      onSubmitCreateAuction(values, resetForm, setErrors, setSubmitting),
  });
  const onSubmitCreateAuction = async (
    values,
    resetForm,
    setErrors,
    setSubmitting
  ) => {
    await postCreateAuction(values)
      .then((response) => {
        console.log(response);
        const { code, message } = response;
        if (code === 200) {
          Swal.fire({
            icon: "success",
            title: "Auction Succesfully Created!",
            text: "",
            confirmButtonText: "OK",
          });
          navigate("/home");
          init()
        } else {
          Swal.fire({
            icon: "error",
            title: "Fail!",
            text: message,
            confirmButtonText: "Back",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
    console.log(values);
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    const res = await postUploadFile(formData);
    await formik.setFieldValue("picture", res.data.url);
  };
  return (
    <>
      <Header />
      {/* konten */}
      <div className="item-container-sell">
        <div>
          <input
            type="file"
            className="in"
            style={{ width: "100%", maxWidth: "500px" }}
            onChange={(e) => handleFileChange(e)}
          />
        </div>
        <div className="deskripsi">
          <label>
            <b>Title of the work</b>
          </label>
          <input
            type="text"
            className="in"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <label>
            <b>Description</b>
          </label>
          <input
            type="textarea"
            className="textarea"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      {/* kategori */}
      <div className="item-container-sell">
        <div>
          <label>
            <b>Category :</b>
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="2D"
            name="category"
            onChange={formik.handleChange}
          />{" "}
          <span>2D</span>
          <input
            type="radio"
            value="3D"
            name="category"
            onChange={formik.handleChange}
          />{" "}
          <span>3D</span>
        </div>
      </div>
      {/* PRICE + TIME RANGE */}
      <div className="price-container">
        <div className="item-container-price">
          <div className="deskripsi">
            <h5 style={{ fontFamily: "Poppins", color: "#F1F1F1" }}>PRICE</h5>{" "}
            <br />
            <input
              type="number"
              className="in"
              placeholder="Starting at"
              name="start_bid"
              value={formik.values.start_bid}
              onChange={formik.handleChange}
            />
            <input
              type="number"
              className="in"
              placeholder="Buy Out at"
              name="buy_out_price"
              value={formik.values.buy_out_price}
              onChange={formik.handleChange}
            />
            <input
              type="number"
              className="in"
              placeholder="Price Increment"
              name="price_increment"
              value={formik.values.price_increment}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="item-container-price">
          <div className="deskripsi">
            <h5 style={{ fontFamily: "Poppins", color: "#F1F1F1" }}>
              TIME RANGE
            </h5>{" "}
            <br />
            <input
              type="number"
              className="in"
              placeholder="Days"
              name="day"
              value={formik.values.day}
              onChange={formik.handleChange}
            />
            <input
              type="number"
              className="in"
              placeholder="Hours"
              name="hour"
              value={formik.values.hour}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="tombol">
        <button type="submit" onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
          CREATE AUCTION
        </button>
      </div>
      <br />
      <div className="tombolreset">
        <button onClick={() => formik.resetForm()}>RESET</button>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default CreateAuction;
