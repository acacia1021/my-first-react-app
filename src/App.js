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

