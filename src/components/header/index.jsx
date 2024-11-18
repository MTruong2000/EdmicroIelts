import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { Button, Dropdown } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import proFileAvatarPlaceholder from "/img/Profile_avatar_placeholder.png";
import Loading from "../loading";
import Swal from "sweetalert2";
import "./style.scss";

function Header({ className }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [jwtTokenNew, setJwtTokenNew] = useState("");
  const [infoAccount, setInfoAccount] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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

  const handleLogout = async () => {
    const jwtToken = Cookies.get("jwtToken");
    const refreshToken = Cookies.get("refreshToken");

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_DOMAIN
        }api/User/Logout?refreshToken=${refreshToken}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data,
        showConfirmButton: false,
        timer: 1500,
      });

      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        document.cookie =
          name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
      }
      setJwtTokenNew("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Login Fail ?",
        text: error.response.data,
        icon: "error",
      });
      console.error("Login error:", error.response.data);
    }
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
        <Link className="a-custom" to={`/enrolled-courses`}>
          Các khóa học đã đăng ký
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="a-custom" to="#" onClick={handleLogout}>
          Đăng xuất
        </Link>
      ),
    },
  ];

  return (
    <>
      {isLoading && <Loading />}
      <div className={`block-header ${className} ${isSticky ? "sticky" : ""}`}>
        <div className="block-header-img">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="block-header-content">
          <div className="block-header-content-left">
            <div className="block-menu-item">
              <Link to="/">Trang chủ</Link>
            </div>

            <Dropdown menu={{ items }} placement="bottom">
              <Button className="btn-custom-antd">Khóa học</Button>
            </Dropdown>
            <div className="block-menu-item">
              <Link to="/">Liên hệ</Link>
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
                  <Link to="/login">Đăng nhập</Link>
                </div>
                <div className="btn-signup">
                  <Link to="/sign-up">Đăng ký</Link>
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
                <Link to="/">Trang chủ</Link>
                <Dropdown
                  menu={{ items }}
                  placement="bottom"
                  trigger={["click"]}
                >
                  <Button className="btn-custom-antd">Khóa học</Button>
                </Dropdown>
                <a href="/contact">Liên hệ</a>
              </div>
              {jwtTokenNew ? (
                <></>
              ) : (
                <div className="block-modal-sp-signin-signup">
                  <div className="btn-signin">Đăng nhập</div>
                  <div className="btn-signup">Đăng ký</div>
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
