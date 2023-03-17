// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();
    let count = li.getElementsByTagName('li').length;
    alert(title + ': ' + count);
}

// Что выведет этот код?

// <html>
// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>
// </html>

Вывод - '1' узел



// Что выведет этот код?

// <script>
//   let body = document.body;
//   body.innerHTML = "<!--" + body.tagName + "-->";
//   alert( body.firstChild.data ); // что выведет?
// </script>

Вывод - 'body'


// Объектом какого класса является document? => объектом класса HTMLDocument
// Какое место он занимает в DOM-иерархии? => Node -> Document -> HTMLDocument
// Наследует ли он от Node или от Element, или может от HTMLElement? => Наследует

