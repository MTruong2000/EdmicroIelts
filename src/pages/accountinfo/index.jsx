import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { Breadcrumb, Input } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

function AccountInfo() {
  return (
    <>
      <div className="block-account-info">
        <Breadcrumb
          items={[
            {
              title: <Link to="/">Home</Link>,
            },
            {
              title: "Account Info",
            },
          ]}
        />
        <div className="block-account-info-1">
          <div className="block-account-info-1-left">
            <div className="block-account-info-1-left-upload-file">
              <div className="block-account-info-img">
                <img src="/img/Profile_avatar_placeholder.png" alt="avatar" />
              </div>
              <div className="btn-icons-upload">
                <CiCirclePlus />
              </div>
            </div>
            <div className="block-account-info-1-left-title">
              <h4>John Doe</h4>
              <p>Teacher</p>
            </div>
          </div>
          <div className="block-account-info-1-right">
            <div className="account-infomation">
              <h1>Account Infomation</h1>
              <CiEdit />
            </div>
            <div className="block-account-infomation-block">
              <p>Full Name</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-block">
              <p>Email</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-block">
              <p>Phone number</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-btn-blokck">
              <div className="block-account-infomation-btn">Save Changes</div>
            </div>
          </div>
        </div>
        <div className="block-account-info-1">
          <div className="block-account-info-1-right">
            <div className="block-account-title">
              <h1>Password</h1>
            </div>
            <div className="block-account-infomation-block">
              <p>Current Passwordr</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-block">
              <p>New Password</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-block">
              <p>Confirm New Password</p>
              <Input placeholder="" />
            </div>
            <div className="block-account-infomation-btn-blokck">
              <div className="block-account-infomation-btn-update">
                Update Password
              </div>
              <div className="block-account-infomation-btn">Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AccountInfo;
