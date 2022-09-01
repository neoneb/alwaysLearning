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
		username: "ingrid",
		password: "777"
	}
];

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

function isUserValid(username, password) {
for (var i=0; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
        return true;	
        }
    }
    return false;
}

function signIn(username, password) {
    console.log(isUserValid(username, password));
}
var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what'\s your password?");

signIn(userNamePrompt, passwordPrompt);