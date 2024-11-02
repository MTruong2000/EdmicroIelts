import { Link } from "react-router-dom";
import Checkbox from "antd/es/checkbox/Checkbox";
import { FcGoogle } from "react-icons/fc";
import "./style.scss";

function SignUp() {
  return (
    <>
      <div className="block-login">
        <div className="block-form-login">
          <h2>Create an account</h2>
          <div className="form-input">
            <label htmlFor="inputFullName">Full Name</label>
            <input id="inputFullName" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="inputEmail">Email address</label>
            <input id="inputEmail" type="email" />
          </div>
          <div className="form-input">
            <label htmlFor="inputPhoneNumber">Phone Number</label>
            <input id="inputPhoneNumber" type="number" />
          </div>
          <div className="form-input">
            <label htmlFor="inputPass">Password</label>
            <input id="inputPass" type="password" />
          </div>
          {/* <div className="radio-remember-forgotpass">
            <div className="radio-remember">
              <Checkbox>Remember me</Checkbox>
            </div>
            <div className="fotgotpass">Forgot your password?</div>
          </div> */}
          <div className="btn-login">Sign up</div>
          <div class="divider">
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
