import Footer from "../../components/footer";
import Header from "../../components/header";
import { CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import proFileAvatarPlaceholder from "/img/Profile_avatar_placeholder.png";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.scss";

function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState({});
  const [courseContent, setCourseContent] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwtToken");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN}api/Course/${id}`
        );

        setCourseDetail(response.data);
        setCourseContent(response.data.courseContent.split("|"));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
const paymentCourse = async () => { 
  try {
    const response = await axios.post(
      `${
        import.meta.env.VITE_DOMAIN
      }api/Payment/CreatePaymentUrl`,
      {
        courseId: id,
        amount: courseDetail.price,
      },
      {
        headers: {
          'Authorization': `Bearer ${jwtToken}`, 
          'Content-Type': 'application/json', 
        },
      }
    );
    window.location.href = response.data.paymentUrl;
  } catch (error) {
    Swal.fire({
      title: "Payment Fail ?",
      text: "Payment Fail",
      icon: "error",
    });
    console.error("Payment error:", error.response.data.message);
  }
};

const handleResgister = () => {
  if (jwtToken) {
    paymentCourse();
  } else {
    navigate("/login");
  }
};

  return (
    <>
      <Header className="block-header-courses" />
      <div className="container block-coursedetail">
        <div className="block-coursedetail-img">
          <img src={courseDetail.imageLink} alt="img" />
        </div>
        <div className="block-course-detail-header">
          <div className="block-couse-details-title">
            <p className="p-title">KHÓA HỌC TIẾNG ANH</p>
            <h1>{courseDetail.title}</h1>
          </div>
          <div className="block-couse-details-price">
            {courseDetail && typeof courseDetail.price === "number"
              ? courseDetail.price.toLocaleString("it-IT")
              : "Price not available"}
          </div>
        </div>
        <div className="block-course-detail-body">
          <p>{courseDetail.description}</p>
          <div className="block-course-detail-body-time">
            <CiClock2 />
            <span>8 tuần</span>
          </div>
          <div className="block-course-detail-content">
            <h1>Nội dung khóa học</h1>
            {courseContent.map((item, index) => (
              <div className="block-content-course" key={index}>
                <FaCheck className="icons-check" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="block-course-btn">
            <div className="btn-resgister-now" onClick={handleResgister}>Đăng ký ngay</div>
          </div>
        </div>
        <div className="block-course-teacher">
          <h2>Giảng viên</h2>
          <div className="info-teacher">
            <div className="block-img-teacher">
              <img src={courseDetail.teacherImageUrl
                ? courseDetail.teacherImageUrl
                : proFileAvatarPlaceholder} alt="avatar" />
            </div>
            <div className="block-content-teacher">
              <h5>{courseDetail.teacherName}</h5>
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
