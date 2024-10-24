// simple example for js
console.log("sara");
console.log(2+2);

// example for let
let name1 = "sam";
name1 = "sami";
console.log(name1);
let name2 = "sohrab", name3 = "rostam";
console.log(name3 + " & " + name2);

//example for const
const name4 = "saba";
console.log(name4);

//example for sring
let name5 = "saman";
console.log(name5 + " is here.");

//example for number 
let example1 = 6;
console.log(example1);

//example for boolean
let example2 = true, example3=false;
console.log(example2 + " " + example3);

//example for undefined
let name6, name7=undefined;
console.log( name6 + " " + name7)

//example for null
let example4 = null;
console.log(example4);

//example for object
let person = {
    name:"samanta",
    age:25,
    admin:false
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.admin);
console.log(person["name"]);

//example for array
let user = ["kianosh", "korosh"];
user[2] = "daniel";
user[3] = 2;
user[4] = true;
user[0] = "fateme"
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

//the lenght of the array
console.log(user.length);

//example for function
function greet(name, age){
    let calc = 3 + 3;
    console.log("Hello world");
    console.log(calc);
    console.log(name + " is " + age + " years old.");
}
greet("maede" ,28);

//example for function with return
function square(number){
    let result = number * number;
    return result;
}
let square4 = square(4);
console.log(square4);

//examplw for add
let x = 6;
let y = 2;
console.log(x + y);

//example for Subtraction
console.log(x - y);

//example for multiply
console.log(x * y);

//example for dividing
console.log(x / y);

//example for remainder
console.log(x % y);

//some more examples
console.log(x ** y);
console.log(++x);
console.log(--y);

//example for +=
x = 6;
y = 2;
x += y; //x = x + y
console.log(x);

//example for -=
x = 6;
y = 2;
x -= y; //x = x - y
console.log(x);

//example for *=
x = 6;
y = 2;
x *= y; //x = x * y
console.log(x);

//example for %=
x = 6;
y = 2;
x %= y; //x = x % y
console.log(x);

//example for >
console.log(y > 2);

//example for >=
console.log(y >= 2);

//example for <
console.log(y < 2);

//example for <=
console.log(y <= 2);

//example for ==
console.log(y == 2);
console.log(y == "2");

//example for !=
console.log(y != 2);
console.log(y != "2");

//example for ===
console.log(y === 2);
console.log(y === "2");

//example for !==
console.log(y !== 2);
console.log(y !== "2");

//example for logical AND &&
console.log(true && false && true);
let productCount = 4;
let productPrice = 100;
let credit = 1400;
let buy = productCount > 0 && credit >= productPrice;
console.log(buy);

//example for logical OR ||
console.log(true || false || true);

//example for NOT !
let example5 = true;
console.log(!example5); 

//example
let example6 = example5 === true? "HI! this was true":"Hello! This was false";
console.log(example6)

//example for if else
let hour = 20;
if(hour >=6 && hour < 12){
    console.log("good morning!");
}else if(hour >=12 && hour < 18){
    console.log("good afternoon;");
}else{
    console.log("good evening!");
}

//example for switch-case
let role = "admin";
switch(role){
    case "guest":
        console.log("This is a " + role);
        break;
    case "admin":
        console.log("This is a " + role);
        break;
    default:
        console.log("This is an unknown user");
}

//same example but with if else
if(role === "guest"){
    console.log("This is a " + role);
}else if(role === "admin"){
    console.log("This is a " + role);
}else{
    console.log("This is an unknown user");
}