const firebaseConfig = {
      apiKey: "AIzaSyBEx_iJY6U7Z5v6vnWdARQhBLJdFS1a08Y",
      authDomain: "kwitter-e9df7.firebaseapp.com",
      databaseURL: "https://kwitter-e9df7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9df7",
      storageBucket: "kwitter-e9df7.appspot.com",
      messagingSenderId: "1080013258544",
      appId: "1:1080013258544:web:1ecf1203a498735a2312f5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("username1");
var roomname=localStorage.getItem("room")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData; 
//Start code
console.log(firebase_message_id);
console.log(message_data);
var Name=message_data['name'];
var Message=message_data['message'];
var Like=message_data['like'];
 name_tag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
 message_tag="<h4 class='message_h4'>"+Message+"</h4>";
//End code
      } });  }); }
getData();

function logout(){ 
      localStorage.removeItem("username1");
      localStorage.removeItem("Room_names");
      window.location="index.html";
 }

 function send(){
 var message=document.getElementById("input").value;
 firebase.database().ref(roomname).push({
  name:user_name,
  message:message,
  like:0,
 });

 document.getElementById("input").value="";
 }