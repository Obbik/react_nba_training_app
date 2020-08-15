import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArZtEO4YvAVfJQRy7aqok4x_j2PyMtUJs",
  authDomain: "nba-portal-64cfd.firebaseapp.com",
  databaseURL: "https://nba-portal-64cfd.firebaseio.com",
  projectId: "nba-portal-64cfd",
  storageBucket: "nba-portal-64cfd.appspot.com",
  messagingSenderId: "53752413093",
  appId: "1:53752413093:web:8616eeee98eca38ef7c64c",
  measurementId: "G-DMZFPGDFD9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper,
};
