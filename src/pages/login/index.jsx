import { Link } from "react-router-dom";
import Checkbox from "antd/es/checkbox/Checkbox";
import { FcGoogle } from "react-icons/fc";
import "./style.scss";

function Login() {
  return (
    <>
      <div className="block-login">
        <div className="block-form-login">
          <h2>Login</h2>
          <div className="form-input">
            <label htmlFor="inputEmail">Email address</label>
            <input id="inputEmail" type="email" />
          </div>
          <div className="form-input">
            <label htmlFor="inputPass">Password</label>
            <input id="inputPass" type="password" />
          </div>
          <div className="radio-remember-forgotpass">
            <div className="radio-remember">
              <Checkbox>Remember me</Checkbox>
            </div>
            <div className="fotgotpass">Forgot your password?</div>
          </div>
          <div className="btn-login">Login</div>
          <div class="divider">
            <span>Or continue with</span>
          </div>
          <div className="btn-loginwithgoogle">
            <FcGoogle />
            <p>Login with Google</p>
          </div>
          <div className="direct-siginup">
            <Link className="direct-siginup-link" to="/sign-up">
              Don't have an account?{" "}
              <span style={{ color: "#000948", fontWeight: "bold" }}>
                Sign up here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
