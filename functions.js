//Task 1. Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; 
//-1, если первое число меньше, чем второе, и 0, если числа равны.
//Попробуйте реализовать эту функцию не только с помощью if...else, 
//но и с помощью тернарного оператора, и в виде стрелочной функции.
// const num1 = +prompt('Enter a number');
// const num2 = +prompt('Enter one more number');

// function numberComparison(num1, num2) {
//   if (num1 > num2) {
//     return 1;
//   }else if (num1 < num2) {
//     return -1;
//   }else if (isNaN(num1) || isNaN(num2)){
//     return 'You entered a text. Enter a number, pls'
//   }
//     return 0;
// };
// alert(numberComparison(num1, num2));

//function numberComparison(num1, num2) {
//  (num1 > num2) ? alert('1'):
//  (num1 < num2) ? alert('-1'):
//  alert('0');
//};
//numberComparison(num1, num2);

// const numberComparison = (num1, num2) => {
//  if (num1 > num2) {
//    return '1';
//  }else if (num1 < num2) {
//    return '-1';
//   }else if (isNaN(num1) || isNaN(num2)){
//     return 'You entered a text. Enter a number, pls'
//   }
//     return 0;
// };
// alert(numberComparison(num1,num2));

//Task 2.
//Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. 
//Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.
//Подсказка: используйте параметры функции по умолчанию.
//function squareArea(length, width = length) {
//  const area = length * width;
//  return area;
//};
//console.log(squareArea(12,15));

//Task 3
//Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. 
//Если оба числа нечётные - функция возвращает их сумму. 
//Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
// const num1 = +prompt('Enter a number');
// const num2 = +prompt('Enter one more number');

// function isEven(num1, num2) {
//   const  isFirstNumEven = num1 % 2;
//   const  isSecondNumEven = num2 % 2;

//   if (!isFirstNumEven && !isSecondNumEven) {
//    return `Result of multiplication:${num1 * num2}`;
//   }
//   if (isFirstNumEven && isSecondNumEven) {
//    return `Sum:${num1 + num2}`;
//   }
//     return  `Odd is ${isFirstNumEven ? num1: num2}`;
// };
// console.log(isEven(num1,num2));
 
//Task 4
//Написать функцию, которая принимает 1 аргумент (возраст пользователя)
//и возвращает boolean значение - можно ему на сайт или нет.( если 18 и больше лет)
// const age = +prompt('Enter your age');

// function isAdult(age) {
//   return age >= 18;
// };
// console.log(isAdult(age));
 
//Task 5
//Написать функцию, которая принимает 3 аргумента,
//если 1 аргумент true - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
// function checkIsFirstArgumentIsTrue(first, second, third) {
//   return first ? second + third : second - third;
// };
// console.log(getTrueArgument(0, 2, 5));
 
//Task 6
//Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)
//и выводит на страницу столько красных кругов на страницу
// const amountOfIterations = +prompt('Enter a number of iterations');

// function redCircleDrawing(amountOfIterations) {
//   if(isNaN(amountOfIterations)){
//     alert('You entered a text. Enter a number of iterations')
//   }else {
//     for (let i = 1; i <= amountOfIterations; i++) {
//       let div = document.createElement('div');
//       div.className = 'red-circles';
//       document.body.append(div);
//     };
//   };
// };
// redCircleDrawing(amountOfIterations);

//Arguments property. Task 1.
//Напишите функцию, которая принимает произвольное количество аргументов в виде строк
//и выводит их через пробел с помощью document.write() в тело html-документа.
//Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month")
//должна вывести фразу "I've been learning JavaScript for a month".

// function showWords() {
//   let sentence = '';
//   for (let i = 0; i < arguments.length; i++) {
//     sentence += arguments[i] + ' ';
//   }
//   console.log(sentence);
// };
// showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");


//Task 2.
//Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число.
//Например, функция с именем complexDigit() при вызове complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.

// function complexDigit() {
//   let multivaluedNumber = '';
//   for (let i = 0; i < arguments.length; i++) {
//     multivaluedNumber += arguments[i];
//   }
//   console.log(multivaluedNumber);
// };

// complexDigit(1,9,4,8,3);
