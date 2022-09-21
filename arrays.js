// написать цикл for с перебором массива, на каждую этерацию выводить номер итерации (от 0 до 10 и от 10 до 0)
// let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i <= randomArray.length; i++) {
//   let div = document.createElement('div');

//   div.className = 'iteration-number';
//   div.innerHTML = `Iteration number is ${i}`;

//   document.body.append(div);
// };

// for (let i = 1; i <= randomArray.length; i++) {
//   let div = document.createElement('div');

//   div.className = 'iteration-number';
//   div.innerHTML = `Iteration number is ${randomArray.at(-i)}`;

//   document.body.append(div);
// };


// 0. Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и выводит каждый символ строки в логи.

// циклы + доступ к символам через индекс

// const logAllChars = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   };
// };

// logAllChars('Elena');

// 1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены.
// replace

// let str = 'frontent$developer$wow';
// str = str.replace(new RegExp('\\$', 'g'), '*');
// console.log(str);

// 2.  Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.
// trim, split
// const str = 'I am learning frontend development';

// const convertStringToArray = (str)=> {
//   return str.split(' ');
// };

// const result = convertStringToArray(str);
// console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']

// 3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
// slice

// const removeSymbols = (str, length) => {
//   return str.slice(0, length)
// };
// console.log(removeSymbols('elena', 4));

// 4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.
// toUpperCase, split, join
// const pasteDashesIntoString = (str) => {
//   return str.split(' ').join('-').toUpperCase();
// };

// console.log(pasteDashesIntoString('something low'));

// 5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.

// const makeStringLowerCased = (str) => {
//   return str.toLowerCase();
// };
// console.log(makeStringLowerCased('SOMETHING BIG'));

// 6.Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
// split, цикл, toUpperCase, join

// const capitaliseAllWords = (str) => {
//   let allWordsArray = str.split(' ');
//   let newArray = [];

//   for( i = 0; i < allWordsArray.length; i++) {
//     let word = allWordsArray[i][0].toUpperCase() + allWordsArray[i].slice(1);
//     newArray.push(word);

//   };

//   return newArray;
// };
// console.log(capitaliseAllWords('hold the door'));

// 7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.

// обращаться к элементу через индекс

// const makeFirstLetterUpperCased = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };
// makeFirstLetterUpperCased('hi, Kate');

// 8. Напишите функцию changeLetterRegister(str), 
// которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «Я иЗуЧаЮ ФрОнТеНд», то на выходе должно быть «я ИзУчАю ФрОнТеНд».

// const changeLetterRegister = (str) => {
  
//   for (let i = 0; i < str.length; i++) {

//     if (str[i] === str[i].toUpperCase()) {
//       return str[i].toLowerCase() + str.slice(1);
//     };

//     return str[i].toUpperCase() + str.slice(1);
//   };
// };

// changeLetterRegister('Я иЗуЧаЮ ФрОнТеНд');

// 9. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает в ней все символы разного регистра по порядку. 
// Например, если вводится «джаваскрипт», то на выходе должно быть «дЖаВаСкРиПт».

//создать переменную, которая будет определять какая была буква - большая или маленькая, меняем букву, можно разбить массив на буквы, 
// создать новый массив и заджоинить, исбиг тру, то след.маленькая, если фолс, то след.большая

// const changeLetterRegister = (str) => {
// let isBig = true;
// let changedSentence = str.split('');

// for (let i = 0; i < changedSentence.length; i++) {

//     if (isBig) {
//       changedSentence[i] = changedSentence[i].toLowerCase();
//       isBig = false;
//     } else {
//       changedSentence[i] = changedSentence[i].toUpperCase();
//       isBig = true;
//     };

//   };

// };

// changeLetterRegister('javascript');


// 10. Напишите функцию addZeros(num, len, sign), 
// которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// const addZeros = (num, len, sign) =>{
//   let number = num.toString();
  
//   if (number.length !== len) {

//     while ( number.length !== len) {
//       number = number + '0';
//     };

//     number = sign + number;
//   };
// };

// addZeros(1, 5, '+');

// 11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

// compareStrings('string', 'StRiNg'); // true 
// compareStrings('JavaScript', 'JavaScriptonite');   // false

// const compareStrings = (str1, str2) => {
//   return str1.toLowerCase() === str2.toLowerCase();
// };
// compareStrings('string', 'StRiNg');
// compareStrings('JavaScript', 'JavaScriptonite');

// 12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 

// сначала реализовать черед метод repeat, потом самим через циклы
// const repeatStr = (str, n) => {
//   return str.repeat(n);
// };

// const repeatStr = (str, n) => {
//  let repeatString = '';

//   for (let i = 0; i < n; i++) {
//     repeatString += str;
//   };
  
//   return repeatString;
// };

// repeatStr ('hi', 5);

// 13. Напишите функцию getPathname(pathname), которая находит имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
// const pathname = "/home/user/landing/index.js";

// const getPathname = (pathname) => { 
//   let theLastPathName = pathname.split('/');
//   return console.log( theLastPathName.at(-1) ); 
// };

// getPathname(pathname); // index.js

// // использовать 2 метода - разбивание по символу и последний элемент массива взять методом

// 14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const str = 'Javascript — синхронный язык программирования';

// const getSubstring = (str, char, pos) => {

//   let words = str.split(' ');
//   const indexOfTheChar = words.indexOf(char);

//   if ( pos === 'after') {
//     return words = words.slice(indexOfTheChar + 1, words.length);
//   };
  
//   if (pos === 'before') {
//     return words = words.slice(0, indexOfTheChar);
//   };

// };

// getSubstring(str, '—', 'after'); // Javascript
// getSubstring(str, 'язык', 'before'); // Javascript - синхронный
