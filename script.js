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
//example of for
for(let i=0;i<5;i++){
    console.log("Hi" + i);
}

//another example of for
for(let i=0;i<5;i++){
    if(i%2 != 0){
        console.log(i + " is an odd number");
    }else{
        console.log(i + " is an even number")
    }
}

//example of while
let x1 = 1;
while(x1<=5){
    console.log(x1)
    x1++;
}
//example of for in
const person1 = {name:"saba", age:19};
for(let key in person1){
    console.log(key);
    console.log(person1[key]);
}
//another example of for in
const color1 = ["red" , "blue", 'green'];
for(let col in color1){
    console.log(col);
    console.log(color1[col]);
}
//example of for of
for(let col of color1){
    console.log(col);
}
//function factory
let circle1 = {
    radius:1,
    location:{
        x:1,
        y:2
    },
    isvisible:true,
    draw: function(){console.log("draw this circle")}
}
circle1.draw();

function createcircle1(r,xx,yy){
    return {
        radius:r,
        location:{
            x:xx,
            y:yy
        },
        isvisible:true,
        draw: function(){console.log("draw this circle")}
    }
}
let cc11 = createcircle1(10,1,3);
console.log(cc11);
