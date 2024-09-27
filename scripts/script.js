/* Burger Bot Script */

/* get user response if they are meat eaters */

var userInput = prompt("Do you eat meat?");

let message;
if (userInput.toLowerCase() === "yes") {
    message = "Here is a cheese burger.";
} else if (userInput.toLowerCase() === "no") {
    message = "Here's a veggie burger!";
} else {
    message = "All I have is veggie burgers and cheese burgers.";
}

alert(message);