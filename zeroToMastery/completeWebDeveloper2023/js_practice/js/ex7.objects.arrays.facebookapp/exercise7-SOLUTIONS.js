// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// {
// 	username: "andrei",
// 	password: "supersecret"
// },


// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "777"
	},
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function signIn(username, password) {
	for (var 1=0; i < database.Length; i++) {
		if(database[i].username === username && database[i].password === password) {
			console.log(newsfeed);	
		} else {
			alert("sorry, wrong username and password");
		}
	}
}

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what'\s your password?");