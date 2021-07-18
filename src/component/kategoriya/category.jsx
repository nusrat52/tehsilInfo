import React from 'react'
import { Down } from "../icons/icon";

function Category({setTarix, tarix, olke, setOlke}) {
    return (
        <>
                 <div className="filter container__sp">
        <p className="filter__header">Filtirlə</p>
        <div className="filter__wrapper">
          <div
            tabIndex="-1"
            onFocus={(e) => {
              let parent = e.currentTarget.closest(".filter__wrapper");
              parent.classList.add("filter__wrapper_full");
            }}
            onBlur={(e) => {
              let parent = e.currentTarget.closest(".filter__wrapper");
              parent.classList.remove("filter__wrapper_full");
            }}
            className="selectButton"
          >
            <span className="me-2">Vaxt</span>
            <Down />
          </div>
          <ul className="selectButton__bottom">
            <li
              onMouseDown={(e) => {
                setTarix(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Keçən Həftə
            </li>
            <li
              onMouseDown={(e) => {
                setTarix(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Keçən ay
            </li>
            <li
              onMouseDown={(e) => {
                setTarix(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Keçən il
            </li>
          </ul>
        </div>

        <div className="filter__wrapper">
          <div
            tabIndex="-1"
            onFocus={(e) => {
              let parent = e.currentTarget.closest(".filter__wrapper");
              parent.classList.add("filter__wrapper_full");
            }}
            onBlur={(e) => {
              let parent = e.currentTarget.closest(".filter__wrapper");
              parent.classList.remove("filter__wrapper_full");
            }}
            className="selectButton"
          >
            <span className="me-2">Ölkə</span>
            <Down />
          </div>
          <ul className="selectButton__bottom">
            <li
              onMouseDown={(e) => {
                setOlke(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Azərbaycan
            </li>
            <li
              onMouseDown={(e) => {
                setOlke(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Türkiyə
            </li>
            <li
              onMouseDown={(e) => {
                setOlke(e.currentTarget.innerHTML);
              }}
              className="selectButton__links"
            >
              Rusiya
            </li>
          </ul>
        </div>
      </div>

      <div className="container__sp">
        <div className="filtered">
          {tarix && (
            <div className="filtered__filter me-3">
              <p className="filtered__text mb-0 me-2">{tarix}</p>
              <span
                onClick={() => {
                  setTarix(false);
                }}
                className="filtered__x"
              >
                X
              </span>
            </div>
          )}

          {olke && (
            <div className="filtered__filter me-3">
              <p className="filtered__text mb-0 me-2">{olke}</p>
              <span
                onClick={() => {
                  setOlke(false);
                }}
                className="filtered__x"
              >
                X
              </span>
            </div>
          )}

          <button
            onClick={() => {
              setTarix(false);
              setOlke(false);
            }}
            className="btn btn_nonactive"
          >
            Sıfırla
          </button>
        </div>
      </div> 
        </>
    )
}

export default Category
