import { Link } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
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
  return (
    <>
      <div className={`block-header ${isSticky ? "sticky" : ""}`}>
        <div className="block-header-img">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="block-header-content">
          <div className="block-header-content-left">
            <a href="/">Homepages</a>
            <a href="/course">Courses</a>
            <a href="/contact">Contact</a>
            {/* <Link to="/">Homepages</Link> */}
            {/* <Link to="/course">Courses</Link>
            <Link to="/contact">Contact</Link> */}
          </div>
          <div className="block-header-content-right">
            <div className="btn-signin">Sign In</div>
            <div className="btn-signup">Sign Up</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
