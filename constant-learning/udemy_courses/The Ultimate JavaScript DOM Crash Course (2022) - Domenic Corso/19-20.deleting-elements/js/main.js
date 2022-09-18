// ----removeChild - delete elements from the parent----

// const skillsList = document.querySelector(".skills");
// const css = skillsList.querySelector("li:nth-of-type(2)");

//remove one child
//skillsList.removeChild(css);

//remove all children
// while (skillsList.lastChild) {
//    skillsList.removeChild(skillsList.lastChild);
// }

// ----remove - delete element without the parent----

const css = document.querySelector("li:nth-of-type(2)");

css.remove();