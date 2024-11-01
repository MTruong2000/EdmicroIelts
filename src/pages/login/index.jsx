import { useState } from "react";
import "./style.scss";
function Login() {
  return (
    <>
      <div className="block-login">
        <div className="block-form-login">
          <h2>Login</h2>
          <div className="form-input">
            <label htmlFor="inputEmail">Email</label>
            <input id="inputEmail" type="email" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
