import React, { useCallback } from "react";
import "../../Styles/LogSign.css";
import app from "../../FirebaseConfig";
import { withRouter } from "react-router";
import logo from "./logo.svg";
import * as firebase from "firebase/app";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { name, email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(function (result) {
            return result.user.updateProfile({ displayName: name.value });
          });
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
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="name"
            placeholder="name"
          />
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
          <input type="submit" class="fadeIn fourth" value="Sign Up" />
        </form>

        {/* <!-- Remind Passowrd -->
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div> */}
      </div>
    </div>
  );
};

export default withRouter(SignUp);
