import React, { useState } from "react";
import "./xeberler.css";
import { Down } from "../icons/icon";
import { Left } from "../icons/icon";
import { Right } from "../icons/icon";
import picMuh from "../../statics/Rectangle 41.png"
import Footer from "../footer"
import NavbarSec from "../navbar/navbarSec"
import Category from "../kategoriya/category"
let tabs = [];
let texts = [];
let pics = [];

function Xeberler() {
  const [olke, setOlke] = useState(false);
  const [tarix, setTarix] = useState(false);

  return (
    <div>
<NavbarSec/>
<Category olke={olke} setOlke={setOlke} tarix={tarix} setTarix={setTarix}/>
      {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}

      <div className="main container__sp">
        {/* <h1 className='main__header'>Ən Son Xəbərlər</h1> */}

        <div className="mainItem">
          <img
            className="mainItem__picture"
            src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png"
            alt=""
          />
          <div className="mainItem__texts">
            <p className="mainItem__date">17 May, 2020</p>
            <h2 className="mainItem__header">
              Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.
            </h2>
            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".mainItem__text")
                    .classList.add("mainItem__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(tab) => {
                  tabs.push(tab);
                }}
                className="mainItem__text"
              >
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                soluta consequuntur veniam ab consectetur accusantium quam, eum
                sint nam amet numquam ipsum reiciendis et impedit, quasi
                repudiandae excepturi sapiente nemo. Sed minima enim inventore
                delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Provident laudantium dolor, nam
                consectetur laborum in quo atque aperiam recusandae voluptates
                omnis eaque fuga quaerat officia autem aut quam repellendus
                praesentium? Incidunt ducimus voluptates laboriosam, obcaecati
                ea accusamus quam nam eligendi suscipit dolor repellat nulla hic
                pariatur amet asperiores magni enim sapiente saepe voluptatum
                aperiam numquam? Ut fuga corrupti quo commodi. Fugiat, vel.
                Deserunt enim similique neque, facilis sapiente ipsum nam fugiat
                aliquam illo nisi commodi placeat. Earum facilis sit, facere
                exercitationem voluptatem eum dolores, suscipit ex fugiat vel
                nisi numquam. magnam quod. Eos quas, minima aut nihil non
                mollitia explicabo sit error voluptatum harum. Qui optio at
                explicabo cum nihil.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mainItem">
          <img
            className="mainItem__picture"
            src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png"
            alt=""
          />
          <div className="mainItem__texts">
            <p className="mainItem__date">17 May, 2020</p>
            <h2 className="mainItem__header">
              Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.
            </h2>
            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".mainItem__text")
                    .classList.add("mainItem__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(tab) => {
                  tabs.push(tab);
                }}
                className="mainItem__text"
              >
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                soluta consequuntur veniam ab consectetur accusantium quam, eum
                sint nam amet numquam ipsum reiciendis et impedit, quasi
                repudiandae excepturi sapiente nemo. Sed minima enim inventore
                delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Provident laudantium dolor, nam
                consectetur laborum in quo atque aperiam recusandae voluptates
                omnis eaque fuga quaerat officia autem aut quam repellendus
                praesentium? Incidunt ducimus voluptates laboriosam, obcaecati
                ea accusamus quam nam eligendi suscipit dolor repellat nulla hic
                pariatur amet asperiores magni enim sapiente saepe voluptatum
                aperiam numquam? Ut fuga corrupti quo commodi. Fugiat, vel.
                Deserunt enim similique neque, facilis sapiente ipsum nam fugiat
                aliquam illo nisi commodi placeat. Earum facilis sit, facere
                exercitationem voluptatem eum dolores, suscipit ex fugiat vel
                nisi numquam. magnam quod. Eos quas, minima aut nihil non
                mollitia explicabo sit error voluptatum harum. Qui optio at
                explicabo cum nihil.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mainItem">
          <img
            className="mainItem__picture"
            src="https://mk0plandiscclonj4eof.kinstacdn.com/wp-content/uploads/2019/09/HR-plan.png"
            alt=""
          />
          <div className="mainItem__texts">
            <p className="mainItem__date">17 May, 2020</p>
            <h2 className="mainItem__header">
              Ali Təhsil Müəssisələrinə Sənəd Qəbulu Başlayıb.
            </h2>
            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".mainItem__text")
                    .classList.add("mainItem__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(tab) => {
                  tabs.push(tab);
                }}
                className="mainItem__text"
              >
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                soluta consequuntur veniam ab consectetur accusantium quam, eum
                sint nam amet numquam ipsum reiciendis et impedit, quasi
                repudiandae excepturi sapiente nemo. Sed minima enim inventore
                delectus atque? Totam minus quasi non Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Provident laudantium dolor, nam
                consectetur laborum in quo atque aperiam recusandae voluptates
                omnis eaque fuga quaerat officia autem aut quam repellendus
                praesentium? Incidunt ducimus voluptates laboriosam, obcaecati
                ea accusamus quam nam eligendi suscipit dolor repellat nulla hic
                pariatur amet asperiores magni enim sapiente saepe voluptatum
                aperiam numquam? Ut fuga corrupti quo commodi. Fugiat, vel.
                Deserunt enim similique neque, facilis sapiente ipsum nam fugiat
                aliquam illo nisi commodi placeat. Earum facilis sit, facere
                exercitationem voluptatem eum dolores, suscipit ex fugiat vel
                nisi numquam. magnam quod. Eos quas, minima aut nihil non
                mollitia explicabo sit error voluptatum harum. Qui optio at
                explicabo cum nihil.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-5">

        <div className="paginatio ">
          {" "}

          <Left />
         <p className='m-0 paginato__texts'>  <span className='paginato__text'>1</span> /34</p>
          <Right />{" "}
        </div>
        </div>
        <div className="paginatioWrapper mb-4">
        <h1 class="main__header align-self-start mb-0">Əlaqəli Videolar</h1>
        <div className="paginatio paginatio_150">
          {" "}

          <Left />
           <Right />{" "}
        </div>
        </div>
        <div className="row">
        <div className="col-4 cardd">
            <img className='card__img' src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">Mikrokreditlər Strukturunun Rəhbəri 
Vakansiyası</p>
          </div>



          <div className="col-4 cardd">
            <img className='card__img' src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">Mikrokreditlər Strukturunun Rəhbəri 
Vakansiyası</p>
          </div>


          <div className="col-4 cardd">
            <img className='card__img' src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">Mikrokreditlər Strukturunun Rəhbəri 
Vakansiyası</p>
          </div>


          
        </div>
        



      </div>

        <Footer/>
    </div>
  );
}

export default Xeberler;
