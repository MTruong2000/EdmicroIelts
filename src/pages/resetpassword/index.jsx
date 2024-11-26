import Loading from "../../components/loading";
import Swal from "sweetalert2";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

function ResetPassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleGetPassword = async () => {
    if (newPassword == "" || confirmPassword == "") {
      Swal.fire({
        title: "Warning ?",
        text: "Please enter information",
        icon: "warning",
      });
      return;
    }

    const requestBody = {
      token,
      newPassword,
      confirmPassword,
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_DOMAIN}api/User/ResetPassword`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
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
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Request Fail ?",
        text: error.response.data.errors.ConfirmPassword[0],
        icon: "error",
      });
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="block-reset-password">
        <div className="container">
          <div className="form-box">
            <h1>Đặt lại mật khẩu mới</h1>
            <p>Nhập mật khẩu mới của bạn bên dưới</p>
            <div className="form-request-password">
              <label htmlFor="new-password">Mật khẩu mới</label>
              <Input.Password
                id="new-password"
                name="new-password"
                placeholder="Nhập mật khẩu mới"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label htmlFor="confirm-new-password">
                Xác nhận mật khẩu mới
              </label>
              <Input.Password
                id="confirm-new-password"
                name="confirm-new-password"
                placeholder="Xác nhận mật khẩu mới"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" onClick={handleGetPassword}>
                Lấy lại mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResetPassword;
