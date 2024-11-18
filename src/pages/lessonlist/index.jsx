import Footer from "../../components/footer";
import Header from "../../components/header";
import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";
import { GrLinkPrevious } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import "./style.scss";

function LessionList() {
  const [isShowList, setIsShowList] = useState(false);
  return (
    <>
      <Header className="block-header-courses" />
      <div className="container block-body-lesson">
        <div className="block-body-lesson-title">
          Advanced JavaScript Techniques
        </div>
        <div className="block-body-lesson-desc">
          <div
            className={`block-body-lesson-desc-video-img ${
              isShowList ? "w-100" : ""
            }`}
          >
            <div className="block-body-lesson-desc-video-img-player">
              {/* <iframe
                className="player-block"
                src="https://drive.google.com/file/d/19Le4T9EU3oWdLGPbqT-UmGf7B5abkMSF/view?usp=drive_link"
                allow="autoplay"
              ></iframe> */}
              <YouTube className="player-block" videoId="sNqfQZI9WdU" />
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
              {/* <ReactPlayer className="player-block" url="https://drive.google.com/file/d/19Le4T9EU3oWdLGPbqT-UmGf7B5abkMSF/view" /> */}
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
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <SiTicktick className="color-success" />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <SiTicktick className="color-success" />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <SiTicktick className="color-success" />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <FaRegCircle />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <FaRegCircle />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <FaRegCircle />
                  <p>Introduction to the Course</p>
                </div>
                <div className="block-body-lesson-desc-list-lesson-list-lesson-item">
                  <FaRegCircle />
                  <p>Introduction to the Course</p>
                </div>
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
