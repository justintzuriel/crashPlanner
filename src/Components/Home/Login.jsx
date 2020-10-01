import React, { useCallback } from "react";
import "../../Styles/LogSign.css";
import Fire from "../../FirebaseConfig";
import { withRouter } from "react-router";
import logo from "./logo.svg";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Fire.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        {/* <!-- Icon --> */}
        <div class="fadeIn first">
          <img src={logo} id="icon" alt="User Icon" />
        </div>

        {/* <!-- Login Form --> */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            id="login"
            class="fadeIn second"
            name="email"
            placeholder="email"
          />
          <input
            type="password"
            id="login"
            class="fadeIn third"
            name="password"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        {/* <!-- Remind Passowrd -->
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div> */}
      </div>
    </div>
  );
};

export default withRouter(Login);
