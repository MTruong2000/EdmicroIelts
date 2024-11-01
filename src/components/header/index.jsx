import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { Button, Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function Header({ className }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [course, setCourse] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7193/api/Category`);
        setCourse(response.data);
        const dropdownItems = response.data.map((category) => ({
          key: category.id,
          label: (
            <Link className="a-custom" to={`/courses?id=${category.id}&name=${category.name}`}>
              {category.name}
            </Link>
          )
        }));
        setItems(dropdownItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 32) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const cancelModal = () => {
    setIsModalOpen(false);
  };
  const courseDOM = (
    <Menu>
      {course.map((item) => (
        <Menu.Item key={item.id}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <div className={`block-header ${className} ${isSticky ? "sticky" : ""}`}>
        <div className="block-header-img">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="block-header-content">
          <div className="block-header-content-left">
            <div className="block-menu-item">
              <Link to="/">Homepage</Link>
            </div>

            <Dropdown menu={{ items }} placement="bottom">
              <Button className="btn-custom-antd">Courses</Button>
            </Dropdown>
            <div className="block-menu-item">
              <Link to="/">Contact</Link>
            </div>
          </div>
          <div className="block-header-content-right">
            <div className="btn-signin">Login</div>
            <div className="btn-signup">Sign Up</div>
          </div>
        </div>

        <div className="block-header-content-sp">
          <FiMenu onClick={showModal} />

          {isModalOpen && (
            <div
              className={`animate__animated block-modal-sp ${
                isModalOpen ? "animate__fadeInRight" : "animate__bounceOutRight"
              } ${!isSticky ? "" : "block-modal-sp-sticky"}`}
            >
              <div className="block-modal-cancel">
                <MdOutlineCancel onClick={cancelModal} />
              </div>
              <div className="block-modal-sp-link">
                <a href="/">Homepages</a>
                <a href="/course">Courses</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="block-modal-sp-signin-signup">
                <div className="btn-signin">Login</div>
                <div className="btn-signup">Sign Up</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
