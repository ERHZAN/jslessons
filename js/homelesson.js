"use sctrict";

// let age = 15;

// if (!(age >= 14 && age <= 90)) {
//     console.log('Маладес');
// } else {
//     console.log('Не маладес');
// };

// if ( age <= 14 || age >= 90) {
//     console.log('Маладес');
// } else {
//     console.log('Не маладес');
// };

// let userName = prompt(`Введите ваше имя пользователя`, ` `);

// if (userName === `Админ`) {
//     let password = prompt(`Введите ваш пароль`, ` `);
//     if (password === `Я главный`) {
//         alert(`Здравствуйте!`);
//     } else if (password === ` ` || password === `` ||password === null) {
//         alert(`Отменено`);
//     } else {
//         alert(`Неверный пароль`);
//     }
// } else if (userName === ` ` || userName === `` || userName === null) {
//     alert(`Отменено`);
// } else {
//     alert(`Я вас не знаю`);
// }
// console.log(userName);

// console.log([ ] + false - null + true);

// let y = 1;
// let x = y = 2;
// console.log(x);

// console.log(+[ ] + 1 + 2);

// console.log("9 5"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log( null || 2 && 3 || 4 );

// a = [1, 2, 3]; b = [1, 2, 3];
// if (a == b) {
//     console.log(`Равно`);
// } else {
//     console.log(`Не равно`);
// }

// console.log(+`Infinity`);

// if ("ёжик" > "яблоко") {
//     console.log(`Ублюдок`);
// } else {
//     console.log(`Ермекина`);
// }

// console.log(0 || "" || 2 || undefined || true || falsе);

// function getRand(min, max) {
//     let randomNum = Math.random() * (max - min);
//     if (randomNum < max && randomNum > min) return Math.trunc(randomNum);
//     getRand(min, max);
// }

// function createBeggar() {
//     let z = 0;
//     return function beggar() {
//         z += getRand(0, 100);
//         console.log(z);
//         if (z >= 250) return;
//         beggar();
//     }
// }
// const beg1 = createBeggar();
// beg1();

// let a = 5;
// console.log(Number.isNaN(a));

let money, time;
start();
function start() {
    money = +prompt(`Ваш бюджет на месяц?`, ``);
    while (isNaN(money) || money == `` || money == null) {
        alert(`Введите числовое значение!!!`)
        money = +prompt(`Ваш бюджет на месяц?`, ``);
    }
    time = prompt(`Введите дату в формате YYYY-MM-DD`, ``);
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``),
            b = +prompt(`Во сколько обойдется?`, ``);
        if ( typeof(a) === `string` && typeof(b) === `number` && typeof(a) != null
            && typeof(b) != null && a.length < 10 ) {
                console.log(`Успешно записано значение`);
                appData.expenses[a] = b;
        } else {
            i -= 1
        }
    }
}
chooseExpenses();

// do {
//     let i = 0;
//     i++
//     let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``),
//         b = +prompt(`Во сколько обойдется?`, ``);
//     if ( typeof(a) === `string` && typeof(b) === `number` && typeof(a) != null
//         && typeof(b) != null && a.length < 10 ) {
//             console.log(`Успешно записано значение`);
//             appData.expenses[a] = b;
//     } else {
//         i -= 1
//     }
// } while (i < 2);

// while (i < 2) {
//     i++;
//     let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``),
//         b = +prompt(`Во сколько обойдется?`, ``);
//     if ( typeof(a) === `string` && typeof(b) === `number` && typeof(a) != null
//         && typeof(b) != null && a.length < 10 ) {
//             console.log(`Успешно записано значение`);
//             appData.expenses[a] = b;
//     } else {
//         i -= 1
//     }
// }

function detectDayBudget(numBudget) {
    appData.moneyPerDay = (numBudget / 30).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}
detectDayBudget(appData.budget);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log(`Минимальный уровень достатка`);
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log(`Средний уровень достатка`);
    } else if (appData.moneyPerDay > 2000) {
        console.log(`Высокий уровень достатка`);
    } else {
        console.log(`Произошла ошибка`);
    }
    console.log(appData.expenses);
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
       let save = +prompt(`Какова сумма накоплений?`);
       let percent = +prompt(`Под какой процент?`);
       appData.monthIncome = Math.round(save * percent / 100 / 12);
       alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Статья необязательных расходов?`);
        let b = i;
        appData.optionalExpenses[b] = a;
    }
}
chooseOptExpenses();
console.log(appData.optionalExpenses);