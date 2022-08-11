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


//Switch task 2

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


//Switch task 3

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

//Switch task 4

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

//Switch task 5

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

//Switch task 6
//Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

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

//Switch task 7

// const anyNumber = prompt('enter 6 numbers');
// const firstThreeNumbersSum = Number(anyNumber[0]) + Number(anyNumber[1]) + Number(anyNumber[2]);
// const secondThreeNumbersSum = Number(anyNumber[3]) + Number(anyNumber[4]) + Number(anyNumber[5]);

// if(firstThreeNumbersSum === secondThreeNumbersSum){
//   alert('yes');
// }else{
//   alert('no');
// };