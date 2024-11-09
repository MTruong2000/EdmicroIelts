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
        `https://localhost:7193/api/User/Register`,
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
          <h2>Create an account</h2>
          <div className="form-input">
            <label htmlFor="inputFullName">Full Name</label>
            <input
              id="inputFullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputEmail">Email address</label>
            <input
              id="inputEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="inputPhoneNumber">Phone Number</label>
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
            <label htmlFor="inputPass">Password</label>
            <input
              id="inputPass"
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className="btn-login" onClick={handleSignUp}>
            Sign up
          </div>
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <div className="btn-loginwithgoogle">
            <FcGoogle />
            <p>Sign up with Google</p>
          </div>
          <div className="direct-siginup">
            <Link className="direct-siginup-link" to="/login">
              Already have an account?{" "}
              <span style={{ color: "#000948", fontWeight: "bold" }}>
                Login here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
