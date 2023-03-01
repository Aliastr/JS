// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
function unique(arr) {
    return Array.from(new Set(arr));
}

// Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

function aclean(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);
}  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];  
alert(aclean(arr));


// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

Потому что keys не является массивом. Нужно конвертировать его в массив чтобы заработало.
let keys = Array.from(map.keys());