import React from "react";
import { Carousel } from "antd";
import "./style.scss";

function Banner() {
  return (
    <>
      <div className="baner-main">
        <Carousel arrows infinite={false} className="carousel-custom">
          <div className="banner-1">
            <div className="banner-opacity"></div>
            <div className="banner-content">
              <h4 className="wc animate__animated animate__bounce animate__backInDown">Welcome</h4>
              <h1 className="animate__animated animate__fadeInLeftBig animate__delay-1s">Take Your English To The</h1>
              <h1 className="animate__animated animate__fadeInLeftBig animate__delay-1s">Next Level.</h1>
              <br />
              <p className="animate__animated animate__bounceInRight animate__delay-1s">
                Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum
                massa
              </p>
              <p className="animate__animated animate__bounceInRight animate__delay-1s">vivamus tempor imperdiet posuere</p>
              <div className="animate__animated animate__bounceInUp animate__delay-2s btn-started">
                <span>&#10095;</span> get started now
              </div>
            </div>
          </div>
        </Carousel>
        <div className="container introduce">
          <div className="block-1 animate__animated animate__backInLeft animate__delay-2s">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/headset-ico.png"
                alt="headphone"
              />
            </div>
            <strong  className="fw-custom">Live online classes available 24/7</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
          <div className="block-1 block-custom animate__animated animate__bounceInUp animate__delay-2s">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/certified-ico.png"
                alt="logo"
              />
            </div>
            <strong  className="fw-custom">Practise with online activities and materials</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
          <div className="block-1 animate__animated animate__backInRight animate__delay-2s">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/graduate-ico.png"
                alt="headphone"
              />
            </div>
            <strong  className="fw-custom">Enhance your learning experience</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
