import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { Input } from "antd";
import { useState, useEffect } from "react";
import proFileAvatarPlaceholder from "/img/Profile_avatar_placeholder.png";
import axios from "axios";
import Cookies from "js-cookie";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Swal from "sweetalert2";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.scss";

function AccountInfo() {
  const [fullNameTitle, setFullNameTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isCheckEditProfile, setIsCheckEditProfile] = useState(false);
  const [isCheckEditPassword, setIsCheckEditPassword] = useState(false);

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
        setFullNameTitle(response.data.fullName);
        setFullName(response.data.fullName);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber);
        setImageUrl(response.data.imageUrl);
        if (response.data.roleId == 1) {
          setRole("Student");
        } else if (response.data.roleId == 2) {
          setRole("Teacher");
        } else {
          setRole("Admin");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);

  const handleUpdateAcc = async () => {
    const jwtToken = Cookies.get("jwtToken");
    const params = {
      fullName,
      email,
      phoneNumber,
      imageUrl,
    };
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_DOMAIN}api/User/updateAccount`,
        params,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setIsCheckEditProfile((prev) => !prev);
      setFullNameTitle(fullName);
    } catch (error) {
      Swal.fire({
        title: "Change Profile Fail ?",
        text: error.response.data.message,
        icon: "error",
      });
      console.error("Login error:", error.response.data.message);
    }
  };

  const handleChangePassWord = async () => {
    const jwtToken = Cookies.get("jwtToken");
    const params = {
      currentPassword,
      newPassword,
      confirmPassword,
    };
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_DOMAIN}api/User/ChangePassword`,
        params,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setIsCheckEditPassword((prev) => !prev);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      Swal.fire({
        title: "Change Password Fail ?",
        text: error.response.data.message
          ? error.response.data.message
          : error.response.data.errors.ConfirmPassword,
        icon: "error",
      });
    }
  };

  const handleFileChange = async (e) => {
    const jwtToken = Cookies.get("jwtToken");
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_DOMAIN}api/User/UploadAvatar`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Change avatar success!",
          showConfirmButton: false,
          timer: 1500,
        });
        setImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header className="block-header-courses" />
      <div className="block-account-info">
        <div className="block-account-info-1">
          <div className="block-account-info-1-left">
            <div className="block-account-info-1-left-upload-file">
              <div className="block-account-info-img">
                <img
                  src={imageUrl ? imageUrl : proFileAvatarPlaceholder}
                  alt="User_avatar"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="upload-photo"
              />
              <div
                className="btn-icons-upload"
                onClick={() => document.getElementById("upload-photo").click()}
              >
                <CiCirclePlus />
              </div>
            </div>
            <div className="block-account-info-1-left-title">
              <h4>{fullNameTitle}</h4>
              <p>{role}</p>
            </div>
          </div>
          <div className="block-account-info-1-right">
            <div className="account-infomation">
              <h1>Thông tin tài khoản</h1>
              {!isCheckEditProfile && (
                <CiEdit
                  onClick={() => setIsCheckEditProfile((prev) => !prev)}
                />
              )}
            </div>
            <div className="block-account-infomation-block">
              <p>Họ và tên</p>
              <Input
                placeholder=""
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={!isCheckEditProfile}
              />
            </div>
            <div className="block-account-infomation-block">
              <p>Email</p>
              <Input
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isCheckEditProfile}
              />
            </div>
            <div className="block-account-infomation-block">
              <p>Số điện thoại</p>
              <Input
                placeholder=""
                value={phoneNumber}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (/^\d*$/.test(newValue)) {
                    setPhoneNumber(newValue);
                  }
                }}
                disabled={!isCheckEditProfile}
              />
            </div>
            {isCheckEditProfile && (
              <div className="block-account-infomation-btn-blokck">
                <div
                  className="block-account-infomation-btn-update"
                  onClick={handleUpdateAcc}
                >
                  Lưu thay đổi
                </div>
                <div
                  className="block-account-infomation-btn"
                  onClick={() => setIsCheckEditProfile((prev) => !prev)}
                >
                  Hủy
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="block-account-info-1">
          <div className="block-account-info-1-right">
            <div className="block-account-title">
              <h1>Mật khẩu</h1>
              {!isCheckEditPassword && (
                <CiEdit
                  onClick={() => setIsCheckEditPassword((prev) => !prev)}
                />
              )}
            </div>
            <div className="block-account-infomation-block">
              <p>Mật khẩu hiện tại</p>
              <Input.Password
                placeholder="Mật khẩu hiện tại"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                disabled={!isCheckEditPassword}
              />
            </div>
            <div className="block-account-infomation-block">
              <p>Mật khẩu mới</p>
              <Input.Password
                placeholder="Mật khẩu mới"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={!isCheckEditPassword}
              />
            </div>
            <div className="block-account-infomation-block">
              <p>Xác nhận mật khẩu mới</p>
              <Input.Password
                placeholder="Xác nhận mật khẩu mới"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={!isCheckEditPassword}
              />
            </div>
            {isCheckEditPassword && <></>}

            {isCheckEditPassword && (
              <div className="block-account-infomation-btn-blokck">
                <div
                  className="block-account-infomation-btn-update"
                  onClick={handleChangePassWord}
                >
                  Cập nhật mật khẩu
                </div>
                <div
                  className="block-account-infomation-btn"
                  onClick={() => setIsCheckEditPassword((prev) => !prev)}
                >
                  Hủy
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AccountInfo;
