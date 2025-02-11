const heading = document.getElementById("heading");
const button = document.getElementById("mybutton");
const box = document.getElementById("box1");

// button.addEventListener("click",(e) => {
//     e.preventDefault();
// box.style.backgroundColor = "red";
// box.classList.add("classfordiv");
// }); 
// function func1(){
//     button.style.transform = "scale(1.1)";
//     heading.style.backgroundColor = "pink";
// }
// button.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// button.style.backgroundColor = "purple";
// box.removeEventListener("mouseover ", func1);
// });

// box.addEventListener("mouseover", ()=>{
//     button.style.transform = "scale(1.1)";
//     heading.style.backgroundColor = "pink";
// })
// box.addEventListener("mouseout", ()=>{
//     button.style.transform = "";
//     heading.style.backgroundColor = "";
// })

// session and local storage

// const input = document.getElementById("myinput");
// const deletebutton =  document.getElementById("delete");
// const btnclick = () =>{
//     // sessionStorage.setItem("key1",input.value);
//     // localStorage.setItem("key1",input.value);
//     localStorage.setItem("key1",JSON.stringify({name:"abhi",surname:"singh"}));
// }
// button.addEventListener("click",btnclick);
// deletebutton.addEventListener("click",()=>{
// // console.log(sessionStorage.key(0));
// // sessionStorage.removeItem("key1");
// localStorage.removeItem("key1");
// });

// // if(sessionStorage.getItem("key1")){
// //     alert(sessionStorage.getItem("key1"));
// // }

// if(localStorage.getItem("key1")){
//     alert(localStorage.getItem("key1"));
// }


// set timeout and set interval
// function printname(names){
// console.log(names);
// }
// printname("kashish");

// setTimeout(printname,2000,"abhi");
// const id = setInterval(printname,2000,"abhi");
// button.addEventListener("click", ()=>{
    // clearInterval(id);;
// });


// asynchronous - parallel execution

function example1(names="abhi"){
    return names;
}
 
// setTimeout(()=>{
//     alert("lastline");
// },2000);

// console.log("lastline");

// callback - jo hum argument me pass kar rahe
// function sum(a,b,c){
//     const result  = a+b;
//     c(result);
// }
// function displaysum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }
// sum(20,30,alert);
// sum(20,130,displaysum);

const arr = [1,2,3,4,5];

function cal(arr=[],callback){
    const ans = [];
    for(let i=0; i<arr.length; i++){
        const ele = callback(arr[i]);
        ans.push(ele);
    }
    console.log(ans);
}

function multiply(a){
    return a*10;
}
cal(arr,multiply);

cal(arr,(a)=>{
    return a/10;
});
// timeout works asynchronously
// callback asynchronous
// a callback function can run after another function has finished
const gameslist=[];
const game = [];

const fetchdata = (callback)=>{
    setTimeout (()=>{
         gameslist.push({
            name:"game 1",
            id: "abcd",
         },
         {
            name : "game2",
            id : "dfg",
         }
         );
         console.log("after fetching");
         callback();
         console.log(gameslist);
    },4000);
};

// fetchdata();
// const displayGame =()=>{
//     setTimeout(()=>{
//         for(let i=0; i<gameslist.length; i++){
//             const ele =  document.createElement("p");
//             ele.innerText =  gameslist[i].name;
//             document.body.append(ele);
//         }
//         console.log("consoling after displaying");
//         console.log(gameslist);
//     },1000);
// };

// // displayGame();
// fetchdata(displayGame);


// promises
const a=  new Promise((resolve, reject)=>{
    let success = false;

if(success)resolve("promise fullfilled");
else reject("some technical error");
})

a.then((parameter)=>{
    console.log(parameter);
}).catch((error)=>{
    console.log(error);
});

// resolve =  then , reject = catch
const array=[];
const fetchData = (array=[])=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // arr.push({name:"abhi"});
            if(arr.length>0) resolve("data fetched");
            else reject("some technical");
        },1000);
    });
};

fetchData(array).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("will work either way");
});

// fetch api
