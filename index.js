// Deadline 6.08

// 6.1 task

// const a = prompt('Text a number, please');

// if(a == 10){
//   alert('True');
// }else{
//   alert('False');
// };

//6.2 task

// let min = prompt('Enter a number from 0 to 59, please');

// if(min){
//   min = Number(min);
//   if(min <= 15){
//     alert('First quarter');
//   }else if(min > 15 && min <= 30){
//     alert('Second quarter');
//   }else if(min > 30 && min <= 45){
//     alert('Third quarter');
//   }else if(min > 45 && min <= 59){
//     alert('Fouth quarter');
//   }else if(min > 59){
//     alert('Number out of range. Enter a number from 0 to 59, please');
//   }else if(isNaN(min) === true){
//     alert(`You didn't enter a number. Enter a number from 0 to 59, please`);
//   };
// }else{
//   alert(`It's empty`);
// };

//6.3 task

// const a = 1;
// const a = 0;
// const a = -3;

// if(a == 0){
//   alert('True');
// }else{
//   alert('False');
// };

//6.4 task

// const a = 1;
// const a = 0;
// const a = -3;

// if(a > 0){
//   alert('True');
// }else{
//   alert('False');
// };

//Deadline 8.08

//8.1 task

// const a = -3;
// const a = 0;
// const a = 2;
// const a = 5;

// if(a > 0 && a < 5){
//   alert('True');
// }else{
//   alert('False');
// };

//8.2 task

// const a = -3;
// const a = 0;
// const a = 2;
// const a = 5;

// if(a == 0 || a == 2){
//   alert(a + 7);
// }else{
//   alert(a / 10);
// };

//8.3 task

// const a = 1;
// const b = 3;
// const a = 0;
// const b = 6;
// const a = 3;
// const b = 5;

// if(a <= 1 && b >= 3){
//   alert(a + b);
// }else{
//   alert(a - b);
// };

//8.4 task

// const a = prompt('Text a first number');
// const b = prompt('Text a second number');

// if(a > 2 && a < 11 || b >= 6 && b < 14){
//   alert('True');
// }else{
//   alert('False');
// };

//Cycles, while, for

//Cycles, while, for. First task

// for(i = 1; i <= 50; i++){
//   console.log(i);
//   document.open();
//   document.write(`<p>${i}</p>`);
//   document.close();
// };

//Cycles, while, for. Second task

// for(i = 1; i <= 100; i++){
//   console.log(i);
//   document.open();
//   document.write(`<p>${i}</p>`);
//   document.close();
// };

//Cycles, while, for. Third task

// for(i = 11; i <= 33; i++){
//   console.log(i);
//   document.open();
//   document.write(`<p>${i}</p>`);
//   document.close();
// };

//Cycles, while, for. Fifth task

// for(i = 0; i <= 100; i++){
//   if(i % 2 === 0){
//   console.log(i);
//   document.open();
//   document.write(`<p>${i}</p>`);
//   document.close();
//   }
// };

//Cycles, while, for. Sixth task

// let sum = 0;

// for(i = 1; i <= 100; i++){
//   sum += i;
// };

// console.log(sum);
// document.open();
// document.write(`<p>${sum}</p>`);
// document.close();

//Cycles, while, for. Seventh task

// let n = 1000;
// let num = 0;

// do{
//   n = n/2;
//   num++;
// }while(n >= 50);
// console.log(`Amount of iterations = ${num}`);
// console.log(`Last number = ${n}`);

//or

// while(n >= 50){
//   n = n / 2;
//   num++;
// }
// console.log(`Amount of iterations = ${num}`);
// console.log(`Last number = ${n}`);
