// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

//P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

//Цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}


//Рекурсия

function sumTo(n) {
    if (n == 1) return 1;
        return n + sumTo(n - 1);
}


//Формула

function sumTo(n) {
    return n * (n + 1) / 2;
}


Самый быстрый вариант решения - формула потому, что производится только 3 операции вычисления.
Самый медленный рекурсия потому, что производится n операций вычислений и дополнительно требуются ресурсы на организацию памяти.

При помощи рекурсии посчитать не получится - переполнится стек вызовов.


// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
} 


// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?
//Цикл
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    let val = list;
    while (val) {
        alert(val.value);
        val = val.next;
    }  
}
//Рекурсия
function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}
Лучше без рекурсии - не тратятся ресурсы на организацию памяти.


// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
//Рекурсия
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}
printReverseList(list);

//Цикл
function printReverseList(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}
printReverseList(list);