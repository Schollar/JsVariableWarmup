
var number_of_tickets = 2;
var player_name = 'Joe';

console.log("Welcome " + player_name + ", you have collected " + number_of_tickets + " tickets");

if (number_of_tickets >= 10 && number_of_tickets < 20) {
    console.log("You have enough to purchase a troll doll!");
} else if (number_of_tickets >= 20 && number_of_tickets < 50) {
    console.log("You have enough to purchase a stick of gum!");
} else if (number_of_tickets >= 50 && number_of_tickets < 100) {
    console.log("You have enough to purchase a fake wig!");
} else if (number_of_tickets >= 100) {
    console.log("You have enough to purchase a blow up hammer!");
} else {
    console.log("You dont have enough tickets!")
}


var temperature = -25;
var weather = "snowing";

if (temperature >= 20 && weather === "sunny") {
    console.log("I will go outside and Tan!");
} else if (temperature < 0 && temperature >= -20 && weather === "snowing") {
    console.log("I am going skiing!");
} else {
    console.log("I will just stay inside and read a book");
}