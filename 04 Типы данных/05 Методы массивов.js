// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b){
    return arr.filter(item => a <= item && item <= b);
}
let arr = [5, 3, 8, 1];  
let filtered = filterRange(arr, 1, 4);
alert( filtered );
alert( arr );

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);


// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr){
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert(names);

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = /* ... ваш код ... */
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`, id: user.id
}));

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
} 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };  
let arr = [ vasya, petya, masha ]; 
sortByAge(arr);  
alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);


// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) );

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}