import Footer from "../../components/footer";
import Header from "../../components/header";
import { CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import "./style.scss";

function CourseDetail() {
  return (
    <>
      <Header className="block-header-courses" />
      <div className="container block-coursedetail">
        <div className="block-coursedetail-img">
          <img
            src="https://edmicro.edu.vn/wp-content/uploads/2023/07/ielts-junior-01.jpg"
            alt="img"
          />
        </div>
        <div className="block-course-detail-header">
          <div className="block-couse-details-title">
            <p className="p-title">KHÓA HỌC TIẾNG ANH</p>
            <h1>Tiếng Anh giao tiếp cho người mới bắt đầu</h1>
          </div>
          <div className="block-couse-details-price">2.500.000</div>
        </div>
        <div className="block-course-detail-body">
          <p>
            Khóa học này được thiết kế đặc biệt cho những người mới bắt đầu học
            tiếng Anh. Bạn sẽ học cách giao tiếp hiệu quả trong các tình huống
            hằng ngày, từ chào hỏi đến đặt món ăn tại nhà hàng
          </p>
          <div className="block-course-detail-body-time">
            <CiClock2 />
            <span>8 tuần</span>
          </div>
          <div className="block-course-detail-content">
            <h1>Nội dung khóa học</h1>
            <div className="block-content-course">
              <FaCheck className="icons-check" />
              <p>Phát âm và ngữ điệu cơ bản</p>
            </div>
            <div className="block-content-course">
              <FaCheck className="icons-check" />
              <p>Phát âm và ngữ điệu cơ bản</p>
            </div>
            <div className="block-content-course">
              <FaCheck className="icons-check" />
              <p>Phát âm và ngữ điệu cơ bản</p>
            </div>
            <div className="block-content-course">
              <FaCheck className="icons-check" />
              <p>Phát âm và ngữ điệu cơ bản</p>
            </div>
          </div>
          <div className="block-course-btn">
            <div className="btn-resgister-now">Đăng ký ngay</div>
          </div>
        </div>
        <div className="block-course-teacher">
          <h2>Giảng viên</h2>
          <div className="info-teacher">
            <div className="block-img-teacher">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSf5enQVu3VuLkvA6iXZ3SFv0fNgDFY43u-C3e3-nwmu5HwScxXHags4k6bdNOOZ78T8&usqp=CAU"
                alt="avatar"
              />
            </div>
            <div className="block-content-teacher">
              <h5>Nguyễn Văn A</h5>
              <p>Giảng viên tiếng Anh với hơn 10 năm kinh nghiệm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container block-course-students">
        <h2>Đánh giá từ học viên</h2>
        <div className="list-dg-students">
          <div className="block">
            <div className="info-students">
              <div className="block-img-students">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSf5enQVu3VuLkvA6iXZ3SFv0fNgDFY43u-C3e3-nwmu5HwScxXHags4k6bdNOOZ78T8&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="block-info-students">
                <h5>Nguyễn Văn A</h5>
                <div className="icons-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="block-content-students">
              Khóa học rất hữu ích cho người mới bắt đầu như tôi. Giảng viên
              nhiệt tình và phương pháp giảng dạy dễ hiệu
            </div>
          </div>
          <div className="block">
            <div className="info-students">
              <div className="block-img-students">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSf5enQVu3VuLkvA6iXZ3SFv0fNgDFY43u-C3e3-nwmu5HwScxXHags4k6bdNOOZ78T8&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="block-info-students">
                <h5>Nguyễn Văn A</h5>
                <div className="icons-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="block-content-students">
              Khóa học rất hữu ích cho người mới bắt đầu như tôi. Giảng viên
              nhiệt tình và phương pháp giảng dạy dễ hiệu
            </div>
          </div>
          <div className="block">
            <div className="info-students">
              <div className="block-img-students">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSf5enQVu3VuLkvA6iXZ3SFv0fNgDFY43u-C3e3-nwmu5HwScxXHags4k6bdNOOZ78T8&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div className="block-info-students">
                <h5>Nguyễn Văn A</h5>
                <div className="icons-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="block-content-students">
              Khóa học rất hữu ích cho người mới bắt đầu như tôi. Giảng viên
              nhiệt tình và phương pháp giảng dạy dễ hiệu
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
