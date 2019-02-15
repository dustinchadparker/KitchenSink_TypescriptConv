var firstName = "Matt";
var numStates = 50;
var adding4and5 = 5 + 4;
var helloWorld = 0;
/* console.logs based on beginning letter of firstName. (If first letter > L) */
if (firstName.charCodeAt(0) > 76) {
    console.log("Back of the line!");
}
else {
    console.log("Next!");
}
sayHello();
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var faveVeggies = ["Lettuce", "Broccoli", "Carrots"];
var i = 0;
/* Prints my favorite vegetabes to console. */
for (i = 0; i < faveVeggies.length; i++) {
    console.log(faveVeggies[i]);
}
/* Five objects containing names and ages. */
var person1 = {
    name: "John",
    age: 25
};
var person2 = {
    name: "Charlie",
    age: 18
};
var person3 = {
    name: "Chad",
    age: 28
};
var person4 = {
    name: "Martha",
    age: 17
};
var person5 = {
    name: "Alex",
    age: 22
};
/* Checks ages on the above objects. */
var namesAndAges = [person1, person2, person3, person4, person5];
for (var i_1 = 0; i_1 < namesAndAges.length; i_1++) {
    checkAge(namesAndAges[i_1].name, namesAndAges[i_1].age);
}
/* Gets length of string and checks if it is even or odd. */
helloWorld = getLength("Hello World");
if (helloWorld % 2 == 0) {
    console.log("The world is even and nice!");
}
else {
    console.log("The world is an odd place!");
}
/* Gets length of string and returns result */
function getLength(anyWord) {
    return anyWord.length;
}
/* Function that greets the world with an console.log. */
function sayHello() {
    return console.log("Hello World!");
}
/* Function that checks age-restriction. */
function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry, " + name + " you aren't old enough to view this page!");
    }
}
