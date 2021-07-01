const firebaseConfig = {
  apiKey: "AIzaSyBE07lIF3nouAaNT3okuyG4EwsEONKzsdM",
  authDomain: "site-noticias-183e7.firebaseapp.com",
  projectId: "site-noticias-183e7",
  storageBucket: "site-noticias-183e7.appspot.com",
  messagingSenderId: "823083624995",
  appId: "1:823083624995:web:41312eb13b646d67585f96"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();