//object literal notation

// let car = {
//     make: "Toyata",
//     model: "Camry",
//     year: 2022,
//     isElectric: false,
//     start: function() {
//         console.log("Engine started");
//     }
// };
// console.log(car.make);
// console.log(car.year);
// console.log(typeof(car));

// function Book(title, author, year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }


// let book1=new Book("The catch in the Rye","J.D. Salinger",1951);
// let book2=new Book("To kill a mockingbird","Harper Lee",1960);
// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.year);
// console.log(book2);


// let fruits=["apple","banana","orange","grape"];
// console.log(fruits[0]);
// console.log(fruits[2]);
// fruits.push("kiwi");
// console.log(fruits);
// fruits.unshift("mango");
// console.log(fruits);
// let removedLast=fruits.pop();
// console.log(fruits)
// let removedFirst=fruits.shift();

// let indexOfOrange=fruits.indexOf("orange");
// console.log(indexOfOrange);
// for(let i=0;i<fruits.length;i++) {
//     console.log(fruits[i]);
// }

// let citrus=fruits.slice(1,3);
// console.log(citrus);

// let removed=fruits.splice(1,2,"pear","melon");
// console.log(fruits);
// console.log(removed);
// let moreFruits=["grapefruit","pineapple"];
// console.log(moreFruits);
// let allFruits=fruits.concat(moreFruits);
// console.log(fruits);
const multiply=function(a,b) {
    return a*b;
};

const product=multiply(4,6);
console.log('Function Expression - Product:',product);


// Arrow function
const subtract=(a,b)=> a-b;
const difference=subtract(8,3);
console.log('Arrow Function - Difference:',difference);


























