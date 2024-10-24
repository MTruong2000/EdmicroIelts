import "./style.scss";
import { Carousel } from "antd";
import { Card } from "antd";
import { FaStar } from "react-icons/fa";

const { Meta } = Card;

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function Feedback() {
  return (
    <>
      <div className="block-feedback mt-5">
        <h1 className="pt-4 pb-4">Student's Feedback</h1>
        <Carousel className="pt-4 pb-4">
          <div className="block-card">
            <Card>
              <div className="block-fback-student">
                <div className="block-auth">
                  <div className="block-auth-img">
                    <img
                      src="https://techydevs.com/demos/themes/html/aduca-demo/aduca/images/small-avatar-1.jpg"
                      alt="auth"
                    />
                  </div>
                  <div className="block-auth-info">
                    <h4>Kevin Martin</h4>
                    <p>Student</p>
                    <div>
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                    </div>
                  </div>
                </div>
                <div className="block-desc">
                  <p>
                    No matter what you want to learn, you’ll find an amazing
                    selection of courses here. The instructors are so
                    knowledgable while being fun and interesting. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ad blanditiis
                    consectetur
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="block-fback-student">
                <div className="block-auth">
                  <div className="block-auth-img">
                    <img
                      src="https://techydevs.com/demos/themes/html/aduca-demo/aduca/images/small-avatar-1.jpg"
                      alt="auth"
                    />
                  </div>
                  <div className="block-auth-info">
                    <h4>Kevin Martin</h4>
                    <p>Student</p>
                    <div>
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                    </div>
                  </div>
                </div>
                <div className="block-desc">
                  <p>
                    No matter what you want to learn, you’ll find an amazing
                    selection of courses here. The instructors are so
                    knowledgable while being fun and interesting. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ad blanditiis
                    consectetur
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="block-fback-student">
                <div className="block-auth">
                  <div className="block-auth-img">
                    <img
                      src="https://techydevs.com/demos/themes/html/aduca-demo/aduca/images/small-avatar-1.jpg"
                      alt="auth"
                    />
                  </div>
                  <div className="block-auth-info">
                    <h4>Kevin Martin</h4>
                    <p>Student</p>
                    <div>
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                    </div>
                  </div>
                </div>
                <div className="block-desc">
                  <p>
                    No matter what you want to learn, you’ll find an amazing
                    selection of courses here. The instructors are so
                    knowledgable while being fun and interesting. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ad blanditiis
                    consectetur
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="block-fback-student">
                <div className="block-auth">
                  <div className="block-auth-img">
                    <img
                      src="https://techydevs.com/demos/themes/html/aduca-demo/aduca/images/small-avatar-1.jpg"
                      alt="auth"
                    />
                  </div>
                  <div className="block-auth-info">
                    <h4>Kevin Martin</h4>
                    <p>Student</p>
                    <div>
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                      <FaStar style={{ color: "#f68a03" }} />
                    </div>
                  </div>
                </div>
                <div className="block-desc">
                  <p>
                    No matter what you want to learn, you’ll find an amazing
                    selection of courses here. The instructors are so
                    knowledgable while being fun and interesting. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ad blanditiis
                    consectetur
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Feedback;
