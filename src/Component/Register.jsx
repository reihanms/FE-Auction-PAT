import { useFormik } from "formik";
import React, { useEffect } from "react";
import { postSignup } from "../helpers/actions/api";

const Registerpage = () => {
  const initialData = {
    phone_number: "",
    username: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    onSubmit: (values, { props, resetForm, setErrors, setSubmitting }) =>
      // console.log(values)
      onSubmitRegister(values, resetForm, setErrors, setSubmitting),
  });

  const onSubmitRegister = async (
    values,
    resetForm,
    setErrors,
    setSubmitting
  ) => {
    await postSignup(values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };
  return (
    <>
      <div className="logo-container">
        <img src="assets/av-logo-ijo.png" alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className="form-">
          <div className="spacer">
            <h1 style={{ fontFamily: "Poppins" }}>
              <b>Register Here</b>
            </h1>
            <br />
            <button class="google-login-button">
              <img
                src="assets/icon-google.png"
                alt="Google Icon"
                class="google-icon"
                value="Login With Google"
              />
              <b>Continue with Google</b>
            </button>
            <div class="line-container">OR</div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              className="logreg"
              name="phone_number"
              placeholder="Phone Number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              className="logreg"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              className="logreg"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              className="logreg"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <input
              type="submit"
              className="logreg"
              value="Register"
              onClick={formik.handleSubmit}
            />
          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default Registerpage;
