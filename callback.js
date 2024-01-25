// Synchronous Callback

// function parentFunction(name, callback) {
//     callback();
//     console.log("Hey" + name);

// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");

// }
// parentFunction("Random String",randomFunction);

// asynchronous callback

// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("Hey" + name);
// }
// function randomFunction() {
//     console.log("Hey I am callBackfunction");

// }
// parentFunction("Random String",randomFunction);


// anonymous function
// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("Hey" + name);
// }
//  parentFunction("Random String",function(){
//     console.log("Hey I am a callback Function");
// });

// using arrow function

const parentFunction=(name,callback)=>{
    setTimeout(callback,1000);
    console.log("Hey" + name);
}
parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});

const parentFunction=(name, callback)=>
(setTimeout(callback,1000))










