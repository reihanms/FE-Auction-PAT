import React, { useState } from "react";
import { Footer } from "./Footer";
import { useAuth } from "../helpers/hooks/Authentication";
import { useFormik } from "formik";
import { postUploadFile, putProfile } from "../helpers/actions/api";
import { useNavigate } from "react-router-dom";
// import defaultProfile from "../../public/assets/profiledefault.jpg";
import Swal from "sweetalert2";

export const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user, init } = useAuth();
  const initialData = {
    profile_picture: user?.profile_picture,
    name: user?.name,
    email: user?.email,
    address: user?.address,
    about: user?.about,
  };
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit: (values, { props, resetForm, setErrors, setSubmitting }) =>
      // console.log(values)
      onEditProfile(values, resetForm, setErrors, setSubmitting),
  });

  const onEditProfile = async (values, resetForm, setErrors, setSubmitting) => {
    await putProfile(values)
      .then((response) => {
        console.log(response);
        const { code, message } = response;
        if (code === 200) {
          setIsEdit(false);
          formik.resetForm();
          init();
          Swal.fire({
            icon: "success",
            title: "Edit Success!",
            text: "",
            confirmButtonText: "OK",
          });
        } else {
          setIsEdit(false);
          formik.resetForm();
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
        setIsEdit(false);
        formik.resetForm();
      })
      .finally(() => setSubmitting(false));
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    const res = await postUploadFile(formData);
    formik.setFieldValue("profile_picture", res.data.url);
  };
  const navigate = useNavigate();
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
          onClick={() => navigate(`/home`)}
        />
        <img
          src="/assets/icon-home.png"
          alt="Home"
          className="profile-icon-home"
          onClick={() => navigate(`/home`)}
        />
        <div class="profile-username">
          {!isEdit ? (
            <div>
              <h2>{user?.name}</h2>
              <p>{user?.address}</p>
              <p>{user?.email}</p>
            </div>
          ) : (
            <div>
              <h2>
                <input
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                />
              </h2>
              <p>
                <input
                  type="text"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  name="address"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                />
              </p>
            </div>
          )}
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src={user?.profile_picture ? user.profile_picture : "/assets/profiledefault.jpg"}
            alt="CardImage"
            class="card-image"
          />
          {isEdit && (
            <input
              type="file"
              className="in"
              style={{ width: "100%", maxWidth: "500px" }}
              onChange={(e) => handleFileChange(e)}
            />
          )}
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
        {!isEdit ? (
          <p>{user?.about}</p>
        ) : (
          <input
            type="text"
            value={formik.values.about}
            onChange={formik.handleChange}
            name="about"
          />
        )}
      </div>
      {isEdit && (
        <button onClick={formik.handleSubmit} type="submit">
          Save Edit
        </button>
      )}
      <button onClick={() => setIsEdit(!isEdit)}>Edit Profile</button>

      <div className="profile-button">
        <div className="col-md-4">
          <div className="myaux-item-tool" onClick={() => navigate(`/myauction`)}>
            <h3 className="item-font">My Auction</h3>
            <img
              src="assets/auction-icon.png"
              alt="Your Auction"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="mybid-item-tool" onClick={() => navigate(`/mybid`)}>
            <h3 className="item-font">My Bid</h3>
            <img
              src="assets/bid-icon.png"
              alt="Your Bid"
              style={{ height: "50px", margin: "auto" }}
            />
          </div>
          <div className="winning-item-tool" onClick={() => navigate(`/mybidwon`)}>
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
