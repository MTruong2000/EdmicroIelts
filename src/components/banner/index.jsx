import React from "react";
import "./style.scss";

function Banner() {
  return (
    <>
      <div className="baner-main">
        <div className="banner-img">
          <img className="img-pc" src="/img/banner.jpg" alt="banner" />
          {/* <img className="img-sp" src="/img/banner_sp.jpg" alt="banner" /> */}
        </div>
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
