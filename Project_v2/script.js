'use strict';

let money,
  time,
  expens,
  answer,
  everyDay;

money = prompt(`Ваш бюджет на месяц?`);
time = prompt(`Введите дату в формате YYYY-MM-DD`);
expens = prompt(`Введите обязательную статью расходов в этом месяце`);
answer = prompt(`“Во сколько обойдется?”`);


let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    expens : answer
  },
  optionalExpenses: {},
  income: [],
  savings: false
};

everyDay = money/30;
alert(everyDay);
