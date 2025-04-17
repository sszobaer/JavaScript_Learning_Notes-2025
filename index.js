// ===========================
// JavaScript Introduction
// ===========================

// JavaScript is a scripting language used to create dynamic web content.
// It can manipulate HTML, CSS, and handle user interactions.

console.log("Code Craft Zobaer"); // Output: Hello, World!
console.log("Hello, World!"); // Output: Hello, World!
console.log("Hello, World!"); // Output: Hello, World!
document.write("Subscribe"); 


// ===========================
// Variables (let, const, var)
// ===========================

// var - function scoped (not recommended)
// let - block scoped (preferred for variables that change)
// const - block scoped (used for constants)

// Updating variables




// ===========================
// Data Types & Operators
// ===========================

// Data Types
// 1. Primitive Data Types
//    - String (text)
//    - Number (integer, float)
//    - Boolean (true, false)
//    - Undefined (no value assigned)
//    - Null (empty value)
let a = "CCZ Gang"; // String
let b = 10; //int
let c = 10.5; //float
let d = true; //boolean
let e = null; //null
let f = [1,2,3,4]; //Array
console.log(typeof f);



// Operators
// 1. Arithmetic Operators (+, -, *, /, %)
// 2. Assignment Operators (=, +=, -=, *=, /=) //Assign
// 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// 4. Logical Operators (&&, ||, !)
// 5. Bitwise Operators (&, |, ^, ~, <<, >>)


// ===========================
// Conditional Statements (if-else, switch)
// ===========================
DBphoneNo= 1234567890;
DBemail = "codecraftzobaer@gmail.com";
DBpassword = "12345678";
userEmail = "codecraftzobaer@gmail.com";
var userInputPhoneNo;
userPassword = "12345678";
if(!(DBphoneNo==userInputPhoneNo || DBemail!=userEmail) && DBpassword==userPassword){
    console.log("Login Successful");
}
else{
    console.log("Login Failed");
}

a = 10;
b = 20;
if(a<b)
    {
    console.log("a is less than b");
} 
else
{
    console.log("a is greater than b");
}
let condition = (a<b) ? "a is less than b" : "a is greater than b";
console.log(condition);

// Switch statement
a = 11;
switch (a) {
    case 10:
        console.log("a is 10");
        break;
    case 20:    
        console.log("a is 20");
        break;
    case 11:
        console.log("a is 11");
        break;
    default:        
        console.log("a is not 10 or 20");
        break;
}

// ===========================
// Loops (for, while)
// ===========================
//For loop
i = 1; // 1
for(; i<=10;){//1,2,3,4,5,6,7,8,9,10
    console.log(i);// print 1,2,3,4,5,6,7,8,9,10
    i++;// i+1
}

//For in loop
arr = [1,2,3,4,5,6,7,8,9,10];
for (let index in arr) {
    console.log(arr[index]); // print 1,2,3,4,5,6,7,8,9,10
}
// While loop
var i = 1;
while(i<=10){
    console.log(i); 
    i++;
}

// ===========================
// Functions (function, return, arrow functions)
// ===========================

// Regular function
//Return type
function fnName(a, b){
    return a+b;
}
console.log(fnName(2,4));


function multiplication(a, b){
    return a*b;
}
console.log(multiplication(2,4));
//Arrow function (ES6)
let multiplication = (a,b) => a*b;
console.log(multiplication(2,4));



// ===========================
// Objects
// ===========================



