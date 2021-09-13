import React from "react";
import "./navbar.scss";
// import Button from 'react-bootstrap/Button';
import "bootstrap/scss/bootstrap.scss";
import img from "../../statics/tehsil 1.jpg";
import Link from "@material-ui/core/Link";
import { TehsilLogo, Search, Hamb, DownArrow, Escape } from "../icons/icon";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__item1 container__sp ">
          <div className="row w-100 align-items-center">
            <div className="col-6 d-flex">
              <a className="navbar__link me-3" href="#">
                Yazi yerləşdir
              </a>
              <a className="navbar__link" href="#">
                Elan yerləşdir
              </a>
            </div>

            <div className="col-6 d-flex justify-content-end align-items-center">
              <div
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector(".navbar__dillerbottom")
                    .classList.remove("d-none");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget
                    .querySelector(".navbar__dillerbottom")
                    .classList.add("d-none");
                }}
                className="navbar__diller"
              >
                <span className="me-2">AZ</span>
                <DownArrow />
                <div className="navbar__dillerbottom d-none">
                  <a className="navbar__bottomlinks" href="#">
                    AZ
                  </a>
                  <a className="navbar__bottomlinks" href="#">
                    EN
                  </a>
                  <a className="navbar__bottomlinks" href="#">
                    RU
                  </a>
                  <a className="navbar__bottomlinks" href="#">
                    TR
                  </a>
                </div>
              </div>
              <Link
                className="navbar__daxil mx-5"
                href="/daxilol"
                variant="body2"
              >
                Daxil Ol
              </Link>
              <Link href="/qeydiyyat">
                <button
                  type="button "
                  class="btn btn-outline-primary navbar__button text-dark"
                >
                  Qeydiyyat
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbarTwo ">
        <div className="container__sp d-flex justify-content-between align-items-center">
          <div className="navbarTwo__buttons">
            <TehsilLogo />
            <div
              tabIndex="-1"
              onFocus={(e) => {
                e.currentTarget
                  .querySelector(".buttonAlti")
                  .classList.remove("d-none");
              }}
              onBlur={(e) => {
                e.currentTarget
                  .querySelector(".buttonAlti")
                  .classList.add("d-none");
              }}
              className="navbarTwo__buttonWrapper "
            >
              <a href="#" className="navbarTwo__button">
                Xəbərlər
              </a>
              <div className="navbarTwo__altxet d-none"></div>
              <div className="buttonAlti d-none">
                <a href="#" className="navbarTwo__button ms-0 mb-2">
                  Gündəm
                </a>
                <a href="#" className="navbarTwo__button ms-0 mb-2">
                  Elm və Təhsil
                </a>
                <a href="#" className="navbarTwo__button ms-0 mb-2">
                  Mədəniyyət
                </a>
                <a href="#" className="navbarTwo__button ms-0 mb-2">
                  Maraqlı
                </a>
              </div>
            </div>
            <div className="navbarTwo__buttonWrapper ">
              <a href="#" className="navbarTwo__button">
                Tədbirlər
              </a>
              <div className="navbarTwo__altxet d-none"></div>
            </div>
            <div className="navbarTwo__buttonWrapper ">
              <a href="#" className="navbarTwo__button">
                Elanlar
              </a>
              <div className="navbarTwo__altxet d-none"></div>
            </div>
            <div className="navbarTwo__buttonWrapper ">
              <a href="#" className="navbarTwo__button">
                Təhsil
              </a>
              <div className="navbarTwo__altxet d-none"></div>
            </div>
            <div className="navbarTwo__buttonWrapper ">
              <a href="#" className="navbarTwo__button">
                Digər
              </a>
              <div className="navbarTwo__altxet d-none"></div>
            </div>
          </div>
          <div className="searcInput">
            <input
              placeholder="Axtar"
              type="text"
              className="seachInput__input"
            />
            <Search />
          </div>
        </div>
      </nav>
      <nav className="navbarResponsive mb-4 container__sp">
        <div className="navbarResponsive__main">
          <img src={img} alt="" />

          <div
            onClick={(e) => {
              let wrapper = document.querySelector(".sidebarWrapper");
              let sidebar = document.querySelector(".sidebar");
              wrapper.classList.remove("d-none");
              document.querySelector("html").classList.add("overHidden");
              setTimeout(() => {
                sidebar.classList.remove("right100");
              }, 500);
            }}
          >
            <Hamb />
          </div>
        </div>

        <div className="searcInput w-100">
          <input
            placeholder="Axtar"
            type="text"
            className="seachInput__input"
          />
          <Search />
        </div>

        <div className="sidebarWrapper d-none">
          <div className="sidebar right100">
            <div className="d-flex justify-content-end">
              <div
                onClick={(e) => {
                  let wrapper = e.currentTarget.closest(".sidebarWrapper");
                  let sidebar = e.currentTarget.closest(".sidebar");
                  sidebar.classList.add("right100");
                  document.querySelector("html").classList.remove("overHidden");

                  sidebar.addEventListener("transitionend", () => {
                    if (sidebar.classList[1] == "right100") {
                      wrapper.classList.add("d-none");
                    }
                  });
                  setTimeout(() => {}, 500);
                }}
              >
                <Escape />
              </div>
            </div>

            <div
              onMouseOver={(e) => {
                e.currentTarget
                  .querySelector(".navbar__dillerbottom")
                  .classList.remove("d-none");
              }}
              onMouseLeave={(e) => {
                e.currentTarget
                  .querySelector(".navbar__dillerbottom")
                  .classList.add("d-none");
              }}
              className="navbar__diller navbar__diller_slide mt-4"
            >
              <span className="me-2">AZ</span>
              <DownArrow />
              <div className="navbar__dillerbottom navbar__dillerbottom_slide d-none">
                <a className="navbar__bottomlinks" href="#">
                  AZ
                </a>
                <a className="navbar__bottomlinks" href="#">
                  EN
                </a>
                <a className="navbar__bottomlinks" href="#">
                  RU
                </a>
                <a className="navbar__bottomlinks" href="#">
                  TR
                </a>
              </div>
            </div>
            <a className="navbarResponsive__link" href="#">
              Daxil ol
            </a>
            <a className="navbarResponsive__link" href="#">
              Qeydiyyat
            </a>
            <a
              className="navbarResponsive__link navbarResponsive__link_narrov"
              href="#"
            >
              Yazı Yerləşdir
            </a>
            <a
              className="navbarResponsive__link navbarResponsive__link_narrov"
              href="#"
            >
              Elan Yerləşdir
            </a>

            <div
              onClick={(e) => {
                if (e.currentTarget.classList[1] == "linkSlider_anim") {
                  e.currentTarget.classList.remove("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.remove("navbar__bottomlinks_active");
                } else {
                  e.currentTarget.classList.add("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.add("navbar__bottomlinks_active");
                }
              }}
              className="linkSlider"
            >
              <div className="d-flex justify-content-between">
                <p className="navbar__bottomlinks">Xəbərlər</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150005 0.637939C0.150393 0.517905 0.198197 0.402887 0.283005 0.31794C0.325094 0.275671 0.375118 0.242124 0.430204 0.219238C0.485291 0.196352 0.544353 0.18457 0.604005 0.18457C0.663656 0.18457 0.722719 0.196352 0.777805 0.219238C0.832891 0.242124 0.882915 0.275671 0.925005 0.31794L4.76501 4.15794L8.60501 0.319939C8.6471 0.277669 8.69712 0.244131 8.7522 0.221245C8.80729 0.198359 8.86635 0.186577 8.926 0.186577C8.98566 0.186577 9.04472 0.198359 9.09981 0.221245C9.15489 0.244131 9.20491 0.277669 9.247 0.319939C9.28913 0.361907 9.32257 0.411771 9.34539 0.466682C9.36821 0.521594 9.37998 0.580473 9.38 0.639938C9.37998 0.699404 9.36821 0.758275 9.34539 0.813187C9.32257 0.868098 9.28913 0.91797 9.247 0.959938L5.08 5.12193C5.03794 5.16379 4.98801 5.19692 4.93309 5.2194C4.87817 5.24188 4.81935 5.25328 4.76 5.25294C4.70082 5.25303 4.64221 5.24131 4.5876 5.21848C4.533 5.19564 4.4835 5.16214 4.442 5.11993L0.282005 0.959938C0.239545 0.917852 0.205979 0.867656 0.183303 0.81234C0.160626 0.757024 0.149303 0.697719 0.150005 0.637939ZM8.97301 0.637939C8.97299 0.631689 8.97165 0.62551 8.96906 0.61982C8.96647 0.614129 8.96271 0.609054 8.958 0.604935C8.9538 0.600549 8.94876 0.597058 8.94317 0.594673C8.93759 0.592289 8.93158 0.591064 8.9255 0.591064C8.91943 0.591064 8.91342 0.592289 8.90784 0.594673C8.90225 0.597058 8.8972 0.600549 8.893 0.604935L4.764 4.73394L0.635005 0.604935C0.626389 0.595814 0.614543 0.59043 0.602005 0.589935C0.595755 0.589948 0.58958 0.591293 0.583889 0.59388C0.578198 0.596466 0.573125 0.600234 0.569005 0.604935C0.560343 0.613057 0.554998 0.6241 0.554005 0.635933C0.554216 0.646881 0.558088 0.657449 0.565004 0.665939L4.729 4.82993C4.73296 4.83417 4.73777 4.83752 4.74311 4.83976C4.74845 4.842 4.75421 4.84308 4.76 4.84293C4.77165 4.84287 4.7828 4.8382 4.791 4.82993L8.955 0.669937C8.96472 0.662698 8.97119 0.651919 8.97301 0.639938V0.637939Z"
                    fill="#48474D"
                    stroke="#48474D"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>

              <ul>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Gündəm
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Elm və Təhsil
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Mədəniyyət
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Maraqlı
                </li>
              </ul>
            </div>
            <div
              onClick={(e) => {
                if (e.currentTarget.classList[1] == "linkSlider_anim") {
                  e.currentTarget.classList.remove("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.remove("navbar__bottomlinks_active");
                } else {
                  e.currentTarget.classList.add("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.add("navbar__bottomlinks_active");
                }
              }}
              className="linkSlider"
            >
              <div className="d-flex justify-content-between">
                <p className="navbar__bottomlinks">Tədbirlər</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150005 0.637939C0.150393 0.517905 0.198197 0.402887 0.283005 0.31794C0.325094 0.275671 0.375118 0.242124 0.430204 0.219238C0.485291 0.196352 0.544353 0.18457 0.604005 0.18457C0.663656 0.18457 0.722719 0.196352 0.777805 0.219238C0.832891 0.242124 0.882915 0.275671 0.925005 0.31794L4.76501 4.15794L8.60501 0.319939C8.6471 0.277669 8.69712 0.244131 8.7522 0.221245C8.80729 0.198359 8.86635 0.186577 8.926 0.186577C8.98566 0.186577 9.04472 0.198359 9.09981 0.221245C9.15489 0.244131 9.20491 0.277669 9.247 0.319939C9.28913 0.361907 9.32257 0.411771 9.34539 0.466682C9.36821 0.521594 9.37998 0.580473 9.38 0.639938C9.37998 0.699404 9.36821 0.758275 9.34539 0.813187C9.32257 0.868098 9.28913 0.91797 9.247 0.959938L5.08 5.12193C5.03794 5.16379 4.98801 5.19692 4.93309 5.2194C4.87817 5.24188 4.81935 5.25328 4.76 5.25294C4.70082 5.25303 4.64221 5.24131 4.5876 5.21848C4.533 5.19564 4.4835 5.16214 4.442 5.11993L0.282005 0.959938C0.239545 0.917852 0.205979 0.867656 0.183303 0.81234C0.160626 0.757024 0.149303 0.697719 0.150005 0.637939ZM8.97301 0.637939C8.97299 0.631689 8.97165 0.62551 8.96906 0.61982C8.96647 0.614129 8.96271 0.609054 8.958 0.604935C8.9538 0.600549 8.94876 0.597058 8.94317 0.594673C8.93759 0.592289 8.93158 0.591064 8.9255 0.591064C8.91943 0.591064 8.91342 0.592289 8.90784 0.594673C8.90225 0.597058 8.8972 0.600549 8.893 0.604935L4.764 4.73394L0.635005 0.604935C0.626389 0.595814 0.614543 0.59043 0.602005 0.589935C0.595755 0.589948 0.58958 0.591293 0.583889 0.59388C0.578198 0.596466 0.573125 0.600234 0.569005 0.604935C0.560343 0.613057 0.554998 0.6241 0.554005 0.635933C0.554216 0.646881 0.558088 0.657449 0.565004 0.665939L4.729 4.82993C4.73296 4.83417 4.73777 4.83752 4.74311 4.83976C4.74845 4.842 4.75421 4.84308 4.76 4.84293C4.77165 4.84287 4.7828 4.8382 4.791 4.82993L8.955 0.669937C8.96472 0.662698 8.97119 0.651919 8.97301 0.639938V0.637939Z"
                    fill="#48474D"
                    stroke="#48474D"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>

              <ul>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Gündəm
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Elm və Təhsil
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Mədəniyyət
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Maraqlı
                </li>
              </ul>
            </div>
            <div
              onClick={(e) => {
                if (e.currentTarget.classList[1] == "linkSlider_anim") {
                  e.currentTarget.classList.remove("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.remove("navbar__bottomlinks_active");
                } else {
                  e.currentTarget.classList.add("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.add("navbar__bottomlinks_active");
                }
              }}
              className="linkSlider"
            >
              <div className="d-flex justify-content-between">
                <p className="navbar__bottomlinks">Elanlar</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150005 0.637939C0.150393 0.517905 0.198197 0.402887 0.283005 0.31794C0.325094 0.275671 0.375118 0.242124 0.430204 0.219238C0.485291 0.196352 0.544353 0.18457 0.604005 0.18457C0.663656 0.18457 0.722719 0.196352 0.777805 0.219238C0.832891 0.242124 0.882915 0.275671 0.925005 0.31794L4.76501 4.15794L8.60501 0.319939C8.6471 0.277669 8.69712 0.244131 8.7522 0.221245C8.80729 0.198359 8.86635 0.186577 8.926 0.186577C8.98566 0.186577 9.04472 0.198359 9.09981 0.221245C9.15489 0.244131 9.20491 0.277669 9.247 0.319939C9.28913 0.361907 9.32257 0.411771 9.34539 0.466682C9.36821 0.521594 9.37998 0.580473 9.38 0.639938C9.37998 0.699404 9.36821 0.758275 9.34539 0.813187C9.32257 0.868098 9.28913 0.91797 9.247 0.959938L5.08 5.12193C5.03794 5.16379 4.98801 5.19692 4.93309 5.2194C4.87817 5.24188 4.81935 5.25328 4.76 5.25294C4.70082 5.25303 4.64221 5.24131 4.5876 5.21848C4.533 5.19564 4.4835 5.16214 4.442 5.11993L0.282005 0.959938C0.239545 0.917852 0.205979 0.867656 0.183303 0.81234C0.160626 0.757024 0.149303 0.697719 0.150005 0.637939ZM8.97301 0.637939C8.97299 0.631689 8.97165 0.62551 8.96906 0.61982C8.96647 0.614129 8.96271 0.609054 8.958 0.604935C8.9538 0.600549 8.94876 0.597058 8.94317 0.594673C8.93759 0.592289 8.93158 0.591064 8.9255 0.591064C8.91943 0.591064 8.91342 0.592289 8.90784 0.594673C8.90225 0.597058 8.8972 0.600549 8.893 0.604935L4.764 4.73394L0.635005 0.604935C0.626389 0.595814 0.614543 0.59043 0.602005 0.589935C0.595755 0.589948 0.58958 0.591293 0.583889 0.59388C0.578198 0.596466 0.573125 0.600234 0.569005 0.604935C0.560343 0.613057 0.554998 0.6241 0.554005 0.635933C0.554216 0.646881 0.558088 0.657449 0.565004 0.665939L4.729 4.82993C4.73296 4.83417 4.73777 4.83752 4.74311 4.83976C4.74845 4.842 4.75421 4.84308 4.76 4.84293C4.77165 4.84287 4.7828 4.8382 4.791 4.82993L8.955 0.669937C8.96472 0.662698 8.97119 0.651919 8.97301 0.639938V0.637939Z"
                    fill="#48474D"
                    stroke="#48474D"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>

              <ul>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Gündəm
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Elm və Təhsil
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Mədəniyyət
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Maraqlı
                </li>
              </ul>
            </div>

            <div
              onClick={(e) => {
                if (e.currentTarget.classList[1] == "linkSlider_anim") {
                  e.currentTarget.classList.remove("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.remove("navbar__bottomlinks_active");
                } else {
                  e.currentTarget.classList.add("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.add("navbar__bottomlinks_active");
                }
              }}
              className="linkSlider"
            >
              <div className="d-flex justify-content-between">
                <p className="navbar__bottomlinks">Təhsil</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150005 0.637939C0.150393 0.517905 0.198197 0.402887 0.283005 0.31794C0.325094 0.275671 0.375118 0.242124 0.430204 0.219238C0.485291 0.196352 0.544353 0.18457 0.604005 0.18457C0.663656 0.18457 0.722719 0.196352 0.777805 0.219238C0.832891 0.242124 0.882915 0.275671 0.925005 0.31794L4.76501 4.15794L8.60501 0.319939C8.6471 0.277669 8.69712 0.244131 8.7522 0.221245C8.80729 0.198359 8.86635 0.186577 8.926 0.186577C8.98566 0.186577 9.04472 0.198359 9.09981 0.221245C9.15489 0.244131 9.20491 0.277669 9.247 0.319939C9.28913 0.361907 9.32257 0.411771 9.34539 0.466682C9.36821 0.521594 9.37998 0.580473 9.38 0.639938C9.37998 0.699404 9.36821 0.758275 9.34539 0.813187C9.32257 0.868098 9.28913 0.91797 9.247 0.959938L5.08 5.12193C5.03794 5.16379 4.98801 5.19692 4.93309 5.2194C4.87817 5.24188 4.81935 5.25328 4.76 5.25294C4.70082 5.25303 4.64221 5.24131 4.5876 5.21848C4.533 5.19564 4.4835 5.16214 4.442 5.11993L0.282005 0.959938C0.239545 0.917852 0.205979 0.867656 0.183303 0.81234C0.160626 0.757024 0.149303 0.697719 0.150005 0.637939ZM8.97301 0.637939C8.97299 0.631689 8.97165 0.62551 8.96906 0.61982C8.96647 0.614129 8.96271 0.609054 8.958 0.604935C8.9538 0.600549 8.94876 0.597058 8.94317 0.594673C8.93759 0.592289 8.93158 0.591064 8.9255 0.591064C8.91943 0.591064 8.91342 0.592289 8.90784 0.594673C8.90225 0.597058 8.8972 0.600549 8.893 0.604935L4.764 4.73394L0.635005 0.604935C0.626389 0.595814 0.614543 0.59043 0.602005 0.589935C0.595755 0.589948 0.58958 0.591293 0.583889 0.59388C0.578198 0.596466 0.573125 0.600234 0.569005 0.604935C0.560343 0.613057 0.554998 0.6241 0.554005 0.635933C0.554216 0.646881 0.558088 0.657449 0.565004 0.665939L4.729 4.82993C4.73296 4.83417 4.73777 4.83752 4.74311 4.83976C4.74845 4.842 4.75421 4.84308 4.76 4.84293C4.77165 4.84287 4.7828 4.8382 4.791 4.82993L8.955 0.669937C8.96472 0.662698 8.97119 0.651919 8.97301 0.639938V0.637939Z"
                    fill="#48474D"
                    stroke="#48474D"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>

              <ul>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Gündəm
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Elm və Təhsil
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Mədəniyyət
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Maraqlı
                </li>
              </ul>
            </div>
            <div
              onClick={(e) => {
                if (e.currentTarget.classList[1] == "linkSlider_anim") {
                  e.currentTarget.classList.remove("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.remove("navbar__bottomlinks_active");
                } else {
                  e.currentTarget.classList.add("linkSlider_anim");
                  e.currentTarget
                    .querySelector(".navbar__bottomlinks")
                    .classList.add("navbar__bottomlinks_active");
                }
              }}
              className="linkSlider"
            >
              <div className="d-flex justify-content-between">
                <p className="navbar__bottomlinks">Digər</p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150005 0.637939C0.150393 0.517905 0.198197 0.402887 0.283005 0.31794C0.325094 0.275671 0.375118 0.242124 0.430204 0.219238C0.485291 0.196352 0.544353 0.18457 0.604005 0.18457C0.663656 0.18457 0.722719 0.196352 0.777805 0.219238C0.832891 0.242124 0.882915 0.275671 0.925005 0.31794L4.76501 4.15794L8.60501 0.319939C8.6471 0.277669 8.69712 0.244131 8.7522 0.221245C8.80729 0.198359 8.86635 0.186577 8.926 0.186577C8.98566 0.186577 9.04472 0.198359 9.09981 0.221245C9.15489 0.244131 9.20491 0.277669 9.247 0.319939C9.28913 0.361907 9.32257 0.411771 9.34539 0.466682C9.36821 0.521594 9.37998 0.580473 9.38 0.639938C9.37998 0.699404 9.36821 0.758275 9.34539 0.813187C9.32257 0.868098 9.28913 0.91797 9.247 0.959938L5.08 5.12193C5.03794 5.16379 4.98801 5.19692 4.93309 5.2194C4.87817 5.24188 4.81935 5.25328 4.76 5.25294C4.70082 5.25303 4.64221 5.24131 4.5876 5.21848C4.533 5.19564 4.4835 5.16214 4.442 5.11993L0.282005 0.959938C0.239545 0.917852 0.205979 0.867656 0.183303 0.81234C0.160626 0.757024 0.149303 0.697719 0.150005 0.637939ZM8.97301 0.637939C8.97299 0.631689 8.97165 0.62551 8.96906 0.61982C8.96647 0.614129 8.96271 0.609054 8.958 0.604935C8.9538 0.600549 8.94876 0.597058 8.94317 0.594673C8.93759 0.592289 8.93158 0.591064 8.9255 0.591064C8.91943 0.591064 8.91342 0.592289 8.90784 0.594673C8.90225 0.597058 8.8972 0.600549 8.893 0.604935L4.764 4.73394L0.635005 0.604935C0.626389 0.595814 0.614543 0.59043 0.602005 0.589935C0.595755 0.589948 0.58958 0.591293 0.583889 0.59388C0.578198 0.596466 0.573125 0.600234 0.569005 0.604935C0.560343 0.613057 0.554998 0.6241 0.554005 0.635933C0.554216 0.646881 0.558088 0.657449 0.565004 0.665939L4.729 4.82993C4.73296 4.83417 4.73777 4.83752 4.74311 4.83976C4.74845 4.842 4.75421 4.84308 4.76 4.84293C4.77165 4.84287 4.7828 4.8382 4.791 4.82993L8.955 0.669937C8.96472 0.662698 8.97119 0.651919 8.97301 0.639938V0.637939Z"
                    fill="#48474D"
                    stroke="#48474D"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>

              <ul>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Gündəm
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Elm və Təhsil
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Mədəniyyət
                </li>
                <li className="navbarResponsive__link navbarResponsive__link_narrov">
                  Maraqlı
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
