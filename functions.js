//Task 1. Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; 
//-1, если первое число меньше, чем второе, и 0, если числа равны.
//Попробуйте реализовать эту функцию не только с помощью if...else, 
//но и с помощью тернарного оператора, и в виде стрелочной функции.
//const num1 = +prompt('Enter a number');
//const num2 = +prompt('Enter one more number');

//function numberComparison(num1, num2) {
//  if (num1 > num2) {
//    return '1';
//  }else if (num1 < num2) {
//    return '-1';
//  }else {
//    return '0';
//  };
//};
//alert(numberComparison(num1, num2));

//function numberComparison(num1, num2) {
//  (num1 > num2) ? alert('1'):
//  (num1 < num2) ? alert('-1'):
//  alert('0');
//};
//numberComparison(num1, num2);

//const numberComparison = (num1, num2) => {
//  if (num1 > num2) {
//    return '1';
//  }else if (num1 < num2) {
//    return '-1';
//  }else {
//    return '0';
//  };
//};
//alert(numberComparison(num1,num2));

//Task 2.
//Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. 
//Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.
//Подсказка: используйте параметры функции по умолчанию.
//function squareArea(length, width = length) {
//  let area = length * width;
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
//   if (num1 % 2 && num2 % 2) {
//     return `Sum:${num1 + num2}`;
//   }else if (!(num1 % 2) && !(num2 % 2)) {
//     return `Result of multiplication:${num1 * num2}`;
//   }else {
//     if(num1 % 2){
//       return `Odd is ${num1}`;
//   }else {
//     return `Odd is ${num2}`
//   };
//   };
// };
//console.log(isEven(num1,num2));
 
//Task 4
//Написать функцию, которая принимает 1 аргумент (возраст пользователя)
//и возвращает boolean значение - можно ему на сайт или нет.( если 18 и больше лет)
// const age = +prompt('Enter your age');

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }else {
//     return false;
//   };
// };
// console.log(isAdult(age));
 
//Task 5
//Написать функцию, которая принимает 3 аргумента,
//если 1 аргумент true - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
//function isFirstArgumentTrue(first, second, third) {
//  if (first) {
//    return second + third;
//  } else {
//    return second - third;
//  }
//};
//console.log(isFirstArgumentTrue(0, 2, 5));
 
//Task 6
//Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)
//и выводит на страницу столько красных кругов на страницу
//const amountOfIterations = +prompt('Enter a number of iterations');

// function redCircleDrawing(amountOfIterations) {
//   for (let i = 1; i <= amountOfIterations; i++) {
//     document.open();
//     document.write(`<div class='red-circles'></div>`);
//     document.close();
//   };
// };
//redCircleDrawing(amountOfIterations);
