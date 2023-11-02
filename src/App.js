// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//The below is notes compiled from watching JavaScript Videos - it does not reflect the REACT project listed above

//Hello World will show in the console
console.log("Hello World");

//Variable holding value
let userMessage = "Hello World!";
//Console statement to print variable value - TO THE CONSOLE of the localhost
console.log(userMessage);

//Constants - constants cannpt be reassigned, use a variable to reassign
const userMessage2 = "Hello World2";

console.log(userMessage2);

//operator example
console.log(10 / 5);

//This is considered a useless concat, and will not compile as expected
// console.log("hello" + " world" + " concatenated");

//Checks for equality, yields a boolean
console.log(10 === 5);

//This is considered a 'comparison to self' and will  not compile as
//expected - you could use a variable to compare to the integer value
//instead
// if (10 === 10){
//   console.log("works");
// }

// function
// or () => which is called an 'arrow function syntax' can be used as
// functions

//Defining code that is not executed immediately, but instead later
//when the function is called - like a Java method - and as many times
//as you want
function greet() {
  console.log("Hello from function call");
}

//Calling execution of greet function
greet();

//Function with paramaters (i.e. input values)
function greetwithparameters(username, message) {
  console.log(username);
  console.log(message);
}

//Calling execution of greetwithparameters function
greetwithparameters("Max", "Hi there! ");

//Function with paramaters (i.e. input values), that have default values
function greetwithDefaultparameters(username, message = "Hello") {
  console.log(username);
  console.log(message);
}

//Calling execution of greetwithDefaultparameters function, you can
//also override the default value by inserting the message value like
//the above example - as if the default value does not exist
greetwithDefaultparameters("Freddi");

//Function with paramaters (i.e. input values), that have default values
//and a return statement
//Functions must only have one return statement at most. Functions w/out
//"return" implicitly return "undefined"
function greetwithReturnValues(username, message = "I wanted to say Hello!") {
  //console.log(username);
  //console.log(message);
  //Since we are not printing to the console, like the above 2 lines,
  //we should store the return value, in the line below, in either a
  //constant or a variable - shown on line 112 OR we can call the
  //function itself on the console as shown on line 108
  return "Hi, I am " + username + ". " + message;
}

//Calling execution of greetwithReturnValues function, within a
//console log call
console.log(greetwithReturnValues("Mark"));

//const value containing the value of function greetwithReturnValues
//after execution
const greeting = greetwithReturnValues("Markus");

//const value is printed to the screen
console.log(greeting);

//Exercise #1
function combine(a = 1, b = 2, c = 3) {
  return (a * b) / c;
}

const newValue = combine();
console.log(newValue);

//Arrow functions, syntax popular with anonymous functions - functions that do not need a name

// () =>
//example above can be seen elsewhere

//This is an example of an anonymous function

// export default function(){
//   console.log('Hello');
// }

//This is an example of an anonymous function in arrow form, making it shorter
//You would have your parameter names in the parentheses

// export default () => {
//   console.log('Hello');
// }

//Arrow function w/ parameters example - you can also use a return here

export default (username, message) => {
  console.log(
    "Hello from default function - then username + message next output"
  );
  return username + message;
};

//Other arrow notes:
// 1a. If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
// 1b. If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.
// 1c. If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!
// 2. If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

//Instead of

//number => {
//   return number * 3;
// }
// you could write

// number => number * 3;
// The following code would be invalid:

// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

// 3.  Special case: Just returning an object

// If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

// number => { age: number }; // trying to return an object
// This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

// To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

// number => ({ age: number }); // wrapping the object in extra parentheses
// By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.

const userName = "Max";
const userAge = 34;

// the above can be defined as a user object using:

const user = {
  name: "Max",
  age: 34,
};

console.log("This is the user" + user);
console.log(user);

//To gain access to the value of the object
console.log("This is the user's name: " + user.name);

// Objects can also be used to store functions - which we then typically refer to as methods

const user2 = {
  name: "Max",
  age: 34,
  greet(userName) {
    console.log("Hello from the method inside the user2 object!");
  },
};

user2.greet();

// You can also access the properties of the object (i.e. methods & fields in this object),
// by using the 'this' keyword!
//'This' refers to the object - user3

const user3 = {
  name: "Max",
  age: 34,
  greet(userName) {
    console.log("Hello from the method inside the user3 object!");
    console.log("This is the age of the user3 object: " + this.age);
  },
};

user3.greet();

// You can either create objects like the above examples - to group values together,
// or you can create blueprints via usage of 'class'

class User {
  // accepts parameters that are input values & store them in properties of the object that will be created based on the 'User' class, using the keyword: 'this'
  // stores the parameter values 'name & age', in the properties utilizing the 'this' keyword
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi from User class greet method!");
  }
}

const user4 = new User("mauel", 35);
console.log(user4);
user4.greet();

// Arrays are a special type of object
const hobbies = ["Sports", "cooking", "Reading"];

console.log(hobbies[0]);

// Allows you to add a new item to the end of the array
hobbies.push("Working");
console.log(hobbies);

// Allows you to find the index of a certain value - takes a function as an input
hobbies.findIndex((item) => {
  return item === "Sports";
});

// We can store the index value in a constant & console log the constant saved value
// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

//This is the sorthand for the above example:
const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

// Map method allows you to transform every item in an array to another item

const editedHobbies = hobbies.map((item) => item + "!");

console.log("edited hobbies: " + editedHobbies);

// You can also convert items to JavaScript Objects
// Curly braces need to be wrapped in parentheses in order to indicate that we want to return a JS obj instead of defining the function body of the arrow function
const JSHobbies = hobbies.map((item) => ({
  text: item,
}));

console.log("edited hobbies on next output: " + JSHobbies);
console.log(JSHobbies);

// Exercise #2:

// Answer:

function transformToObjects(numberArray) {

  return numberArray.map((num) => ({
    val: num
  }));
}

// Test:
function transformToObjects2(numberArray = [1,2,3]) {

  return numberArray.map((num) => ({
    val: num
  }));
}

console.log(transformToObjects2());



//Destructuring Arrays & Objects

//Array storage
const userNameData = ["Max", "Schwarzmuller"];

//Creating these constants for use can be shortened to a single step
//Line 318
const firstName = userNameData[0];
const lastName = userNameData[1];

//firstName mapped to "max", lastName mapped to "Schwarzmuller"
const [firstName2, lastName2] = ["Fred", "Freddy"];

console.log(firstName2);
console.log(lastName2);

//User Object for destructuring
const user5 = {
  name: "Mark",
  age: 34
};

//Again, can be shortened
const name = user.name;
const age = user.age;

//Need to label by property names, i.e., const names need to match 
//property names in curly braces
const {name2, age2} = {
  name2: "Tom",
  age2: 30
};

//Can also be written in this format:
const {name3: userName3, age3} = {
  name3: "Bison",
  age3: 36
};

console.log(userName3);
console.log(age3);

