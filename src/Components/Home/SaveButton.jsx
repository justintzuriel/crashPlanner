import React, { useContext } from "react";
import * as firebase from "firebase/app";
import app from "../../FirebaseConfig.js";
const SaveButton = (props) => {
  const data = props.data;

  var user = firebase.auth().currentUser;
  if (user === null) {
    return null;
  }
  const userName = user.email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");
  return (
    <button
      className="btn btn-success"
      style={{ background: "#6aa84f" }}
      onClick={() => {
        app
          .database()
          .ref("/user" + userName)
          .set({ data });
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
