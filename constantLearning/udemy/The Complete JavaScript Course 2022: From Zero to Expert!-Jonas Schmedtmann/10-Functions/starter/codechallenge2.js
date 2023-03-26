// 1.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// 2. The reason that this function works is because when the eventlistener was created there was the header variable defined in the IIFE so that variable was saved in a closure which the event listener's function could later reference when called upon
