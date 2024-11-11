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

function createcircle1(r,x,y){
    return {
        radius:r,
        location:{
            x:x,
            y:y
        },
        isvisible:true,
        draw: function(){console.log("draw this circle")}
    }
}
let cc1 = createcircle1(10,1,3);
console.log(cc1);


//constructor factory

function Circle(r,x,y){
    this.radius = r;
    this.location = {x:x,y:y};
    this.isvisible = true;
    this.draw = function(){console.log("draw this circle")};
}
const circle2 = new Circle(20,5,8);
console.log(circle2);


//example of using object and function

let obj = {value:20};
let increase = function (x){
    x.value++;
}
increase(obj);
console.log(obj);


//example of for in

for(let circlekey in circle1){
    console.log(circlekey);
    console.log(circle1[circlekey]); 
}


//example of object.keys()

let circlekeys = Object.keys(circle1);
console.log(circlekeys);

for(let key of circlekeys){
    console.log(key);
}


//example of cloning object

let cloneObject1 = {};
for (let key in circle1){
    cloneObject1 [key] = circle1[key]; 
}
console.log(cloneObject1);


//example of cloning object in a diffrent way

let cloneObject2 = Object.assign({} , circle1);
console.log(cloneObject2);

let cloneObject3 = Object.assign({color:'blue'} , circle1);
console.log(cloneObject3);


//example of cloning object in a diffrent way

let cloneObject4 = {...circle1}
console.log(cloneObject4);

let cloneObject5 = {color:'purple' , ...circle1}
console.log(cloneObject5);

let cloneObject6 = {name:'circle6' , color:'pink' , ...circle1 , number:'6'}
console.log(cloneObject6);


//example for Math

console.log(Math.PI);
console.log(Math.random()); //Math.random() chooses a random number between 0 and 1
console.log(Math.round(1.4)); //Math.round() rounds the number
console.log(Math.floor(8.923)); //Math.floor() rounds a number DOWN to the nearest integer, if necessary, and returns the result.
console.log(Math.min(5,29,8));
console.log(Math.max(5,29,8));

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandom(6,60));


//example for string premitive
const message1 = "Hello";
console.log(message1);


//example for string object
let message2 = new String("Hi. coding is so cool");
console.log(message2);
console.log(message2.length);
console.log(message2[0]);
console.log(message2[1]);
console.log(message2.includes("Hi"));
console.log(message2.includes('hi'));
console.log(message2.startsWith("H"));
console.log(message2.startsWith('h'));
console.log(message2.startsWith('Hi'));
console.log(message2.endsWith("cool"));
console.log(message2.endsWith("Cool"));
console.log(message2.indexOf("is"));
console.log(message2.indexOf("Hi"));
console.log(message2.replace("cool", "nice"));
message2 = message2.replace("coding", "programing");
console.log(message2);
console.log(message2.toLocaleUpperCase());
console.log(message2);
console.log(message2.toLocaleLowerCase());
message2 = "Hi. \' coding is so cool";// \ make it ok to use ' inside ''
console.log(message2);
message2 = "Hi. \n coding is so cool"; // \n makes it go to the next line
console.log(message2);
message2 = "Hi. coding is so cool";
console.log(message2.split(" "));

