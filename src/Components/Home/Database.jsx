import React, { useContext } from "react";
import * as firebase from "firebase/app";
import app from "../../FirebaseConfig.js";
const SaveData = (props) => {
  const data = props.data;

  var user = firebase.auth().currentUser;
  if (user === null) {
    return null;
  }
  const userName = user.email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");
  return (
    <button
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

export default SaveData;
