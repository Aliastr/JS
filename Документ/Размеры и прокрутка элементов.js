// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. 
// А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
// Напишите соответствующее выражение для произвольного элемента elem.

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Напишите код, который возвращает ширину стандартной полосы прокрутки.
// Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки 
// (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();
alert(scrollWidth);

// Исходный документ выглядит так:
// Каковы координаты центра поля?
// Вычислите их и используйте, чтобы поместить мяч в центр поля:
// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// Укажите хотя бы 3 отличия, лучше – больше.

1 - clientWidth возвращает число
    getComputedStyle(elem).width возвращает строку
2 - getComputedStyle может вернуть auto для инлайнового элемента
3 - clientWidth выдает размер для содержимого
