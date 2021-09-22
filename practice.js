// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSL3fN7FqjzzwJhSbqj9uUNXBKJx9nv8o",
    authDomain: "after-class-project-kwitter.firebaseapp.com",
    projectId: "after-class-project-kwitter",
    storageBucket: "after-class-project-kwitter.appspot.com",
    messagingSenderId: "587432912868",
    appId: "1:587432912868:web:3c91a99ac25cb3c80f89f1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}