"use strict";

// let num = 50;

// while(num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }
// let a = [1, 2, 3],
// b = [1, 2, 3]; 

// if ("ёжик" > "яблоко") {console.log(true);}
// else {console.log(false);}

// // let a = +"Infinity";
// console.log(0 || "" || 2 || undefined || true || falsе );

// console.log(typeof a);


// let num = 20;

// function showFirstMessage(text) {
//   alert(text);

//   console.log(num);
// }

// showFirstMessage("Hello World!");

// console.log(num);




// let calc = function (a, b) {
//   return (a + b);
// };

let calc = (a, b) => a + b;


console.log(calc(3, 4));

console.log(calc(8, 4));


function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();

console.log(anotherNum);

let str = "test";

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));


