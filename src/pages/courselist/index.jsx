import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

function CourseList() {
  const location = useLocation();
  const [courseList, setCourseList] = useState(null);

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get("id");
  };

  useEffect(() => {
    const id = getQueryParams();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7193/api/Category/${id}/Courses`
        );
        console.log(response.data);
        setCourseList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <>
      <Header className="block-header-courses" />
      <div className="block-banner-course"></div>
      <div className="container block-course">
        <h1>
          CÁC KHÓA HỌC CỦA{" "}
          <span style={{ color: "#FFB800" }}>EDMICRO IELTS</span>
        </h1>
        {courseList && courseList.length > 0 ? (
          <div className="block-course-content">
            {courseList.map((item) => (
              <div className="block-course-card" key={item.id}>
                <div className="block-course-img">
                  <img
                    src="https://edmicro.edu.vn/assets/study-path/1.jpg"
                    alt="card"
                  />
                </div>
                <div className="block-course-desc">
                  <div className="block-title">{item.title}</div>
                  <div className="blokc-course-btn">
                    <div className="btn-price">
                      Giá: {item.price.toLocaleString("it-IT")}
                    </div>
                    <div className="btn-detail">
                      <Link
                        className="a-custom"
                        to={`/courses/${item.id}?title=${item.title}`}
                      >
                        Xem chi tiết
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div className="block-course-sologan">
          <div className="block-course-sologan-img">
            <img src="/img/course_english.png" alt="sologan" />
          </div>
          <div className="block-course-slog-content">
            "Tận hưởng hành trình chinh phục tiếng Anh theo cách dễ dàng nhất!"
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;
