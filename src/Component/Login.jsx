import React from "react";
import { useAuth } from "../helpers/hooks/Authentication";
import { useLoading } from "../helpers/hooks/LoadingState";
import { useFormik } from "formik";
import { LoginSchema } from "../helpers/constants/Schemas";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()

  const { setIsLoading } = useLoading();
  const initialData = {
    emailOrPhone: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: (values, { props, resetForm, setErrors, setSubmitting }) =>
      // console.log(values)
      onSubmitLogin(values, resetForm, setErrors, setSubmitting),
  });
  const onSubmitLogin = async (values, resetForm, setErrors, setSubmitting) => {
    try {
      setIsLoading(true);
      const response = await login(values);

      if (!response?.error) {
        navigate("/home")
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="logo-container">
        <img src="assets/av-logo-ijo.png" alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className="form-">
          <h1 style={{ fontFamily: "Poppins" }}>
            <b>Login Now!</b>
          </h1>
          <br />
          <form onSubmit={formik.handleSubmit} method="post">
            <input
              className="logreg"
              type="text"
              name="emailOrPhone"
              placeholder="Email or phone number"
              value={formik.values.emailOrPhone}
              onChange={formik.handleChange}
            />
            <input
              className="logreg"
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <div className="spacer">
              <input type="submit" className="logreg" value="Login" onClick={formik.handleSubmit} />
              {/* <div class="line-container">OR</div>
              <button class="google-login-button">
                <img
                  src="assets/icon-google.png"
                  alt="Google Icon"
                  class="google-icon"
                  value="Login With Google"
                />
                <b>Continue with Google</b>
              </button> */}
              <p style={{ fontFamily: "Poppins", textAlign: "center" }}>
                Don't have account?{" "}
                <a href="/register" style={{ color: "#3D524B" }}>
                  <b>Sign up</b>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
