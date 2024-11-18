import { Link, useNavigate } from "react-router-dom";
import Checkbox from "antd/es/checkbox/Checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import "./style.scss";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_DOMAIN
        }api/User/Login?email=${email}&password=${passWord}`
      );

      const expirationDate = new Date(
        response.data.token.refreshTokenExpiration
      );
      Cookies.set("jwtToken", response.data.token.jwtToken, {
        expires: expirationDate,
        path: "/",
      });
      Cookies.set("refreshToken", response.data.token.refreshToken, {
        expires: expirationDate,
        path: "/",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Login Fail ?",
        text: error.response.data.message,
        icon: "error",
      });
      console.error("Login error:", error.response.data.message);
    }
  };

  return (
    <>
      <div className="block-login">
        <div className="block-form-login">
          <h2>Đăng nhập</h2>
          <div className="form-input">
            <label htmlFor="inputEmail">Email đăng nhập</label>
            <input
              id="inputEmail"
              placeholder="Email đăng nhập"
              type="email"
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputPass">Mật khẩu</label>
            <input
              id="inputPass"
              placeholder="Mật khẩu"
              type="password"
              onBlur={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className="radio-remember-forgotpass">
            <div className="radio-remember">
              <Checkbox>Tự động đăng nhập</Checkbox>
            </div>
            <div className="fotgotpass">Quên mật khẩu?</div>
          </div>
          <div className="btn-login" onClick={handleLogin}>
            Đăng nhập
          </div>
          <div className="divider">
            <span>Hoặc</span>
          </div>
          <div className="btn-loginwithgoogle">
            <FcGoogle />
            <p>Đăng nhập với Google</p>
          </div>
          <div className="direct-siginup">
            <Link className="direct-siginup-link" to="/sign-up">
              Bạn chưa có tài khoản?{" "}
              <span style={{ color: "#000948", fontWeight: "bold" }}>
                Đăng ký ngay
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
