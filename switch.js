// let num = +prompt('Enter a number from 1 to 4');
// switch (num) {
//   case 1:
//     alert('winter');
//     break;
//   case 2:
//     alert('spring');
//     break;
//   case 3:
//     alert('summer');
//     break;
//   case 4:
//     alert('autumn');
//     break;
//   default:
//     alert('Invalid value. Enter a number from 1 to 4');
//     break;
// };


//task 2
// const day = +prompt('Enter a number from 1 to 31');

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     alert('First decade');
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     alert('Second decade');
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//   case 31:
//     alert('Third decade');
//     break;
//   default:
//     alert('Number out of range from 1 to 31');
//     break;
// };

//or
// if(day >= 1 && day <= 10){
//   alert('first decade');
// }else if(day >= 11 && day <= 20){
//   alert('second decade');
// }else if(day >= 21 && day <= 31){
//   alert('third decade');
// }else{
//   alert('you entered words or number out of range');
// }


//task 3
// const month = +prompt('Enter a number from 1 to 12');

// switch(month){
//   case 1:
//   case 2:
//   case 12:
//     alert('Winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert('Spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert('Autumn');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert('Winter');
//     break;
//   default:
//     alert('Number out of range from 1 to 12');
//     break;
// }

//or

// if(month === 1 || month === 2 || month === 12){
//   alert('winter');
// }else if(month === 3 || month === 4 || month === 5){
//   alert('spring');
// }else if(month === 6 || month === 7 || month === 8){
//   alert('summer');
// }else if(month === 9 || month === 10 || month === 11){
//   alert('autumn')
// }else{
//   alert('you entered words or number out of range')
// };

//task 4
// const anyString = prompt('write anything you like');
// const firstLetter = anyString.charAt(0);

// switch(firstLetter){
//   case 'a':
//     alert('yes');
//     break;
//   default:
//     alert('no');
//     break;
// }

//task 5
// const anyNumber = prompt('enter any number');
// let firstNumber = String(anyNumber)[0];
// firstNumber = Number(firstNumber);

//or
// const anyNumber = prompt('enter any number');
// let firstNumber = anyNumber.charAt(0);
// firstNumber = Number(firstNumber);

// switch(firstNumber){
//   case 1:
//   case 2:
//   case 3:
//     alert('yes');
//     break;
//   default:
//     alert('no');
// };

//or 
// const anyNumber = prompt('enter any number');

// switch(Number(anyNumber[0])){
//   case 1:
//   case 2:
//   case 3:
//     alert('yes');
//     break;
//   default:
//     alert('no');
// };

//task 6
// const anyNumber = prompt('enter any number');
// let firstNumber = anyNumber.charAt(0);
// firstNumber = Number(firstNumber);
// let secondNumber = anyNumber.charAt(1);
// secondNumber = Number(secondNumber);
// let thirdNumber = anyNumber.charAt(2);
// thirdNumber = Number(thirdNumber);
// const sum = firstNumber + secondNumber + thirdNumber;

//or
// const sum = Number(anyNumber[0]) + Number(anyNumber[1]) + Number(anyNumber[2]);

// alert(`Sum is ${sum}`);

//task 7
// const anyNumber = prompt('enter 6 numbers');
// const firstThreeNumbersSum = Number(anyNumber[0]) + Number(anyNumber[1]) + Number(anyNumber[2]);
// const secondThreeNumbersSum = Number(anyNumber[3]) + Number(anyNumber[4]) + Number(anyNumber[5]);

// if(firstThreeNumbersSum === secondThreeNumbersSum){
//   alert('yes');
// }else{
//   alert('no');
// };

//task 8 
// const str = 'abcde';
// const letterA = str.charAt(0);
// const letterB = str.charAt(1);
// const letterE = str.charAt(4);

// document.open();
// document.write(`${letterA}, ${letterB}, ${letterE}`);
// document.close();

//task 9
// const days = +prompt('Enter number of days');
// let seconds = 0;

// if(days){
//   seconds = days * 86400;
//   if(days === 1){
//     alert(`it's ${seconds} seconds in ${days} day`);
//   }else{
//     alert(`it's ${seconds} seconds in ${days} days`);
//   }
// }else{
//   alert('you wrote not a number. enter a number of days')
// };

//task 10
// let num = 1;
// num += 12;
// num -= 14; 
// num *= 5; 
// num /= 7; 
// num += 1;
// num -= 1;
// alert(num);

//task 11
// const str1='Привет, ';
// const str2='Мир!';
// const str3 = str1 + str2;
// document.open();
// document.write(`${str3}`);
// document.close;

//task 12
// const myName = 'Elena';
// document.open();
// document.write(`Hi, ${myName}!`);
// document.close();

//task 13
// const randomNumber = 15;
// const randomNumberSquared = randomNumber **2;
// alert(randomNumberSquared);

//task 14
// const num = '12345';
// const multiplication = Number(num[0]) * Number(num[1]) * Number(num[2]) * Number(num[3]) * Number(num[4]);
// alert(multiplication);
