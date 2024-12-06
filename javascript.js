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
function convertToTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let remainingSeconds = seconds % 3600;
  let minutes = Math.floor(remainingSeconds / 60);
  let finalSeconds = remainingSeconds % 60;
  return [hours, minutes, finalSeconds];
}
let totalSecond = 3612;
let result = convertToTime(totalSecond);
console.log(result);
// bodlogo-13
let x = 180;
let l = 4;
let s;
s = x + l;
console.log(s);
// bodlogo-14
function convertTOSec(ser, min, jkl) {
  let totalSec = hours * 3600 + minutes * 60 + seconds;
  return totalSec;
  let hours = 1;
  let minutes = 2;
  let seconds = 3;
  let result = convertTOSeconds(hours, minutes, seconds);
  console.log(result);
}
// bodlogo-15
let tsag = 44;
let day = tsag - (tsag % 24);
let rehours = tsag % 24;
console.log(`${day} tsag ${rehours} tsag`);
// bodlogo-16
let g = 24;
let k = 5;
console.log(g * 2 + k);
// bodlogo-17
let f = 27;
let h = Math.floor(f / 12);
let w = Math.ceil(f / 9);
console.log(h, w);
// bodlogo-18
let bb = 7;
let cc = 2;
console.log(7 * 4 + 3);
// bodlogo-19
let num3 = 16;
let num4 = 14;
let maxNumber = Math.max(num3, num4);
console.log(` ${maxNumber}`);

// bodlogo-20
function findSmallerNumber(a, b) {
  return a < b ? a : b;
}
let num1 = 9;
let num2 = 6;
console.log(` ${findSmallerNumber(num1, num2)}`);
// bodlogo-21
let number1 = 1;
let number2 = 2;
let number9 = 3;
let maxNum = Math.max(number1, number2, number9);
console.log(`${maxNum}`);
// bodlogo-22
let n1 = 3;
let n2 = 2;
let n3 = 1;
let n4 = 4;
let minNum = Math.min(n1, n2, n3, n4);
console.log(`${minNum}`);
// bodlogo-23
let age = 20;
if (age >= 18) console.log("nas", 18);
{
  console.log("ta nasand hursen baina");
}

let too0 = 0;
let too1 = 85;
let too2 = 75;
let too3 = 96;
let too4 = 69;

if (too1 > 80) {
  too0 = too0 + too1;
}
if (too2 > 80) {
  too0 = too0 + too2;
}
if (too3 > 80) {
  too0 = too0 + too3;
}
if (too4 > 80) {
  too0 = too0 + too4;
}

console.log(too0, `80aas ih tooni niilber`);
// bodlogo-24
let too9 = 1;
let too5 = 3;
let too6 = 6;
let too7 = 2;
let too8 = 4;

if (too5 < 5) {
  too9 *= too5;
}
{
  if (too6 < 5) too9 *= too6;
}
{
  if (too7 < 5) too9 *= too7;
}
{
  if (too8 < 5) too9 *= too8;
}
console.log(too9, `5aaas baga tooni urjver`);
// bodlogo-24
let too10 = 0;
let too11 = 10;
let too12 = 3;
let too13 = 5;
if (too11 % 2 === 0) {
  too10 += too11;
}
if (too12 % 2 === 0) {
  too10 += too12;
}
if (too13 % 2 === 0) {
  too10 += too13;
}
console.log(too10);
// bodlogo-25
let too14 = 1;
let too15 = 5;
let too16 = 2;
let too17 = 3;

if (too17 % 2 == 1) {
  too14 = too14 * too17;
}
if (too15 % 2 == 1) {
  too14 = too14 * too15;
}
if (too16 % 2 == 1) {
  too14 = too14 * too16;
}
console.log(too14, ``);
// bodlogo-26
let too18 = 0;
let too19 = 2;
let too20 = 5;
let too21 = 5;

if (too19 === 5) {
  too18++;
}
if (too20 === 5) {
  too18++;
}
if (too21 === 5) {
  too18++;
}
console.log(too18, `g`);
// bodlogo-27
let too22 = 0;
let too23 = 3;
let too24 = 12;
let too25 = 8;
let too26 = 9;
if (too23 % 3 === 0) {
  too22++;
}
if (too24 % 3 === 0) {
  too22++;
}
if (too25 % 3 === 0) {
  too22++;
}
if (too26 % 3 === 0) {
  too22++;
}
console.log(too22);
// bodlogo-28
let too27 = 0;
let too28 = 7;
let too29 = 22;
let too30 = 13;
let too31 = 30;
if (too28 % 11 !== 0) {
  too27 += too28;
}
if (too29 % 11 !== 0) {
  too27 += too29;
}
if (too30 % 11 !== 0) {
  too27 += too30;
}
if (too31 % 11 !== 0) {
  too27 += too31;
}
console.log(too27);
// bodlogo-29
let unen = 11;
if (unen > 10 || unen < 10) {
  console.log("Yes");
}
// bodlogo-30
for (let i = 0; i < 1; i++) {
  console.log("ioi");
}
// bodlogo-31
for (let i = 0; i < 3; i++) {
  console.log("ioi");
}
// bodlogo-32
for (let i = 0; i < 4; i++) {
  console.log("ioi");
}
// bodlogo-33
let too32 = 0;
let hedenudaa = 3;
let took = 5;

for (let i = 0; i < hedenudaa; i++) {
  too32 = too32 + took;
}

console.log(too32);
// bodlogo-34
let n = 5;
let too33 = 1;
for (let i = 1; i <= n; i++) {
  too33 *= i;
}
console.log(too33);
// bodlogo-35
let too34 = 0;
let too35 = 6;
for (let i = 0; i < too35; i++) {
  too34 += 100;
}
console.log(too34);
// bodlogo-36
let too36 = 1;
let too37 = 3;
let too38 = 4;
for (let i = 0; i < too38; i++) {
  too36 *= too37;
}
console.log(too36);
// bodlogo-37
let too39 = 2;
let too40 = 5;
let too41 = 1;
for (let i = 0; i < too40; i++) {
  too41 *= too39;
}
console.log(too41);
// bodlogo-38
let too42 = 3;
let too43 = 4;
let too44 = 1;
for (let i = 0; i < too43; i++) {
  too44 *= too42;
}
console.log(too44);
// bodlogo-39
let too45 = 4;
let too46 = 4;
if (too45 === too46) {
  console.log("tentssen");
} else {
  console.log("Unana");
}
// bodlogo-40
let dun = 4;
if (dun > 3 && dun < 5) {
  console.log("Sain");
} else if (dun > 2 && dun < 3) {
  console.log("tentseegui");
}
// bodlogo-41
let too47 = 84;
if (too47 > 78 && too47 < 90) {
  console.log("B");
}
// bodlogo-42
let daynumber = 5;
let dayofweek;
if (daynumber === 1) {
  dayofweek = "Sunday";
} else if (daynumber === 2) {
  dayofweek = "Monday";
} else if (daynumber === 3) {
  dayofweek = "Tuesday";
} else if (daynumber === 4) {
  dayofweek = "Wednesday";
} else if (daynumber === 5) {
  dayofweek = "Friday";
} else if (daynumber === 6) {
  dayofweek = "Thursday";
} else if (daynumber === 7) {
  dayofweek = "Saturday";
}
console.log(dayofweek);
// bodlogo-43
let mouth = 3;
let searchSpring;
if (mouth === 1) {
  searchSpring = "Winter";
} else if (mouth === 2) {
  searchSpring = "Spring";
} else if (mouth === 3) {
  searchSpring = "Spring";
} else if (mouth === 4) {
  searchSpring = "Spring";
} else if (mouth === 5) {
  searchSpring = "Spring";
} else if (mouth === 6) {
  searchSpring = "Summer";
} else if (mouth === 7) {
  searchSpring = "Summer";
} else if (mouth === 8) {
  searchSpring = "Summer";
} else if (mouth === 9) {
  searchSpring = "Autumn";
} else if (mouth === 10) {
  searchSpring = "Autumn";
} else if (mouth === 11) {
  searchSpring = "Winter";
} else if (mouth === 12) {
  searchSpring = "Winter";
}
console.log(searchSpring);

// bodlogo-44
let gurvaljin = 3;
let too48;
if (gurvaljin === 3) {
  too48 = "YES";
} else if (gurvaljin === 4) {
  too48 = "YES";
} else if (gurvaljin === 5) {
  too48 = "YES";
}
console.log(too48);

// bodlogo-45
let too49 = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${too49} * ${i} = ${too49 * i}`);
}
// bodlogo-46
let too50 = 3;
let too51 = 5;
for (let i = 1; i <= too51; i++) {
  console.log(`${too50} ^ ${i} = ${too50 ** i}`);
}
// bodlogo-47
let input = "2 3 4 "; //orolt
let [B, C, D] = input.split(" ").map(Number); //B=2, C=3, D=4
let A = B * C - D; //ilerhiileliin utgig tootsoolloh
console.log(A); //garalt(garsan toog hurvuulne)
// input.split(" ") utga- zaigaar salgah
// .map(Number) utga- buh textees too bolgon hurvuulne

// input ( 2 3 4 )
// B=2, C=3, D=4
// bodolt A=2*3-4
// 1. 2*3=6
// 2. 6-4=2 hariu-2

//{$} - temdegt murund huvisagch buyu ilerhiilel oruulah butets
//${} - tuhain hesegt huvisagch esvel ilerhiileliig oruulahad ashigladag
// jishee - let name = "John";
// console.log(Hello, ${name}!`); // "Hello, John!"
//bodlogo-48
let too52 = "9; 15";
let [N, M] = input.split("", "").map(Number);
let = B = 15 / 5;
console.log(B);

//bodlogo-49
let too55 = "23453 3";
let [number, digit] = too55.split(" ");
let count = 0;
for (let char of number) {
  if (char === digit) {
    count++;
  }
}
console.log(count);
//bodlogo-50
let scores = [40, 50, 92, 50, 40];
let students = [];
for (let i = 0; i < scores.length; i++) {
  students.push({ score: scores[i], id: i + 1 });
}
for (let i = 0; i < students.length - 1; i++) {
  for (let j = i + 1; j < students.length; j++) {
    if (
      students[i].score < students[j].score &&
      students[i].id > students[j].id
    ) {
      let temp = students[i];
      students[i] = students[j];
      students[j] = temp;
    }
  }
}
for (let student of students) {
  console.log(student.id);
}
//bodlogo-51
let too53 = 123321;
if (unen > 123 || unen < 321) {
  console.log("Yes");
}
//bodlogo-52
let = 5,2,3,4,1,7,
