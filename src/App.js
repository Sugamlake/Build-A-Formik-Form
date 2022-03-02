import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: ""
    },
    validationSchema: Yup.object().shape({
      emailField: Yup.string()
        .email("Invalid email address")
        .required("Field Required"),
      pswField: Yup.string().required("Field Required")
    }),
    onSubmit: (values) => {
      setIsLoggedIn(true);
    }
  });
  return (
    <div className="App">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="emailField">Email Address</label>
          <input
            id="emailField"
            name="emailField"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="emailError">{formik.errors.email}</div>
        ) : null}
        <div className="field">
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            name="pswField"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="pswError">{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      {isLoggedIn && <div className="heading">Login Succesfully</div>}
    </div>
  );
}
