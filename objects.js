// создать обьект чайник. У него должны быть свойства: 
// модель/производитель, дата производства, срок годности, 
// срок гарантии, цвет, высота, вместимость (сами решаете это число/строка или обьект) 
// и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и 3 метода 
// - включить чайник, выключить чайник, вывести данные о чайнике
//  и очистить данные (очистка значения, сколько раз чайник был включен)

const isTheKettleOn = confirm('Is the kettle on?');
let numberOfTurningOn = 0;

const turnOn = () => {
  if(!isTheKettleOn) {
    return `You turned on the kettle. Number of turning on: ${numberOfTurningOn += 1}`;
  };
};

const turnOff = () => {
  if(isTheKettleOn) {
    return `You turned off the kettle.`;
  };
};

function showInfoAndClearData() {
  console.log(this);
  numberOfTurningOn = 0;
};


let kettle = {
  model: 'LA-4622',
  'production date': '5.03.2022',
  'expiration date': '36 months',
  'warranty period': '12 months', 
  color: 'white', 
  height: '35 cm', 
  capacity: '1.6 l',
  isOn: function() {
    if(isTheKettleOn) {
      return true;
    };

    return false;
  },
  turnOn,
  turnOff,
  showInfoAndClearData,
};

