import "./style.scss";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="block-footer">
        <div className="block-1">
          <div className="block-info-title">Thông tin liên hệ</div>
          <div className="block-footer-logo">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="block-info-desc">
            <p>
              <span>Hotline:</span> 0905.686.686
            </p>
            <p>
              <span>Inbox:</span> aducaenglish@gmail.com
            </p>
            <p>
              <span>Lịch học & ưu đãi</span> dol.vn Tự học tiếng anh online
            </p>
            <p>
              <span>Tự học tiếng Anh online</span>
            </p>
          </div>
          <div className="block-icons">
            <p>Theo dõi DOL tại</p>
            <div className="block-main-icons">
              <FaFacebookSquare />
              <FaInstagram />
              <CiYoutube />
              <IoCallOutline />
            </div>
          </div>
          <div className="block-hotline">
            <strong></strong>
          </div>
        </div>
        <div className="block-2">
          <div className="block-about">
            <strong>ABOUT</strong>
            <p>Về Aduca Enlish</p>
            <p>Chương trình học</p>
            <p>Đội ngũ giảng viên</p>
            <p>Lịch khai giảng</p>
            <p>Feedback của học viên</p>
            <p>Liên hệ</p>
          </div>
        </div>
        <div className="block-3">
          <strong>Cơ sở ADUCA ENGLISH</strong>
          <div className="block-city">
            <div className="city-name">ĐÀ NẴNG</div>
            <p>- 233 Nguyễn Văn Linh, Thanh Khê</p>
            <p>- 254 Tôn Đức Thắng, P. Hòa Minh, Q. Liên Chiểu</p>
            <p>- 226 Ngũ Hành Sơn, P. Mỹ An, Q. Ngũ Hành Sơn</p>
          </div>
          <div className="block-city">
            <div className="city-name">TP. HỒ CHÍ MINH</div>
            <p>- 94 Cộng Hòa, Tân Bình</p>
            <p>- 469 Lỹ Thường Kiệt, Tân Bình</p>
            <p>- 40-42 Bàu Cát, P.14, Tân Bình</p>
            <p>- 278 Lũy Bán Bích, Tân Phú</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
