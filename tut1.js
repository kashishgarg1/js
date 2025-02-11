// alert("hi kashish");
let x = 10;   // can be changed
const y = 20;       // value can't be changed
alert(x);
console.log(x);
x = 20;
// y = 40;
let z = true;
let k = null;
console.log(x);
console.log(y);
console.log(z);
let name = "kashish";
let surname = "garg";
let m = "658";
x= x.toString();
console.log(x);
console.log(name+surname);
console.log(typeof (m));

let s = "my name is kashish";
console.log(s[1]);
console.log(s.indexOf("n"));
console.log(s.lastIndexOf("h"));
console.log(s.endsWith("kashish"));
console.log(s.includes("is"));
console.log(s.substring(3,11));
console.log(s.replace("is","was"));
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substr(3,4))    // from index 3 upto 7th index

let heading = document.getElementById("my heading");
console.log(heading);
heading.innerText = "heelo";
heading.style.backgroundColor = "red";
heading.style.color = "white";

// let ans  = prompt('enter your number');
// console.log(ans);        // === (checks type with value)
// if(ans===10){
//     console.log("ice cream");
// }

// switch(ans){

//     case 10:
//         console.log("blue");
//         break;
//     case 30:
//         console.log("brownie");
//         break;

// }
let arr1=  [12,"singh",44,[1,2]];
console.log(arr1);
let arr = [];
arr[0] =12;
arr[1] =1;
arr[2] = 3;
console.log(arr);
arr1.push(4);
arr.pop();
arr.shift(); // remove form first;
arr.unshift(55); // add in the starting;
arr.splice(2,3); // delete from 2nd index upto 3 elements
arr.reverse();
let arr3 = arr.slice(1,4);    // split arr
console.log(arr3);

for(let i = 0; i<3; i++){
    arr[i]= i;
}
console.log(arr);

const myobj = {
    name: "abhi",
    income: "32lpa",
    gender: "male",

};
myobj.newdata = "beta";
console.log(myobj);


function print(a,b){
    let result =  a+b;
    console.log(result);

}
print(2,3);

let a =  3;
let b = 4;
function print(a=0,b=0){            // if you don't pass a and b as parameter then it will take the above values of a and b othw the values passed as arguments
    let result =  a+b;
    console.log(result);

}
print(2,3);

function intro(name ="sample", title= "ui"){
    console.log("hii my name is "+ name +"and i am "+ title);
}
intro("kashish","sde");

function totalofarr(arr=[]){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total+= arr[i];
    }
    console.log(total);
}
let arr4 = [1,2,3];
totalofarr([1,2,3]);
totalofarr(arr4);

// scoping 
let d = 20;         // global variable 
{
    let d = 30;
    let e = 50;
    // var e = 50;          // var is accessible outside the block also unlike let
    console.log(d);   // d = 20;
}
console.log(d);     // d = 30;
// console.log(e) // error - we have used let to define e. if we have used var then no error 

console.log(document.head);
console.log(document.body.firstElementChild);
console.log(document.body.childNodes);
console.log(document.body.children[2]);
console.log(document.getElementById("car2"));
console.log(car1);
const thisone = document.getElementsByTagName("span");
thisone[0].textContent = "newone";
thisone[0].style.backgroundColor = "red";
thisone[0].style.color = "pink";
thisone[0].innerHTML = '<span class = "my class">how</span>';
console.log(thisone[0]);

const button =  document.getElementById("my butt");
console.log(button);
button.style.backgroundColor = "green";
button.style.border = "red";
button.style.padding = "2vmax 4vmax";
button.style.cursor = "pointer";
console.log(button.getAttribute("id"));
button.setAttribute("class","this is button");

// making new element


const mybuttn =  document.querySelectorAll("button");
mybuttn[1].onclick = deleteheading;
button.onclick = bringmeheading;   // while tapping click then it should show h2
 
function bringmeheading(){
    const h2 = document.createElement("h2");
    document.body.append(h2);
    
    h2.innerText = "bye";
    const mytext = document.createTextNode("sample text");
    h2.append(mytext);
}
function deleteheading(){
    const h2 = document.querySelector("h2");
    h2.remove();
}









