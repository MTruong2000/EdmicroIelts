import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "./style.scss";
import { CiYoutube } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="block-footer">
        <div className="block-1">
          <div className="block-info-title">Thông tin liên hệ</div>
          <div className="block-info-desc">
            <p>
              <span>Inbox:</span>{" "}
            </p>
            <p>
              <span>Hotline:</span>{" "}
            </p>
            <p>
              <span>Lịch học & ưu đãi</span> dol.vn Tự học tiếng anh online
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
            <p>Về The IELTS Workshop</p>
            <p>Chương trình học</p>
            <p>Kiểm tra trình độ</p>
            <p>Lịch khai giảng</p>
            <p>Liên hệ</p>
          </div>
        </div>
        <div className="block-3">
          <strong>Cơ sở THE IELTS WORKSHOP</strong>
          <p>*Cơ sở 1: Đà Nẵng</p>
          <p>*Cơ sở 2: Tp.Hồ Chí Minh</p>
          <p>*Cơ sở 3: Hà Nội</p>
          <p>*Cơ sở 4: Hải Phòng</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
