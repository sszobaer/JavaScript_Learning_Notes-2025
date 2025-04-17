### JavaScript Introduction

- JavaScript is a scripting language used to create dynamic web content.
- It can manipulate HTML, CSS, and handle user interactions.

```javascript
console.log("Code Craft Zobaer"); // Output: Code Craft Zobaer
console.log("Hello, World!");     // Output: Hello, World!
document.write("Subscribe");      // Writes "Subscribe" on the web page
```

---

### Variables (`let`, `const`, `var`)

- `var` – Function scoped (not recommended)
- `let` – Block scoped (preferred for variables that change)
- `const` – Block scoped (used for constants)

---

### Data Types & Operators

#### Primitive Data Types
- `String` – Text
- `Number` – Integer or Float
- `Boolean` – `true`, `false`
- `Undefined` – No value assigned
- `Null` – Empty value

```javascript
let a = "CCZ Gang"; // String
let b = 10;         // Integer
let c = 10.5;       // Float
let d = true;       // Boolean
let e = null;       // Null
let f = [1,2,3,4];  // Array
console.log(typeof f); // object
```

#### Operators
1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
2. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
3. **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
4. **Logical Operators**: `&&`, `||`, `!`
5. **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`

---

### Conditional Statements

```javascript
let DBphoneNo = 1234567890;
let DBemail = "codecraftzobaer@gmail.com";
let DBpassword = "12345678";
let userEmail = "codecraftzobaer@gmail.com";
let userInputPhoneNo;
let userPassword = "12345678";

if (!(DBphoneNo == userInputPhoneNo || DBemail != userEmail) && DBpassword == userPassword) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}
```

```javascript
let a = 10;
let b = 20;

if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is greater than b");
}

// Ternary Operator
let condition = (a < b) ? "a is less than b" : "a is greater than b";
console.log(condition);
```

#### Switch Statement

```javascript
let a = 11;

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
}
```

---

### Loops

#### For Loop

```javascript
let i = 1;
for (; i <= 10;) {
    console.log(i);
    i++;
}
```

#### For...in Loop

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];

for (let index in arr) {
    console.log(arr[index]);
}
```

#### While Loop

```javascript
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```

---

### Functions

#### Regular Function

```javascript
function fnName(a, b) {
    return a + b;
}
console.log(fnName(2, 4)); // Output: 6
```

```javascript
function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(2, 4)); // Output: 8
```

#### Arrow Function (ES6)

```javascript
let multiplication = (a, b) => a * b;
console.log(multiplication(2, 4)); // Output: 8
```

---

### Objects

(To be continued...)
