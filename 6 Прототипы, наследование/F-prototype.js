// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// alert( rabbit.eats ); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert( rabbit.eats ); // ?

// …А если код такой (заменили одну строчку)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
// alert( rabbit.eats ); // ?

// Или такой (заменили одну строчку)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// alert( rabbit.eats ); // ?

// Или, наконец, такой:
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// alert( rabbit.eats ); // ?

Ответ:
1- true
2- false
3- true
4- undefined



// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
// мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?
// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

Функция сработает т.к. obj2 = new JSONbj.constructor() == obj2
Но при этом нужно быть уверенным что значение obj не будет перезаписано вдальнейшем.