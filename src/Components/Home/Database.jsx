import React, { Component } from "react";
import * as firebase from "firebase/app";
import app from "../../FirebaseConfig.js";

const SaveData = (props) => {
  const data = props.data;
  var user = firebase.auth().currentUser;
  return (
    <button
      onClick={() => {
        app
          .database()
          .ref("/user" + user.displayName)
          .set({ data });
      }}
    >
      Save
    </button>
  );
};

export default SaveData;
