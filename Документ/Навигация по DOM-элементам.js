// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>

// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

document.body.firstElementChild // - div
document.body.lastElementChild // - ul
document.body.lastElementChild.lastElementChild // - li


// Если elem – произвольный узел DOM-элемента…
 Правда, что elem.lastChild.nextSibling всегда равен null?// Да, тк является дочерним элементом
 Правда, что elem.children[0].previousSibling всегда равен null ? // Нет, тк перед дочерним элементом могут быть другие узлы


// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

let table = document.body.firstElementChild;
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        row.cells[i].style.backgroundColor = 'red';
    }