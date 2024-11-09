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
  const [imageUrl, setImageUrl] = useState("");
  const [isCheckEditProfile, setIsCheckEditProfile] = useState(false);
  const [isCheckEditPassword, setIsCheckEditPassword] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    const fetchDataAccount = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7193/api/User/Profile",
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
        `https://localhost:7193/api/User/updateAccount`,
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

  const handleFileChange = async (e) => {
    const jwtToken = Cookies.get("jwtToken");
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "https://localhost:7193/api/User/UploadAvatar",
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
              <p>Teacher</p>
            </div>
          </div>
          <div className="block-account-info-1-right">
            <div className="account-infomation">
              <h1>Account Infomation</h1>
              {!isCheckEditProfile && (
                <CiEdit
                  onClick={() => setIsCheckEditProfile((prev) => !prev)}
                />
              )}
            </div>
            <div className="block-account-infomation-block">
              <p>Full Name</p>
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
              <p>Phone number</p>
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
                  Save Changes
                </div>
                <div
                  className="block-account-infomation-btn"
                  onClick={() => setIsCheckEditProfile((prev) => !prev)}
                >
                  Cancel
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="block-account-info-1">
          <div className="block-account-info-1-right">
            <div className="block-account-title">
              <h1>Password</h1>
              {!isCheckEditPassword && (
                <CiEdit
                  onClick={() => setIsCheckEditPassword((prev) => !prev)}
                />
              )}
            </div>

            {isCheckEditPassword && (
              <>
                <div className="block-account-infomation-block">
                  <p>Current Passwordr</p>
                  <Input.Password
                    placeholder="Enter your current password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                <div className="block-account-infomation-block">
                  <p>New Password</p>
                  <Input.Password
                    placeholder="Enter your current password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                <div className="block-account-infomation-block">
                  <p>Confirm New Password</p>
                  <Input.Password
                    placeholder="Enter your current password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
              </>
            )}

            {isCheckEditPassword && (
              <div className="block-account-infomation-btn-blokck">
                <div className="block-account-infomation-btn-update">
                  Update Password
                </div>
                <div
                  className="block-account-infomation-btn"
                  onClick={() => setIsCheckEditPassword((prev) => !prev)}
                >
                  Cancel
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
