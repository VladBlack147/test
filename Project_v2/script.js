'use strict';

let money,
  time,
  expens,
  answer,
  everyDay;

money = prompt(`Ваш бюджет на месяц?`, `40000`);
time = prompt(`Введите дату в формате YYYY-MM-DD`, `2020 30 01`);
expens = prompt(`Введите обязательную статью расходов в этом месяце`, `T`);
answer = prompt(`Во сколько обойдется?`, `1000`);


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
