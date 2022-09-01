var dataBase = [
    {
        username: "Chris",
        password: "admin1",
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So Tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "JavaScript is soooo cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (username === dataBase[0].username && password === dataBase[0].password) {
    console.log(newsFeed);
    } else {
        alert("sorry the password is incorrect");
    }
}

signIn(userNamePrompt, passwordPrompt);