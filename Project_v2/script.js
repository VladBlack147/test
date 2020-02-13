'use strict';

let money = prompt(`Ваш бюджет на месяц?`);
let time = prompt(`Введите дату в формате YYYY-MM-DD`);

let answer1 = prompt (`Введите обязательную статью расходов в этом месяце`);
let answer2 = prompt (`Во сколько обойдется?`);


let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    answer1 : answer2
   },
  optionalExpenses: "",
  income: "",
  savings: false
};

let dayExp = money / 30; 

alert(dayExp);

