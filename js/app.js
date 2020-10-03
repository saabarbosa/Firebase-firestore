  var firebaseConfig = {
    apiKey: "AIzaSyDUgnMoiso9aRjz1KQpIJjpob8z2hGb9vo",
    authDomain: "bikeshopsample-c8a1d.firebaseapp.com",
    databaseURL: "https://bikeshopsample-c8a1d.firebaseio.com",
    projectId: "bikeshopsample-c8a1d",
    storageBucket: "bikeshopsample-c8a1d.appspot.com",
    messagingSenderId: "325785968827",
    appId: "1:325785968827:web:ad24adda69b9a66d94899e"	
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var db = firebase.firestore();
