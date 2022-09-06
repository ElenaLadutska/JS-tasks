// Реализуйте класс Employee (Работник), 
// который будет иметь свойства: firstname (имя),  
// lastname (фамилия), rate (ставка за день работы), 
// workDays (количество отработанных дней). 
// Также класс должен иметь метод getCurrentSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.           

// Работать должно вот так:   

// const worker = new Employee('Настя', 'Петрова', 5, 24);

// console.log(employee.firstname); //выведет 'Иван'
// console.log(employee.lastname); //выведет 'Иванов'
// console.log(employee.rate); //выведет 10
// console.log(employee.workDays); //выведет 31
// console.log(employee.getCurrentSalary()); //выведет 310 - то есть 10*31

function Employee(firstname, lastname, rate, workDays) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.rate = rate;
  this.workDays = workDays;
  this.getCurrentSalary = function() {
    return this.rate * this.workDays;
  };
};

const worker = new Employee('Lena', 'Ladutska', 10, 20);
console.log(worker.firstname);
console.log(worker.lastname);
console.log(worker.rate);
console.log(worker.workDays);
console.log(worker.getCurrentSalary());
