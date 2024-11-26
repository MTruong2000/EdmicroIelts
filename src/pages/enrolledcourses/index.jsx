import Footer from "../../components/footer";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./style.scss";

function EnrolledCourse() {
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const navigate = useNavigate();
  const handleDirectLesson = (id, title) => {
    navigate("/enrolled-courses/lesson?courseId=" + id + "&title=" + title);
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN}api/Payment/GetEnrolledCourses`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        setEnrolledCourse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header className="block-header-courses" />
      <div className="container block-enrolled-courses-parent">
        <h2>Các khóa học đã đăng ký</h2>
        <div className="block-enrolled-courses">
          {enrolledCourse.map((item) => (
            <div
              key={item.courseId}
              className="block-enrolled-courses-div"
              onClick={() => handleDirectLesson(item.courseId, item.courseTitle)}
            >
              <div className="block-enrolled-courses-div-img">
                <img src={item.imageLink} alt="img-course" />
              </div>
              <div className="block-enrolled-courses-div-content">
                <h4>{item.courseTitle}</h4>
                <p>{item.teacherName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnrolledCourse;
