
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBDDhEHK7an2goAg3x-gktN4T0YcKqd9Fs",
      authDomain: "kwitter-7b63a.firebaseapp.com",
      databaseURL: "https://kwitter-7b63a-default-rtdb.firebaseio.com",
      projectId: "kwitter-7b63a",
      storageBucket: "kwitter-7b63a.appspot.com",
      messagingSenderId: "722582157177",
      appId: "1:722582157177:web:75aec4a3deca2361a2a1a8"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome "+ user_name + " !";
     function Addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding a room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name- " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#" +Room_names+ "</div><hr>";
       document.getElementById("Output").innerHTML += row;  
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}