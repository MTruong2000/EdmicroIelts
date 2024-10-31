import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import "./style.scss";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <>
      <div className={`block-header ${isSticky ? "sticky" : ""}`}>
        <div className="block-header-img">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="block-header-content">
          <div className="block-header-content-left">
            <a href="/">Homepage</a>
            <a href="/course">Courses</a>
            <a href="/contact">Contact</a>
            {/* <Link to="/">Homepages</Link> */}
            {/* <Link to="/course">Courses</Link>
            <Link to="/contact">Contact</Link> */}
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
