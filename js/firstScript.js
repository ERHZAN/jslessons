'use strict';

alert('Ты сосун!');

// let userNameEyesColor;
// let userName = 'Vasya';
// let user = userName;

// console.log(user);

// let userName;
// console.log(typeof(userName));

// let name = 0;
// console.log(name ?? "Без имени");

// let peremennaya = 22;
// console.log('558' > peremennaya++);

// console.log('35' + - "22");

// let name = 0;
// console.log(name ?? "Без имени");

// console.log(!false && 11 || 18 && !'');

// let resultOne = +'25' + +'5';
// console.log(resultOne);
// console.log(typeof(resultOne));

// let resultTwo = +'10';
// console.log(resultTwo);
// console.log(typeof(resultTwo));

// let users = '25';
// let admins = '10';
// console.log(users + admins);
// console.log(+users + +admins);

// let myAge = 27;
// console.log(`Мой возраст: ${myAge}`);

// let users = 5;
// console.log(users);
// users += 3;
// console.log(users);
// users *= 2;
// console.log(users);

// console.log(undefined == 0);

// let admins = 10;
// let users = 7;
// admins >= users || users++;
// console.log(users);

// let users = 0.1;
// (users >= 0) && console.log(`Пользователей: ${users}`);

// 5>10 ? console.log('Пять больше десяти') :
//     5>9 ? console.log('Пять больше девяти') :
//     5>8 ? console.log('Пять больше восьми') :
//     5>7 ? console.log('Пять больше семи') :
//     5>6 ? console.log('Пять больше шести') :
//     5==5 ? console.log('Пять равно пяти') :
//     console.log('Все варианты не верны');

// if (5>10) {
//     console.log('Пять больше десяти');
// } else if (5>9) {
//     console.log('Пять больше девяти');
// } else if (5>8) {
//     console.log('Пять больше восьми');
// } else if (5>7) {
//     console.log('Пять больше семи');
// } else if (5>6) {
//     console.log('Пять больше шести');
// } else if (5==5) {
//     console.log('Пять равно пяти');
// } else {
//     console.log('Произошла ошибочка :(');
// };

// let num = 0;
// for (num = 0; num < 5; num++) {
// 	console.log(num);
// }
// console.log(`Вывод вне цикла: ${num}`);

// for (; num < 5;) {
//     num++;
//     if (num == 3) break;
// 	console.log(num);
// }

// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 2) {
// 			continue firstFor;
// 		}
// 		console.log(size);
// 	}
// }

// let num = 0;
// while (num <= 5) {
//     console.log(num++);
// }
// num--;
// console.log(num);

// let num = 8;
// while (num) {
// 	//Последний результат 0, верно?
// 	console.log(num);
// 	num--;
// }

// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }

// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`)
//     num++;
// }

// firstCycle: for (let num = 0; num < 2; num++) {
// 	//Цикл №2
// 	for (let size = 0; size < 3; size++) {
// 		console.log(size);
//         if (size == 1) break firstCycle;
// 	}
// }

// let showMessage;

// if (2>1) {
//     showMessage = function () {
//         console.log('Сообщение');
//     }
// };
// showMessage ();

// function calcMessage(firstWord, secondWord, thirdWord, spaceWord, endWord) {
//     if (thirdWord === 'дела') {
//         endWord = '?'
//     } else {
//         endWord = '.'
//     }
//     return firstWord + spaceWord + secondWord + spaceWord + thirdWord + endWord;
// }

// function showMessage(message) {
//     console.log(message);
// }

// function initMessage() {
//     showMessage(calcMessage('Ермек', 'как', 'дела', ' '));
// }

// initMessage();

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     '58': 'Значение свойства',
// }
// console.log(userInfo[58])

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     address: {
//         city: 'Uzhgorod',
//     }
// }
// for (const key in userInfo.address) {
//     const value = userInfo.address[key];
//     console.log(value);
// }

// let userInfo = {
//     name: 'Вася',
//     age: 30,
// }
// let user = Object.assign({}, userInfo);

// user.name = 'Лена';
// delete user.age;

// delete userInfo.age;

// console.log(user);

// let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
// console.log(numOne);

// console.log(Math.max(10, 58, 39, -150, 0));

// console.log(Math.floor(58.858));

// let text = 'Фрилансер'
// console.log(text.slice(-4, -3));
// console.log(text.toUpperCase());
// console.log(text.slice(3, 6));

// let arr = ['Иштван', 'Коля', 'Петя',];

// let result = arr.map(function(item, index, array) {
//     return index;
// }
// );

// console.log(arr);
// console.log(result);

// let users = ['Ваня', 'Иштван'];
// users.push('Оля');
// users[1] = 'Петя';
// // users.unshift('Маша', 'Паша');
// users.splice(0, 0, 'Маша', 'Паша');
// console.log(users);

// let newArr = users.slice();

// console.log(newArr);

// let removed = newArr.splice(0, 1);
// console.log(removed);
// console.log(users);
// console.log(newArr);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// let secondRemoved = arr.splice(1, 1);
// console.log(secondRemoved);

// let str = 'Ваня,Иштван,Оля';
// console.log(str);

// let arrStr = str.split(',');
// console.log(arrStr);

// str = arrStr.join(', ');
// console.log(str);

// let numFactorial = prompt('Введите факториал, который хотите вычислить', [])

// if (numFactorial < 1) { // Факториал не может быть меньше единицы 0n! = 1 в качестве допущения, иначе будет ошибочка :)
//     numFactorial = 1;
//     console.log('Вы ввели неверный факториал! Значение будет возвращено к единице!');
// };

// let arr = [];
// for (let i = 0; i < numFactorial; i++) {
//     arr.push(i + 1);
// };
// let calcValue = arr.reduce(function (previousValue, item, index, array){
//     return item * previousValue;
// }, 1);
// alert(`Вычисление факториала ${numFactorial}n! = ${calcValue} (первый способ)`);

// let a;
// let newArr = [0, 1];

// for (a = 0; a <= numFactorial; a++) {
//     let calc = newArr[a + 1] * (a + 1);
//     newArr.push(calc);
// };
// alert(`Вычисление факториала ${numFactorial}n! = ${calcValue} (второй способ)`);

// let b;
// let summ = 1;
// for (b = 1; b <= numFactorial; b++) {
//     summ = summ * b;
// };
// alert(`Вычисление факториала ${numFactorial}n! = ${calcValue} (третий способ)`);

/*
==============================================================================================================
=========================================== Document Object Model ============================================
==============================================================================================================
*/

// const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;
// console.log(`Ширина окна браузера: ${windowWidth}` + ` | ` + `Высота окна браузера: ${windowHeight}`);

// console.log(navigator.platform);

// if (navigator.userAgent.includes('Chrome')) {
//     console.log('Ваш браузер Google Chrome');
// } else if (navigator.userAgent.includes('Firefox')) {
//     console.log('Ваш бразуер Mozilla Firefox')
// } else {
//     console.log('Ваш браузер не определён')
// };

// console.log(location.href);

// location.href = 'https:/www.youtube.com/';

// history.back();
// history.forward();


// const bodyElement = document.body;

// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

// const previousSubling = bodyElement.previousElementSibling;
// const nextSubling = bodyElement.nextElementSibling;
// const parentElement = bodyElement.parentElement;
// console.log(previousSubling);
// console.log(nextSubling);
// console.log(parentElement);

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);

const previousElement = document.querySelector('.hello-world');
// console.log(previousElement.textContent);

const ulList = document.querySelector('.div-list');
// ulList.style.

const liObjects = ulList.querySelectorAll('.list');
for (let lists of liObjects) {
    if (lists.matches('[class$="list"]')) {
        console.log('Есть объект с классом .list!')
    } else {
        console.log('Нет объекта с классом .list!')
    }
}


previousElement.insertAdjacentHTML(
    'beforeend',
    '<p class="text-hw">Здравствуйте. Этот текст вставлен в элемент, в котором находится "Hello World", с помощью DOM js :)</p>'
)
const newText = previousElement.getElementsByClassName('text-hw');
newText[0].style.fontWeight = '500';
newText[0].style.fontStyle = 'italic';
newText[0].style.fontSize = '1rem';
newText[0].style.color = '#df8282';

const firstElementDiv = document.createElement('div');
firstElementDiv.classList.add('new-div');
firstElementDiv.innerHTML = 
'<span class="text-blue">Привет!</span> Это моя первая вставка объекта в тело документа с помощью <span class="text-yellow">Document Object Model</span> <span class="text-red">JavaScript</span>.';
// console.log(firstElementDiv.outerHTML);
firstElementDiv.style.textAlign = "center";
previousElement.after(firstElementDiv);

const elementDivList = document.getElementsByClassName('div-list');
console.log(elementDivList[0]);
const elementLink = document.createElement('a');
elementLink.className = 'link-element';
elementLink.href = 'https://www.youtube.com/';
elementLink.target = 'blank';
elementLink.style.textDecoration = 'none';
elementLink.style.color = '#0f812b';
elementLink.innerHTML = 'Нажми, чтоб зайти на ютуб';
elementDivList[0].after(elementLink);

const bodyElement = document.body;
const bodyNodes = bodyElement.childNodes;

// console.log(bodyElement.children);

// for (let node of bodyNodes) {
//     console.log(node);
// }

// console.log(bodyElement.parentElement);

// const collectionList = bodyElement.querySelectorAll('.list');
// console.log(collectionList);

// const listSubList = document.querySelectorAll('.list-sub-list');
// console.log(listSubList);

// const listItems = listSubList[0].querySelectorAll('.sub-list');
// console.log(listItems);

let Tolyasik;
let Ermek;
var mujik = [
    Tolyasik = {
        age: 36,
        isMarried: false,
        iq: 10,
        occupation: `dependent`,
    },
    Ermek = {
        age: 26,
        isMarried: false,
        iq: 110,
        occupation: `web developer`,
    },
    26,
    30,
    17,
    18,
]
console.log (mujik[0]);


const str = "1 чел 2 чел 3 чел";
console.log(str.match(/^\d/gm));