import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.scss";

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassWord] = useState("");

  const handleSignUp = async () => {
    if (!fullName || !email || !phoneNumber || !password) {
      Swal.fire({
        title: "Warning: Please Complete All Required Information",
        text: "Please fill in all the information.",
        icon: "warning",
      });
    }
    const params = {
      fullName,
      email,
      password,
      phoneNumber,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DOMAIN}api/User/Register`,
        params
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Resgister Fail ?",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="block-login">
        <div className="block-form-login">
          <h2>Tạo tài khoản</h2>
          <div className="form-input">
            <label htmlFor="inputFullName">Họ và tên</label>
            <input
              id="inputFullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputPhoneNumber">Số điện thoại</label>
            <input
              id="inputPhoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                const newValue = e.target.value;
                if (/^\d*$/.test(newValue)) {
                  setPhoneNumber(newValue);
                }
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputPass">Mật khẩu</label>
            <input
              id="inputPass"
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className="btn-login" onClick={handleSignUp}>
            Đăng ký
          </div>
          <div className="divider">
            <span>Hoặc</span>
          </div>
          <div className="btn-loginwithgoogle">
            <FcGoogle />
            <p>Đăng nhập với Google</p>
          </div>
          <div className="direct-siginup">
            <Link className="direct-siginup-link" to="/login">
              Bạn đã có tài khoản?{" "}
              <span style={{ color: "#000948", fontWeight: "bold" }}>
                Đăng nhập ngay
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
