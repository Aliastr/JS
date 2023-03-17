// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.


Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};
function f() {
    alert("Hello!");
}
f.defer(1000);

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};