// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}


// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
// function f(x) {
//   alert(x);
// }
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
// f1000(test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}


// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
//Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
// Например:
// let f = debounce(alert, 1000);
// f(1); // выполняется немедленно
// f(2); // проигнорирован
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}


// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. 
// Те вызовы, которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}