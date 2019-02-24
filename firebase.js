// Initialize Firebase
var config = {
  apiKey: "AIzaSyDD_6ge25q5DaOmtduuJuBFHiChmnw7EBM",
  authDomain: "data-base-d4cd7.firebaseapp.com",
  databaseURL: "https://data-base-d4cd7.firebaseio.com",
  projectId: "data-base-d4cd7",
  storageBucket: "data-base-d4cd7.appspot.com",
  messagingSenderId: "182984750777"
};
firebase.initializeApp(config);

let email ="";
let text = "";


$('#signUpButton').on('click', function (event) {
	email = $('#signUpEmail').val()
	let password = $('#signUpPassword').val()
	console.log(email , password)
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(user) {
		if (user) {
			console.log(user.uid)
			console.log(response)
		}
	})
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    if(errorCode){
      console.log("error code "+errorCode+" and error message "+errorMessage)
      alert(errorMessage)
    }
});
});