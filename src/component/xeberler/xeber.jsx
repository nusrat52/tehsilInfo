import React, { useEffect } from "react";
import NavbarSec from "../navbar/navbarSec";

import picMuh from "../../statics/Rectangle 174.png";
import "./xeber.css";
import {
  Twitter,
  Whatsapp,
  Facebook,
  Instagram,
  Telegram,
} from "../icons/icon";

import Footer from "../footer"
import img from "../../statics/Rectangle 174.png";
let texts = [];
function Xeber() {
  useEffect(() => {
    texts.forEach((element) => {
      let p = element.innerText;
      element.innerText = [p.slice(0, 323), "\n", p.slice(323)].join("");
    });
  });
  return (
    <>
      <NavbarSec />
      <div className="container mt-5">
        <h1 className="xeber__header">
          Kembric Universitetinin Professoru MMBİ-nin Magistrantlarına mühazirə
          oxuyacaq.{" "}
        </h1>
        <p className="xeber__text">17 May, 2020</p>
        <img className="xeber__img" src={img} alt="main image" />
        <p className="xeber__textt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat hac
          ipsum dignissim egestas elementum velit ut. Amet velit amet turpis
          tortor est integer maecenas. Vitae netus sed in etiam maecenas non
          vitae. Amet habitasse amet in nisi elit viverra at eu. Nunc nulla
          suspendisse velit sit egestas ultricies mi a in. Commodo justo vel
          pretium enim dis. Nunc in sed vel felis ipsum eget vel eget. In id sit
          amet vestibulum eget leo ipsum. Ipsum feugiat arcu feugiat arcu, a,
          pellentesque urna. Eget enim sit ipsum diam non volutpat ipsum ipsum.
          Ultrices turpis non in quam nunc, etiam scelerisque. In bibendum
          suspendisse nunc, dui adipiscing sagittis, sit mattis. Risus,
          scelerisque neque laoreet viverra dui nulla commodo tortor, elit. Est
          senectus turpis pellentesque convallis maecenas quis blandit aenean
          justo. Ridiculus felis metus gravida eu pharetra lacus, libero orci
          eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          hac ipsum dignissim egestas elementum velit ut. Amet velit amet turpis
          tortor est integer maecenas. Vitae netus sed in etiam maecenas non
          vitae. Amet habitasse amet in nisi elit viverra at eu. Nunc nulla
          suspendisse velit sit egestas ultricies mi a in. Commodo justo vel
          pretium enim dis. Nunc in sed vel felis ipsum eget vel eget. In id sit
          amet vestibulum eget leo ipsum. Ipsum feugiat arcu. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Feugiat hac ipsum dignissim
          egestas elementum velit ut. Amet velit amet turpis tortor est integer
          maecenas. Vitae netus sed in etiam maecenas non vitae. Amet habitasse
          amet in nisi elit viverra at eu nunc nulla suspendisse velit.
        </p>
        <div className="xeber__icons mt-5">
          <span className="xeebr__paylas me-3">Paylaş</span>
          <div className="me-3">
            <Twitter />
          </div>

          <div className="me-3">
            <Facebook />
          </div>
          <div className="me-3">
            <Instagram />
          </div>
          <div className="me-3">
            <Telegram />
          </div>
          <div className="me-3">
            <Whatsapp />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 col-sm-12 mb-sm-4 mb-md-0 cardd">
            <img className="card__img" src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">
              Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
            </p>

            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".koshe__text")
                    .classList.add("koshe__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(text) => {
                  texts.push(text);
                }}
                className="koshe__text koshe__text_xeber"
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

          <div className="col-md-4 col-sm-12   mb-sm-4 mb-md-0 cardd">
            <img className="card__img" src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">
              Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
            </p>
            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".koshe__text")
                    .classList.add("koshe__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(text) => {
                  texts.push(text);
                }}
                className="koshe__text koshe__text_xeber"
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

          <div className="col-md-4 col-sm-12   mb-sm-4 mb-md-0 cardd">
            <img className="card__img" src={picMuh} alt="" />
            <p className="card__tarix">14 May, 2020</p>
            <p className="card__text">
              Mikrokreditlər Strukturunun Rəhbəri Vakansiyası
            </p>

            <div className="position__relative">
              <span
                onClick={(e) => {
                  e.currentTarget
                    .closest(".position__relative")
                    .querySelector(".koshe__text")
                    .classList.add("koshe__text_scroll");
                  e.currentTarget.classList.add("d-none");
                }}
                className="mainItem__load"
              >
                davamını oxu
              </span>
              <p
                ref={(text) => {
                  texts.push(text);
                }}
                className="koshe__text koshe__text_xeber"
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
          </div>
          <Footer/>
    </>
  );
}

export default Xeber;
