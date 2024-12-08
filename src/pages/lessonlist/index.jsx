import Footer from "../../components/footer";
import Header from "../../components/header";
import { Player } from "video-react";
import { GrLinkPrevious } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import { Button, Drawer, Input, List, Typography, Layout } from "antd";
import moment from "moment";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.scss";

const { Content } = Layout;

function LessionList() {
  const [searchParams] = useSearchParams();
  const jwtToken = Cookies.get("jwtToken");
  const courseId = searchParams.get("courseId");
  const Uid = Cookies.get("Uid");

  const [visible, setVisible] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [isShowList, setIsShowList] = useState(false);
  const [listLesson, setLissLesson] = useState([]);
  const [activeLessson, setActiveLesson] = useState("");
  const [videoLessDetail, setVideoLessDetail] = useState({});
  const [activeLessonId, setActiveLessonId] = useState(null);

  const titleCourse = searchParams.get("title");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN}api/Lesson/LessonProgress/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
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

  const fetchMessages = async (courseId, studentId) => {
    console.log(studentId);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DOMAIN}api/Chat/student/${courseId}/messages`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );
      console.log(response.data);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        await axios.post(
          `${
            import.meta.env.VITE_DOMAIN
          }api/Chat/send-from-student?courseId=${courseId}&messageContent=${newMessage}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );
        setNewMessage("");
      } catch (error) {
        Swal.fire({
          title: "Send mess Fail ?",
          text: error,
          icon: "error"
        });
      }
      fetchMessages(courseId, "");
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
            Authorization: `Bearer ${jwtToken}`
          }
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
      <div className=" block-body-lesson">
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
          </div>
          {!isShowList && (
            <div className="block-body-lesson-desc-list-lesson">
              <div className="block-body-lesson-desc-list-lesson-header">
                <h3>Lessons</h3>
                <div
                  className="icons-x"
                  onClick={() => {
                    setIsShowList((prev) => !prev);
                  }}
                >
                  x
                </div>
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
        <Button
          type="primary"
          shape="circle"
          icon={<MessageOutlined />}
          className="btn-chatting"
          style={{
            backgroundColor: "#000",
            borderColor: "#000",
            color: "#fff",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => {
            setVisible(true);
            fetchMessages(courseId, "");
          }}
        />
        <Drawer
          title="Chat"
          placement="right"
          width={800}
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Layout style={{ height: "100%" }}>
            <Layout>
              <Content
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
              >
                <div
                  style={{
                    flexGrow: 1,
                    overflowY: "auto",
                    paddingBottom: "16px"
                  }}
                >
                  <List
                    dataSource={messages}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          justifyContent:
                            item.senderId.toString() === Uid
                              ? "flex-end"
                              : "flex-start",
                          textAlign:
                            item.senderId.toString() === Uid ? "right" : "left"
                        }}
                      >
                        <div
                          style={{
                            maxWidth: "70%",
                            padding: "10px",
                            borderRadius: "8px",
                            backgroundColor:
                              item.senderId.toString() === Uid
                                ? "#000"
                                : "#f0f0f0",
                            color:
                              item.senderId.toString() === Uid ? "#fff" : "#000"
                          }}
                        >
                          <Typography.Text
                            style={{
                              color:
                                item.senderId.toString() === Uid
                                  ? "#fff"
                                  : "#000"
                            }}
                          >
                            {item.content}
                          </Typography.Text>
                          <div
                            style={{
                              fontSize: "12px",
                              marginTop: "5px",
                              opacity: 0.6
                            }}
                          >
                            {moment(item.timestamp).format("HH:mm A")}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center"
                  }}
                >
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onPressEnter={sendMessage}
                  />
                  <Button type="primary" onClick={sendMessage}>
                    Send
                  </Button>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Drawer>
      </div>
      <Footer />
    </>
  );
}

export default LessionList;
