// Events - add interactivity to your elements!

const usernameInput = document.querySelector(".username");
const btnCheck = document.querySelector(".check-username");
//console.log(usernameInput, btnCheck);

btnCheck.addEventListener("click", function() {
   const username = usernameInput.value;
   const usedUsernames = ["dom", "dom71", "dcode21"];

   if (username.length === 0) {
      alert("Please enter a username!");

      return;
   }

   if (usedUsernames.includes(username)) {
      alert("that username is taken");
   } else {
      alert("username available");
   }

});


// usernameInput.addEventListener("change", function() {
//    alert("you changed the username!");
// })