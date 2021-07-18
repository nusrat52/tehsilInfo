import React, { useState } from "react";
import Category from "./kategoriya/category";
import NavbarSec from "./navbar/navbarSec";
import img from "../statics/Rectangle 121.png";
import { Book, Left, Right } from "./icons/icon";
import Footer from "./footer";
function Tedbirler() {
  const [olke, setOlke] = useState(false);
  const [tarix, setTarix] = useState(false);
  return (
    <>
      <NavbarSec />
      <Category
        olke={olke}
        setOlke={setOlke}
        tarix={tarix}
        setTarix={setTarix}
      />
      <div className="container__sp">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">
            <div className="uclukItem">
              <img className="iclukItme__pic" src={img} alt="" />
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <p className="iclukItme__time">14 May, 2020</p>
                <Book />
              </div>

              <h3 className="iclukItme__text">
                Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
              </h3>
            </div>
          </div>
        </div>
        <div className="paginatio mb-5">
          {" "}
          <Left />
          <p className="m-0 paginato__texts">
            {" "}
            <span className="paginato__text">1</span> /34
          </p>
          <Right />{" "}
        </div>
          </div>
          

          <Footer/>
    </>
  );
}

export default Tedbirler;
