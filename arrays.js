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

// const convertStringToArray = (str)=> str.split(' ');

// const result = convertStringToArray(str);
// console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']

// 3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
// slice

// const removeSymbols = (str, length) => str.slice(0, length);
// console.log(removeSymbols('elena', 4));

// 4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.
// toUpperCase, split, join

// const pasteDashesIntoString = (str) => str.split(' ').join('-').toUpperCase();
// pasteDashesIntoString('something big');

// 5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.

// const makeStringLowerCased = (str) => str.toLowerCase();
// makeStringLowerCased('SOMETHING LOW');

// 6.Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
// split, цикл, toUpperCase, join

// const capitaliseAllWords = (str) => {
//   const allWordsArray = str.split(' ');
//   const newArray = [];

//   for( i = 0; i < allWordsArray.length; i++) {
//     let word = allWordsArray[i][0].toUpperCase() + allWordsArray[i].slice(1);
//     newArray.push(word);
//   };

//   return newArray;
// };
// capitaliseAllWords('hold the door');

// 7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.
// обращаться к элементу через индекс

// const makeFirstLetterUpperCased = (str) => str[0].toUpperCase() + str.slice(1);
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
// const changedSentence = str.split('');

// for (let i = 0; i < changedSentence.length; i++) {
//   changedSentence[i] = isBig ? changedSentence[i].toLowerCase() : changedSentence[i].toUpperCase();
//   isBig = !isBig;
// };
// return changedSentence;
// };

// console.log( changeLetterRegister('javascript'));

// 10. Напишите функцию addZeros(num, len, sign), 
// которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// const addZeros = (num, len, sign) =>{
//   let number = num.toString();

//   if ( number.length === len ) {
//     return;
//   };

//   while ( number.length !== len) {
//     number = number + '0';
//   };
  
//   return number = sign + number
// };

// addZeros(1, 5, '+');

// 11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

// const compareStrings = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// compareStrings('string', 'StRiNg');
// compareStrings('JavaScript', 'JavaScriptonite');

// 12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 

// сначала реализовать черед метод repeat, потом самим через циклы
// const repeatStr = (str, n) => str.repeat(n);

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


// ЗАДАЧИ НА МАССИВЫ

// 0. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = '';

// for (let i = 1; i < 10; i++) {
//   str = str + i;
// };

// 1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:

// x
// xx
// xxx
// xxxx
// xxxxx

// const lines = 12;
// let iterationResult = '';

// for (let i = 0; i < lines; i++) {
//   let div = document.createElement('div');
//   div.className = 'elem-of-pyramid';

//   iterationResult += 'x';

//   div.innerHTML = (iterationResult);
//   document.body.append(div);
// };

// 2.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// const lines = 9;

// for (let i = 0; i <= lines; i++) {
//   let iterationResult = '';

//   for (let u = 1; u <= i; u++) {
//     iterationResult += i;
//   };
    
//   let div = document.createElement('div');
//   div.className = 'elem-of-pyramid';
//   div.innerHTML = (iterationResult);
//   document.body.append(div);
// };

// 3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

// const lines = 5;
// let iterationResult = '';

// for (let i = 0; i < lines; i++) {
//   let div = document.createElement('div');
//   div.className = 'elem-of-pyramid';

//   iterationResult += 'xx';

//   div.innerHTML = (iterationResult);
//   document.body.append(div);
// };

// 4.   Пирамидка с цифрами
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999

// const lines = 9;
// const elementsInLine = 3;

// for (let i = 1; i <= lines; i++) {
//   let str = '';

//   for (let u = 0; u < elementsInLine; u++) {
//     str += i;
//   };

//   let div = document.createElement('div');
//   div.className = 'elem-of-pyramid';
//   div.innerHTML = (str);
//   document.body.append(div);
// };


// 5. Напишите функцию goThroughArray(list), которая проходится по массиву и выводит каждый элемент.

// const randomArray = [1, 'a', 2, 'b', 3, 'c']; 

// const goThroughArray = (list) => {

//   for (let i = 0; i < list.length; i++) {
//     let div = document.createElement('div');

//     div.className = 'element';
//     div.innerHTML = `Element is ${list[i]}`;

//     document.body.append(div);
//   };
// };

//  goThroughArray(randomArray);

// 6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const firstArray = ['a', 'b', 'c'];
// const secondArray = [1, 2, 3];

// const thirdArray = firstArray.concat(secondArray);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = thirdArray;

// document.body.append(div);

// 7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// const array = ['a', 'b', 'c'];
// array.push(1, 2, 3);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = array;

// document.body.append(div);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = array;

// document.body.append(div);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.splice(1,3);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = newArray;

// document.body.append(div);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c');

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = array;

// document.body.append(div);

// 11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const array = [1, 2, 3, 4, 5];

// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c');
// array.splice(8, 0, 'e');

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = array;

// document.body.append(div);

// 12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// const array = [3, 4, 1, 2, 7]; 
// array.sort((a,b) => a -b);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = array;

// document.body.append(div);

// 13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// const object = {
//   js:'test',
//   jq: 'hello',
//   css: 'world',
// };

// const keysArray = Object.keys(object);

// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = `Keys of object: ${keysArray}`;

// document.body.append(div);

// 14. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 

// let str = '123456';
// const array = str.split('').reverse().join('');
// let div = document.createElement('div');

// div.className = 'element';
// div.innerHTML = `${str} => ${array}`;

// document.body.append(div);

// 15. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

// let str = 'hi';
// str = str[0].toUpperCase() + str.slice(1);
//or
// str = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str);

// 16. Проверьте, что строка начинается на http://.

// const findPosition = (str) => {
//   let cutString = str.split('://');

//   if (cutString.indexOf('http') === 0) {
//     return true;
//   } else {
//     return false;
//   };
// };

// findPosition('http://learn.http://javascript.ru/');

// 17. Проверьте, что строка заканчивается на .html
// let str = 'bvdbdj.html';

// const findPosition = (str) => {
//   let cutString = str.split('.');

//   if (cutString.at(-1) === 'html'){
//     return true;
//   } else {
//     return false;
//   }
// };

//  console.log( findPosition(str) );

// 18. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

// const isIncludes = (array) => array.includes(5);

//  isIncludes([1,5]);

// 21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла)

// const array = [];
// const iterations = 9;

// for (let i = 1; i <= iterations; i++) {
//   let iterationResult = '';

//   for (let u = 1; u <= i; u++) {
//     iterationResult += i;
//   };

//   array.push(iterationResult);
// };

// console.log(array);

// 22. Дан массив чисел, найдите в нем максимальное число

// const findMaxNumber = (array) => Math.max(...array);

// console.log( findMaxNumber([1, 4, 5, 9]) );

// 23. Дан массив чисел, найдите в нем минимальное число

// const findMinNumber = (array) => Math.min(...array);

// findMinNumber([1, 4, 0, 5, 9]);

// 24. Дан массив чисел, найдите среднее арифметическое всех чисел

// const findArithmeticAverage = (array) => {
//   let sum = array.reduce( (a,b) => a + b);
//   const amount = array.length;
//   return sum/amount;
// };

// findArithmeticAverage([10, 20, 30]);

// 25.  Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

//   * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}

// const fill = (arraySize, value) => {
//   const repeatedValue = value.repeat(data);
//   return repeatedValue.split('');
// }

// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

// 26. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

// const reverse = (array) => {
//   const newArray = [];

//   for (let i = -1; i >= -array.length; i--) {
//     newArray.push(data.at(i));
//   };

//   return newArray;
// };

// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]

// 27. Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

//  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

// const compact = (array) => array.filter(element => element);

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)) // [1, 2, 3]

// 19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
// Если число не делится - выведите 'false', а если делится - выведите 'true'.

// const isSimpleNumber = (number) => {
//   let isTrue = false;

//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isTrue = true;break;
//     };
//   };

//   return isTrue
// };

// console.log( isSimpleNumber(31) );


// 20. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

// const isThereADuplicate = (array) => {
//   array.sort( (a, b) => a - b );

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i+1]) {
//       return true;
//     }; 

//     return false;
//   };
// };

// isThereADuplicate([1,7,2,1,3]);

// 28. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

//   * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
//   * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - массив, значения которого массивы пар
//   * @returns {Array}

// const fromPairs = (array) => {
//   let objectFromPairs = array.reduce(function(key, value) {
//     key[value[0]] = value[1];
//     return key;
//   },{});

//   return objectFromPairs;
// };

// const data = [['a', 1], ['b', 2]];
// console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }

// 29. Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

//   * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}

// const without = (array, ...args) => {
// let filteredArr = [...array]
// let elemsForDelete = [...args];

//   for (let i = 0; i <= elemsForDelete.length; i++) {
//     filteredArr = filteredArr.filter((n) => n !== elemsForDelete[i]); 
//   };

//   return filteredArr;
// };

// let data = [1, 2, 3, 1, 2];
// console.log(without(data, 1, 2)); // [3]

// 30. Unique. Напишите функцию, которая убирает повторяющиеся значения.

//   * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
//   * Сложность задачи: 2 of 5
//   * @param {Array<string | number>} array - Массив с примитивными значениями
//   * @returns {Array}
// */
// const unique = (array) => {
//   return array.filter((elem, id) => {
//     return array.indexOf(elem) === id;
//   });
// };
//or 
// const unique = (array) => array.filter((elem, id) => array.indexOf(elem) === id);

// const data = [1, 2, 1, 2, 3];
// console.log(unique(data)); // [1, 2, 3]

// 31. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

//   * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * Сложность задачи: 2 of 5
//   * @param {Array} firstArray - Массив с примитивными значениями
//   * @param {Array} secondArray - Массив с примитивными значениями
//   * @returns {boolean}

// const isEqual = (firstArray, secondArray) => {
//   if( firstArray.length !== secondArray.length) {
//     return false;
//   };

//   const sameArrays = firstArray.map((elem, id) => {
//     return secondArray[id] === elem;
//   });

//   if (sameArrays.includes(false)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false
