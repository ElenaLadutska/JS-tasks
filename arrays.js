// написать цикл for с перебором массива, на каждую этерацию выводить номер итерации (от 0 до 10 и от 10 до 0)
let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= randomArray.length; i++) {
  let div = document.createElement('div');
  div.className = 'iteration-number';
  div.innerHTML = `Iteration number is ${i}`
  document.body.append(div);
};

for (let i = 1; i <= randomArray.length; i++) {
  let div = document.createElement('div');
  div.className = 'iteration-number';
  div.innerHTML = `Iteration number is ${randomArray.at(-i)}`;
  document.body.append(div);
};
