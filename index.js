// let ary = [10, 20, 30, [40, 50, 60], 70, 80, 90];
// for (let i = 0; i < ary.length; i++) {
//   console.log(ary[3][i]);
// }
// let data = [20, 30, [10, 20, 30], [[20, 30, 40, [80, 90, 110]]]];
// let chk = [3][0][3];
// for (let i = 0; i < chk.length; i++) {
//   console.log(chk[i]);
// }
//
//
//Task 1
// let odd = [];
// let even = [];
// let data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < data.length; i++) {
//   if (i % 2 == 0) {
//     even.push(data[i]);
//   } else {
//     odd.push(data[i]);
//   }
// }
//
//
//scnd task
//
let get = prompt("Entr odd or even");

let array = [10, 20, 3, 40, 50, 60, 7, 80, 9, 100];

const filteredArray = array.filter(checkEvenOdd);

function checkEvenOdd(num) {
  if (get == "even") {
    return num % 2 !== 0;
  } else if (get === "odd") {
    return num % 2 === 0;
  }
}
console.log(filteredArray);
