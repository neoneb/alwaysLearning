
const toggler = document.querySelector ('.navbar-toggler');
const altHead = document.querySelector ('#head-img-alt');

// on touch image toggle
const toggleOnTouch = () => {
   altHead.classList.toggle('touch-toggle');
}

document.addEventListener('touchstart', toggleOnTouch);
document.addEventListener('touchend', toggleOnTouch);







