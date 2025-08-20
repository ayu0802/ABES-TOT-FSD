/*-- variable declaration|| JS is dynamic programming Language --*/

// var a=30;
// console.log(typeof(a));

// let a=12;
// let a=30;

// console.log(a);
// console.log(typeof(a));

// let a=12;
// if(a>10){
//     let a=30;
//     console.log("a="+a);
// }

// console.log(a);



// let a=12;
// let b="12";
// if(a==b){
//     console.log("hii.....there")
// }

// else{
//     console.log("Welcome to JS")
// }


// let a=12;
// let b="12";
// //use of triple equal too 
// if(a===b){
//     console.log("hii.....there")
// }

// else{
//     console.log("Welcome to JS")
// }

// function sum(a,b){
//     return a+b;
// }
// let val=sum(12,20);
// console.log("sum"+val);

//hosting: before execution we can call the method || one should avoid this process. 
// let val=sum(12,20);
// console.log("sum"+val);
// function sum(a,b){
//     return a+b;
// }

// function expression 

// const data=function(){
//     console.log("hi, how are you");
// }
// data();

// arrow function 

// const data=()=>{
//     return "Hi, Welcome to FSD"
// }
// console.log(data());

// const sum=(a,b)=>{
//     return a+b;
// }

// const add=(a,b)=>a+b;
// add(20,40);

// (()=>{
//     console.log("Hello, there!!")
// })();

// (function (){
//     console.log("welcome to the FSD")
// })();

// to get default Data 
//  function greet(msg="Hello!!"){
//     console.log("Hi"+msg);
//  }
//  console.log(greet("Welcome to ABES!!"));

// //another  
//  function greet(msg="Hello!!"){
//     return "Hi"+msg;
//  }
//  console.log(greet("Welcome to ABES!!"));


//calling funtion into a function

function selectlanguage(lang){
    let data;
    if(lang=="java"){
    function javaCompiler(){
        console.log("java compiler is being excuted!!")
    }
  data=javaCompiler();

    }
    else if(lang=="c"){
        function cCompiler(){
            console.log("C compiler is being excuted!!")
        }
        data=cCompiler();
    }
    else{
        // data="Selected language compiler is not found";
        console.log("Selected language is not being executed!!")
    }
}

selectlanguage("pyhton");
