// --For Loop--
// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// for (var i=0; i < todos.length; i++) {
//     console.log(todos[i] + "!");
//     todos[i] = todos[i] + "!";
// }

// --While Loop--
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// --Do Loop--
// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

// --forEach Loop--

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     console.log(todos[i], i);
// }
//VS.
// todos.forEach(function(todos, i) {
//     console.log(todos, i);
// })

function logTodos(todos, i) {
    console.log(todos, i);
}

todos.forEach(logTodos);