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
              <h4 className="wc">Welcome</h4>
              <h1>Take Your English To The</h1>
              <h1>Next Level.</h1>
              <br />
              <p>
                Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum
                massa
              </p>
              <p>vivamus tempor imperdiet posuere</p>
              <div className="btn-started">
                <span>&#10095;</span> get started now
              </div>
            </div>
          </div>

          {/* <div className="banner-2">2</div>
        <div className="banner-3">3</div> */}
        </Carousel>
        <div className="container introduce">
          <div className="block-1">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/headset-ico.png"
                alt="headphone"
              />
            </div>
            <strong>Live online classes available 24/7</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
          <div className="block-1 block-custom">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/certified-ico.png"
                alt="logo"
              />
            </div>
            <strong>Practise with online activities and materials</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
          <div className="block-1">
            <div className="bl-img">
              <img
                src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/2022/03/graduate-ico.png"
                alt="headphone"
              />
            </div>
            <strong>Enhance your learning experience</strong>
            <p>Vitae faucib nullamet male uada bibendum imperdiet nulla</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
