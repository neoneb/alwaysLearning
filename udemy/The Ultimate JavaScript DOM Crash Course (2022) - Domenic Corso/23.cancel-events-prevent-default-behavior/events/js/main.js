// Prevent default - prevents the default behavior from occurring

const signupForm = document.querySelector("form");

signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("you submitted the form");
});
