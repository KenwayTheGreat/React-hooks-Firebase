import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBMmgDQlT9OhIcAYjWAzibtFnc3l1yMeHU",
  authDomain: "hooks-fb-3a87c.firebaseapp.com",
  databaseURL: "https://hooks-fb-3a87c.firebaseio.com",
  projectId: "hooks-fb-3a87c",
  storageBucket: "hooks-fb-3a87c.appspot.com",
  messagingSenderId: "1037632452843",
  appId: "1:1037632452843:web:cc15cffc9529f0007e26ae",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
