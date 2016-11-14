(function (){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDYCVxUZzSiHv7z8C70Or_cL-Rh0h_1YX0",
    authDomain: "aircraft-ca57a.firebaseapp.com",
    databaseURL: "https://aircraft-ca57a.firebaseio.com",
    storageBucket: "aircraft-ca57a.appspot.com",
    messagingSenderId: "291726173895"
  };
  firebase.initializeApp(config);

  //get key elements
  const list = document.getElementById('object');

  //create db ref
  const dbRef = firebase.database().ref().child('object');

  //sync objects on change
  dbRef.on('value', snap => console.log(snap.val()));

}());
