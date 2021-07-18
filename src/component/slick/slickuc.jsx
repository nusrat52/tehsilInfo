import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    

    next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
          <div className="container__sp mt-5">
              <div className="d-flex justify-content-between  mb-5 ">
                  <h2 className="slickk__basliq"> Ən Son Elanlar </h2>
                  
                  <div className="d-flex align-items-center me-4">
                  <div className="slick1__button slickuc__right me-3" onClick={this.previous}>
                  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.7359 13.8233C7.05531 14.1435 7.57182 14.1435 7.89124 13.8233C8.21065 13.4962 8.21065 12.9783 7.89124 12.6513L2.82813 7.49989L7.89124 2.34851C8.21065 2.02826 8.21065 1.50358 7.89124 1.17651C7.57182 0.856249 7.05531 0.856249 6.7359 1.17651L1.09512 6.91389C0.782498 7.22733 0.782498 7.77245 1.09512 8.0859L6.7359 13.8233Z" fill="#48474D"/>
</svg>


          </div>
          <div className="slick1__button slickuc__left" onClick={this.next}>
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2641 1.17672C1.94469 0.856459 1.42818 0.856459 1.10876 1.17672C0.789347 1.50379 0.789347 2.02165 1.10876 2.34872L6.17187 7.50011L1.10876 12.6515C0.789347 12.9717 0.789347 13.4964 1.10876 13.8235C1.42818 14.1438 1.94469 14.1438 2.2641 13.8235L7.90488 8.08611C8.2175 7.77267 8.2175 7.22755 7.90488 6.9141L2.2641 1.17672Z" fill="#48474D"/>
</svg>


                      </div>
                      </div>

              </div>

              
              <div className="position__relative" >
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
            <div className="uclukItem">
                      <img className="iclukItme__pic" src="https://previews.123rf.com/images/murrstock/murrstock2006/murrstock200600063/149183683-hr-human-resources-management-recruitment-talent-concept-.jpg" alt="" />
                      <div className="d-flex justify-content-between align-items-center">   <p className='iclukItme__time'>14 May, 2020</p>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6014 0H1.38856C1.11568 0 0.894169 0.221315 0.894169 0.494386V19.0105C0.893783 19.3815 1.101 19.7214 1.43085 19.8909C1.76089 20.0603 2.15794 20.0307 2.45902 19.8143L7.99498 15.8458L13.5311 19.8141C13.8324 20.0302 14.2291 20.0595 14.5589 19.8901C14.8886 19.7208 15.096 19.3811 15.096 19.0105V0.494386C15.096 0.221315 14.8745 0 14.6014 0ZM14.107 19.0103L8.2833 14.8356C8.11104 14.7122 7.8793 14.7122 7.70723 14.8356L1.88333 19.0105V0.988772H14.107V19.0103Z" fill="#48474D"/>
</svg>
</div>
                   


                      <h3 className="iclukItme__text">Mikrokreditlər Strukturunun 
Rəhbəri Vakansiyası</h3>
            </div>
                  </Slider>

          </div>
          <div className=' mt-3 mb-5'>
            <a className="hamisina" href="#">Hamısına Bax</a>
        </div>
        </div>
      );
    }
  }