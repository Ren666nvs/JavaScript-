// console.log("hi");

// let a = 5;
//  let b = 1;
//  let c = 2;
// let p;
//  p = a + b + c;
// console.log(a + b + c);
//  let d = 12;
// let e = 23;
// let p;
// p = d + e;

// console.log(p);
// let f = 3;
// console.log(f * f * f);
// let h = 6;
// let w = 4;
// let p;
// p = h * w;
// console.log(p);
// let i = 4;
// let k = 5;
// let v;
// v = i * k;
// console.log(v);

// let q = -5;
// let l = -3;
// let d;
// d = q - l;
// console.log(d);
// bodlogo-6
let x2 = -2;
let answer = 4 * x2 * x2 - 3 * x2 + 5;
console.log(answer);
// bodlogo-7
let number3 = 467;
let suuliintoo = number3 % 10;
console.log(suuliintoo);
// bodlogo-8
let number4 = 467;
let aravt = (number4 % 100) / 10;
console.log(aravt);
// bodlogo-9
let number5 = 9;
let hoyrorntoitoo = number5 * 3;
console.log(hoyrorntoitoo);
let number6 = 2;
let hoyroront = number6 * 7;
console.log(hoyroront);
// bodlogo-10
let number7 = 123;
let gurvanorntoitoo = number7 / 20.5;
console.log(gurvanorntoitoo);
// bodlogo-11
// function convertSeconds (seconds) {
// let minutes=Math.floor(seconds / 60) ;
// let remainingSeconds = seconds % 60;
// return `${minutes} minut ${remainingSeconds} sekund`; 
// console.log(remainingSeconds)
// }
// let totalSeconds = 200;
// let result = convertSeconds(totalSeconds)
// console.log(result);
// bodlogo-12
function convertToTime(seconds){
    let hours = Math.floor(seconds / 3600) ;
    let remainingSeconds = seconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let finalSeconds = remainingSeconds % 60;
    return [hours, minutes, finalSeconds];
   
}
let totalSecond = 3612;
let result =convertToTime(totalSecond);
console.log(result);
// bodlogo-13
let x = 180
let l =4
let s;
s =(x+l)
console.log(s)
// bodlogo-14
function convertTOSec(ser,min, jkl){
    let totalSec = (hours * 3600) + (minutes * 60)+ seconds;
    return totalSec;
  let hours = 1;
  let minutes = 2 ;
  let seconds = 3;
  let result = convertTOSeconds(hours, minutes,seconds)
  console.log(result); 
}
// bodlogo-15
let tsag= 44
let day =(tsag- (tsag % 24))
let rehours = tsag % 24;
console.log(`${day} tsag ${rehours} tsag`);
// bodlogo-16
let g = 24
let k = 5
console.log(g*2 +k)
// bodlogo-17
let f = 27;
let h =  Math.floor(f / 12)  ;
let w = Math.ceil( f  / 9 );
console.log(h, w );
// bodlogo-18
let bb = 7
let cc =2
console.log(7 * 4 +3 );
// bodlogo-19
 let num3 = 16;
 let num4 = 14;
 let maxNumber = Math.max(num3, num4);
 console.log(` ${maxNumber}`);

// bodlogo-20
function findSmallerNumber(a, b){
    return a < b ? a : b;
}
let num1 = 9;
let num2 = 6;
console.log(` ${findSmallerNumber(num1 , num2)}`) ;