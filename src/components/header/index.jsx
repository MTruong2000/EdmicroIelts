import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { Button, Dropdown } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import proFileAvatarPlaceholder from "/img/Profile_avatar_placeholder.png";
import "./style.scss";

function Header({ className }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [jwtTokenNew, setJwtTokenNew] = useState("");
  const [infoAccount, setInfoAccount] = useState({});

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    const fetchDataAccount = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN}api/User/Profile`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        setInfoAccount(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    jwtToken ? setJwtTokenNew(jwtToken) : setJwtTokenNew("");
    fetchDataAccount();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN}api/Category`
        );
        const dropdownItems = response.data.map((category) => ({
          key: category.id,
          label: (
            <Link
              className="a-custom"
              to={`/courses?id=${category.id}&name=${category.name}`}
            >
              {category.name}
            </Link>
          ),
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

  const itemsInfo = [
    {
      key: "1",
      label: (
        <Link className="a-custom" to={`/account-info`}>
          Thông tin tài khoản
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="a-custom" to={`/registered-courses`}>
          Các khóa học đã đăng ký
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="a-custom" to={`/logout`}>
          Đăng xuất
        </Link>
      ),
    },
  ];
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
            {jwtTokenNew ? (
              <div className="block-header-info">
                <p>{infoAccount.fullName}</p>
                <Dropdown menu={{ items: itemsInfo }} trigger={["click"]}>
                  <img
                    src={
                      infoAccount.imageUrl
                        ? infoAccount.imageUrl
                        : proFileAvatarPlaceholder
                    }
                    alt="User Profile"
                  />
                </Dropdown>
              </div>
            ) : (
              <>
                <div className="btn-signin">
                  <Link to="/login">Login</Link>
                </div>
                <div className="btn-signup">
                  <Link to="/sign-up">Sign Up</Link>
                </div>
              </>
            )}
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
                <Link to="/">Homepage</Link>
                <Dropdown
                  menu={{ items }}
                  placement="bottom"
                  trigger={["click"]}
                >
                  <Button className="btn-custom-antd">Courses</Button>
                </Dropdown>
                <a href="/contact">Contact</a>
              </div>
              {jwtTokenNew ? (
                <></>
              ) : (
                <div className="block-modal-sp-signin-signup">
                  <div className="btn-signin">Login</div>
                  <div className="btn-signup">Sign Up</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
