import Loading from "../../components/loading";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";

function RequestPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [emailRequest, setEmailRequest] = useState("");

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleGetPassword = async () => {
    if (emailRequest == "") {
      Swal.fire({
        title: "Warning ?",
        text: "Please enter information",
        icon: "warning",
      });
      return;
    }

    try {
      await axios.post(
        `${
          import.meta.env.VITE_DOMAIN
        }api/User/RequestResetPassword?email=${emailRequest}`
      );
      setIsNotification(true);
      setEmailRequest("");
    } catch (error) {
      Swal.fire({
        title: "Request Fail ?",
        text: error.response.data,
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
            <h1>Quên mật khẩu</h1>
            <p>Vui lòng cung cấp email của bạn để thực hiện lấy lại mật khẩu</p>
            <div className="form-request-password">
              <label htmlFor="email">Địa chỉ email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập địa chỉ email"
                onBlur={(e) => setEmailRequest(e.target.value)}
              />
              <button type="submit" onClick={handleGetPassword}>
                Lấy lại mật khẩu
              </button>
              {isNotification && (
                <p className="p-request-password-notification">
                  Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RequestPassword;
