//------------------- 1. Ways to print in JavaScript
console.log("Hello World");
alert("me");
document.write("this is document write")

//------------------- 2. Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");

//------------------- 3. JavaScript Variables
// What are Variables? - Containers to store data values
// Note: Var can be declared and accessed globally. Let can be declared globally,
    //  but its access is limited to the block in which it is declared.
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

//------------------- 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
//  an object is a standalone entity, with properties and type.
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Null And Undefine
// undefined means a variable has been declared but has not yet been
    //  assigned a value, whereas null is an assignment value,
    //   meaning that a variable has been declared and given the value of null.
var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5, true]
console.log(arr)

//------------------- Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2;
c -= 2; // c = c - 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators
// Logical and
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical not
console.log(!false);
console.log(!true);

//------------------- Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

//------------------- Conditionals in JavaScript

var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}

// if - else statement
if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

// if-else Ladder
age = 25;
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");

//------------------- Loop in Javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}

arr.forEach(function(element){
    console.log(element);
})

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

jj = 0;
do{
    console.log(arr[jj]);
    j++;
} while (j < arr.length);

//------------------- Array Methods
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);

myArr.pop();                    // pop from right
console.log(myArr);

myArr.push("harry")             // push element from left
console.log(myArr);

myArr.shift()                   // remove from left
console.log(myArr);             

const newLen = myArr.unshift("Harry")       // enter element from left
console.log(newLen);
console.log(myArr);

//-------------------- String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))      // op: arr
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");
console.log(d, '|', myLovelyString)

//------------------- Date
let myDate = new Date();
console.log(myDate.getTime());          // 1715694226236
console.log(myDate.getFullYear());      // 2024
console.log(myDate.getDay());           // 2
console.log(myDate.getMinutes());       // 13
console.log(myDate.getHours());         // 19

//------------------- DOM Manipulation
let elem = document.getElementById('click');            // select element by Id
console.log(elem);                      

let elemClass = document.getElementsByClassName("container");   // select element by ClassName
console.log(elemClass);

elemClass[0].style.background = "yellow";       // adding style
elemClass[0].classList.add("bg-primary")        // adding bootsrap class
elemClass[0].classList.add("text-success")      // ||
console.log(elem.innerHTML);                    // Click Me
console.log(elem.innerText);                    // Click Me

console.log(elemClass[0].innerHTML);            // Click Me
console.log(elemClass[0].innerText);            // This is a paragraph which is the best para of this universe

tn = document.getElementsByTagName('div')       // select element by tag name
console.log(tn)

createdElement = document.createElement('p');           // create paragraph element
createdElement.innerText = "This is a created para";    // put content in paragraph element
tn[0].appendChild(createdElement);                      // Append above paragraph to "tn" div

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);    // replate child element of 'tn' div
// removeChild(element); ---> removes an element

//------------------- Selecting using Query
sel = document.querySelector('.container')      // select first container
console.log(sel)
sel = document.querySelectorAll('.container')    // select all container
console.log(sel)

//-------------------- Events
function clicked(){ 
    console.log('The button was clicked')
}

// The window.onload function runs a piece of code after the entire web page has finished loading.
window.onload = function(){
    console.log('The document was loaded')
}

//------------------- Events in JavaScript
// Note: firstContainer refers to a <div> element in the HTML code with the id attribute set to "firstContainer".
    // This element contains a button and a paragraph. In JavaScript, firstContainer can be accessed using 
    // document.getElementById('firstContainer') or document.querySelector('#firstContainer').

firstContainer.addEventListener('click', function(){        // (event, behavior)
    // selecting 2nd element of all container than changed it
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"        
    console.log("Clicked on Container")
 })

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of Container");
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){              // when unclicked on container
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){            // when clicked on container
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})


//------------------- Arrow Functions
function summ(a, b){
    return a+b;
}

summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}

console.log(summ(1, 2));
console.log(logKaro());

//------------------- SetTimeout and setinterval
clr = setTimeout(logKaro, 5000);        // run logKaro function after 5 second
clr = setInterval(logKaro, 2000);       // run logKaro function in every 2 second
// Note: use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout in Console

//------------------- JavaScript localStorage (save in website of a brower)
localStorage.setItem('name', 'harry') 
localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

//------------------- Json 
obj = {name: "harry", length: 1, a: {this: 'tha"t'}}        //JavaScript object 'obj'
jso = JSON.stringify(obj);      // converting the JavaScript object 'obj' into a JSON string representation.
console.log(typeof jso)         // type of 'jso'  // op: string 
console.log(jso)                // print 'jso' in JSON string representation

// parsing (converting) a JSON string back into a JavaScript object.
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);            // JavaScript object

//-------------------- Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
