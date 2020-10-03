  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1"	
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var db = firebase.firestore();
