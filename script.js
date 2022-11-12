// задание 1
let userName = prompt('Введите ваше имя.');
alert('Ваше имя ' + userName);
let today = new Date();
let year = today.getFullYear();
//   задание 2, 3
let userYearBorn = +prompt('Введите ваш год рождения.');
let userAges = year - userYearBorn;
if (userAges >= 0 && userAges <= 2) {
    alert('Вам ' + userAges + ' или ' + (userAges - 1) + ' вы ребёнок');
} else if (userAges >= 12 && userAges <= 18) {
    alert('Вам ' + userAges + ' или ' + (userAges - 1) + ' вы подросток');
} else if (userAges > 18 && userAges <= 60) {
    alert('Вам ' + userAges + ' или ' + (userAges - 1) + ' вы взрослый');
} else if (userAges > 60) {
    alert('Вам ' + userAges + ' или ' + (userAges - 1) + ' вы пенсионер');
} else {
    alert('Вам ' + userAges + ' или ' + (userAges - 1) + ' в задании не указана ваща возрастная категория');
}
// задание 4
let usd = +prompt('Введите количество USD');
let currency = prompt('Введите валюту: EUR/UAN/AZN');
switch(currency) {
    case 'EUR': {
        alert(usd + " USD = " + usd + " " + currency);
        break;
    }
    case 'UAN': {
        alert(usd + " USD = " + (usd * 36.71) + " " + currency);
        break;
    }
    case 'AZN': {
        alert(usd + " USD = " + (usd * 1.69) + " " + currency);
        break;
    }
    default: {
        alert('Неверный выбор');
    }
}
// задание 5
function firstNumberFunction() {
    return +prompt('Введите первое число');
}
function secondNumberFunction() {
    return +prompt('Введите последнее число');
}
let firstNumber = firstNumberFunction();
let lastNumber = secondNumberFunction();
let sum = 0;
for(firstNumber; firstNumber <= lastNumber; firstNumber++) {
    sum = sum + firstNumber;
}
alert('Общая сумма составила ' + sum);
// задание 6
firstNumber = firstNumberFunction();
lastNumber = secondNumberFunction();
let maxNumber = new Number;
let higher;
if (firstNumber > maxNumber) {
    higher = firstNumber;
} else {
    higher = lastNumber;
}
for(i = 1; i <= higher; i++) {
    if (Number.isInteger(firstNumber / i) && Number.isInteger(lastNumber / i)) {
        maxNumber = i;
    }
}
alert('Максимальный общий делитель = ' + maxNumber);
// задание 7
function compareTo(number1, number2) {
    if (number1 < number2) {
        return -1;
    } else if (number1 == number2) {
        return 0;
    }
    else return 1;
}
alert(compareTo(+prompt('Введите первое число'),+prompt('Введите второе число')));
// задание 8
function factorial(number) {
    let factorial = 1;
    for(let i = 1; i <=number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
alert(factorial(+prompt('Введите число для вычисления факториала')));