//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

///answer
function winBattle(bool) {
    return bool;
}

var experiencePoints = winBattle(true) ? 10 : 1
experiencePoints


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

// undefined

//#3 return value when moveCommand("back");

//you arrived home

//#4 return value when moveCommand("right");

// you found a river

//#5 return value when moveCommand("left");

// undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function moveCommand(direction) {
    var result;
    switch (direction) {
        case 'forward':
            result = 'You fell off a cliff';
            break;
        case 'backwards':
            result = 'You encounter a Crocodile';
            break;
        case 'left':
            result = 'You find a path forward';
            break;
        case 'right':
            result = 'You find a legendary weapon';
            break;
        default:
            result = 'move or die!'
    }
    return result;
}