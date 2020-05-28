import React, { Component, useCallback, useContext } from "react";
import "./signup.css";
import Fire from "../../firebase";
import { Redirect, withRouter } from "react-router";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Fire.auth().createUserWithEmailAndPassword(
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
        {/* <!-- Tabs Titles --> */}

        {/* <!-- Icon -->
              <div class="fadeIn first">
                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
              </div> */}

        {/* <!-- Login Form --> */}
        <form onSubmit={handleSignUp}>
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
