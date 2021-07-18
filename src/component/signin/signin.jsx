import React from "react";
import img from "../../statics/sign.jpg";
import "./signin.css";
import { Eye } from "../icons/icon";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const passref = React.createRef();
function Signin() {


  return (
    <>
      <Formik
        className="signinWrapper"
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }
          if (values.password.length > 30) {
            errors.password = "Normadan artıq kod";
          } else if (values.password.length < 5) {
            errors.password = "Normadan az kod";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="signinWrapper">
            <div className="signin ">
              <img className="mb-4" width="188" src={img} alt="" />
              <h1 className="signin__header mb-5">Daxil ol</h1>
              <Field
                name="email"
                required
                placeholder="Email"
                type="email"
                className="signin__input"
              />
              <div className="signin__error">
                <ErrorMessage
                  className="signin__error"
                  name="email"
                  component="div"
                />
              </div>

              <div ref={passref} className="passwordWrapper">
                <Field
                  placeholder="Sifre"
       
                  name="password"
                  id="password"
                 
                  type="password"
                  className="signin__input"
                />

                <div className="signin__eye">
                  <Eye pas={passref} />
                </div>
              </div>
              <div className="signin__error">
                <ErrorMessage name="password" component="div" />
              </div>

              <a className="signin__forget" href="#">
                Hesabınızı unutmusunuz?
              </a>

              <button
                disabled={isSubmitting}
                type="submit"
                className="btn signin__btn"
              >
                Daxil Ol
              </button>
              <p className="signin__path">
                Hesabınız yoxdur?{" "}
                <a href="#" className="signin__link">
                  Qeydiyyatdan Keçin
                </a>
              </p>
            </div>
          </Form>
        )}
      </Formik>


    </>
  );
}

export default Signin;
