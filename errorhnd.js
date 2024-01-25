// try{
//     //code that may throw an error
//     throw new Error("An error");

// } catch (error) {
//     //code to handle the error
//     console.error(error.message);
// } finally {
//     //code that will run regardless of whether there was an error
//     console.log("Cleanup code");
// }
// const delayedFunction=()=> {
//     console.log('Delayed function executed!');
// };

// setTimeout(delayedFunction,2000);
// //executes after 2 seconds
// console.log("nakul");
// const repeatedFunction=()=> {
//     console.log('Repeated function executed!');
// };
// const intervalId=setInterval(repeatedFunction,1000);
// //Executes every 1 second

//function to be executed at intervals
 function repeatedFunction() {
    console.log('Executing repeated function...');
}
//set an interval(execute repeatedFunction every 1000 milliseconds)
const intervalId=setInterval(repeatedFunction,1000);
//After some time (e.g., 5000 milliseconds),stop the interval
setTimeout(() => {
    clearInterval(intervalId);//stop the interval
    console.log('Interval stopped.');
},5000);

















