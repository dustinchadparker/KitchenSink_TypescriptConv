let firstName: string = "Matt";
const numStates: number = 50;
let adding4and5: number = 5 + 4;
let helloWorld: number = 0;

/* console.logs based on beginning letter of firstName. (If first letter > L) */
if (firstName.charCodeAt(0) > 76) {
  console.log("Back of the line!");
} else {
  console.log("Next!");
}

sayHello();

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let faveVeggies: Array<String> = ["Lettuce", "Broccoli", "Carrots"];
let i: number = 0;
/* Prints my favorite vegetabes to console. */
for (i = 0; i < faveVeggies.length; i++) {
  console.log(faveVeggies[i]);
}

interface Person {
  name: string;
  age: number;
}
/* Five objects containing names and ages. */
let person1: Person = {
  name: "John",
  age: 25
};
let person2: Person = {
  name: "Charlie",
  age: 18
};
let person3: Person = {
  name: "Chad",
  age: 28
};
let person4: Person = {
  name: "Martha",
  age: 17
};
let person5: Person = {
  name: "Alex",
  age: 22
};

/* Checks ages on the above objects. */
let namesAndAges: Array<Person> = [person1, person2, person3, person4, person5];

for (let i: number = 0; i < namesAndAges.length; i++) {
  checkAge(namesAndAges[i].name, namesAndAges[i].age);
}

/* Gets length of string and checks if it is even or odd. */
helloWorld = getLength("Hello World");

if (helloWorld % 2 == 0) {
  console.log("The world is even and nice!");
} else {
  console.log("The world is an odd place!");
}

/* Gets length of string and returns result */
function getLength(anyWord: string) {
  return anyWord.length;
}

/* Function that greets the world with an console.log. */
function sayHello() {
  return console.log("Hello World!");
}

/* Function that checks age-restriction. */
function checkAge(name: string, age: number) {
  if (age < 21) {
    console.log("Sorry, " + name + " you aren't old enough to view this page!");
  }
}
