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
console.log('Hello World');

//Variable holding value
let userMessage = "Hello World!";
//Console statement to print variable value - TO THE CONSOLE of the localhost
console.log(userMessage);

//Constants - constants cannpt be reassigned, use a variable to reassign
const userMessage2 = "Hello World2";

console.log(userMessage2);

//operator example
console.log(10/5);

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
function greet(){
  console.log('Hello from function call');
}

//Calling execution of greet function
greet();

//Function with paramaters (i.e. input values)
function greetwithparameters(username, message){
  console.log(username);
  console.log(message);
}

//Calling execution of greetwithparameters function
greetwithparameters("Max", "Hi there! ");

//Function with paramaters (i.e. input values), that have default values
function greetwithDefaultparameters(username, message = "Hello"){
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
function greetwithReturnValues(username, message = "I wanted to say Hello!"){
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
function combine(a = 1, b = 2, c = 3){
 
  return a * b / c;
}

const newValue = combine()
console.log(newValue);

//Arrow functions, syntax popular with anonymous functions - functions that do not need a name
() => 
//example above can be seen elsewhere

//This is an example of an anonymous function
export default function(){
  console.log('Hello');
}

//This is an example of an anonymous function in arrow form, making it shorter
//You would have your parameter names in the parentheses
export default () => {
  console.log('Hello');
}

//Arrow function w/ parameters example - you can also use a return here
export default (username, message) => {
  console.log('Hello');
  return username + message;
}

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

