//firebace link attchmant
var firebaseConfig = {
    apiKey: "AIzaSyBYnUQmquuomyzmIyfyFMbIJuZ48_lmZaw",
    authDomain: "chatbook-de9e4.firebaseapp.com",
    projectId: "chatbook-de9e4",
    storageBucket: "chatbook-de9e4.appspot.com",
    messagingSenderId: "162734868899",
    appId: "1:162734868899:web:caac2f22fed298425cb216",
    measurementId: "G-HNCG47NRNZ"
  };
  //end of firebace link attchment

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        });});}
  getData();