import * as firebase from "firebase/app";
import app from "../../FirebaseConfig.js";
const SaveData = (props) => {
  var user = firebase.auth().currentUser;
  if (user === null) {
    return null;
  }
  const userName = user.email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");

  app
    .database()
    .ref("/user" + userName)
    .set({
      cellData: props.cellData,
      focusArea: props.focusArea,
      noMcs: props.noMcs,
    });
};

export default SaveData;
