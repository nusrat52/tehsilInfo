import React from "react";
import img from "../../statics/sign.jpg";
import "./signin.css";
import { Eye } from "../icons/icon";

import { Formik, Form, Field, ErrorMessage } from "formik";

const passref = React.createRef();
function Signup() {
  
  return (
    <>
      <Formik
        className="signinWrapper"
        initialValues={{ email: "", password: "", sirname:"", name:"" }}
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
            
            
          if (values.sirname.length > 30) {
            errors.sirname = "Maksimim simbol sayı 29";
          } else if (values.sirname.length < 3) {
            errors.sirname = "Minimum simbol sayı 3";
          }
            
            
          if (values.name.length > 30) {
            errors.name = "Maksimim simbol sayı 29";
          } else if (values.name.length < 3) {
            errors.name = "Minimum simbol sayı 3";
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
                          <h1 className="signin__header mb-5">Qeydiyyat</h1>

                          <Field
                name="name"
                placeholder="ad"
                type="text"
                className="signin__input"
                          />
                               <div className="signin__error">
                <ErrorMessage name="name" component="div" />
              </div>
                          <Field
                name="sirname"
                placeholder="Soyad"
                type="text"
                className="signin__input"
                          />
                               <div className="signin__error">
                <ErrorMessage name="sirname" component="div" />
              </div>
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
                  // onChange={formik.handleChange}
                  // value={formik.values.password}
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
              Qeydiyyatdan keç
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

export default Signup;
