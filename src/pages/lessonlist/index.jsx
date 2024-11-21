import Footer from "../../components/footer";
import Header from "../../components/header";
import { Player } from "video-react";
import { GrLinkPrevious } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./style.scss";

function LessionList() {
  const [searchParams] = useSearchParams();
  const [isShowList, setIsShowList] = useState(false);
  const [listLesson, setLissLesson] = useState([]);
  const [activeLessson, setActiveLesson] = useState("");
  const [videoLessDetail, setVideoLessDetail] = useState({});
  const [activeLessonId, setActiveLessonId] = useState(null);

  const titleCourse = searchParams.get("title");
  const fetchData = async () => {
    const jwtToken = Cookies.get("jwtToken");
    const courseId = searchParams.get("courseId");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN}api/Lesson/LessonProgress/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setLissLesson(response.data);
      if (response.data) {
        const firstIncompleteLesson = response.data.find(
          (item) => !item.isCompleted
        );
        if (firstIncompleteLesson) {
          setActiveLesson(firstIncompleteLesson.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleGetVideo = async (courseId) => {
    setActiveLessonId(courseId);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN}api/LessonVideo/Lesson/${courseId}`
      );
      response.data && response.data.length > 0
        ? setVideoLessDetail(response.data[0])
        : setVideoLessDetail({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetLessonVideo = (lessonId) => {
    handleGetVideo(lessonId);
  };

  useEffect(() => {
    handleGetLessonVideo(activeLessson);
  }, [activeLessson]);

  const handleSaveProgress = async () => {
    const jwtToken = Cookies.get("jwtToken");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DOMAIN}api/Lesson/SaveProgress/${
          videoLessDetail.lessonId
        }`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      response.status === 200 ? fetchData() : null;
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Header className="block-header-courses" />
      <div className="container block-body-lesson">
        <div className="block-body-lesson-title">{titleCourse}</div>
        <div className="block-body-lesson-desc">
          <div
            className={`block-body-lesson-desc-video-img ${
              isShowList ? "w-100" : ""
            }`}
          >
            <div className="block-body-lesson-desc-video-img-player">
              <Player
                key={videoLessDetail.videoUrl}
                className="player-block"
                onEnded={handleSaveProgress}
              >
                <source src={videoLessDetail.videoUrl} />
              </Player>
              {isShowList && (
                <div
                  className="gr-link-previous"
                  onClick={() => {
                    setIsShowList((prev) => !prev);
                  }}
                >
                  <GrLinkPrevious />
                </div>
              )}
            </div>
            <p>Basic Concepts</p>
          </div>
          {!isShowList && (
            <div className="block-body-lesson-desc-list-lesson">
              <div className="block-body-lesson-desc-list-lesson-header">
                <h3>Lessons</h3>
                <MdOutlineCancel
                  onClick={() => {
                    setIsShowList((prev) => !prev);
                  }}
                />
              </div>
              <div className="block-body-lesson-desc-list-lesson-list-lesson">
                {listLesson.map((item, index) => {
                  const isActive = activeLessonId === item.id;

                  const isFirstIncomplete =
                    item.isCompleted === false &&
                    listLesson.findIndex(
                      (lesson) => lesson.isCompleted === false
                    ) === index;

                  return (
                    <div
                      key={item.id}
                      className={`block-body-lesson-desc-list-lesson-list-lesson-item ${
                        isActive ? "active-lesson" : ""
                      }`}
                      onClick={
                        item.isCompleted || isFirstIncomplete
                          ? () => handleGetVideo(item.id)
                          : undefined
                      }
                      id={item.id}
                    >
                      <div className="lesson-icons">
                        {item.isCompleted ? (
                          <SiTicktick className="color-success" />
                        ) : (
                          <FaRegCircle />
                        )}
                      </div>
                      <div className="lesson-title">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LessionList;
