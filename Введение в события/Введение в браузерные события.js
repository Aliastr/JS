// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}

// Создайте кнопку, которая будет скрывать себя по нажатию.

// <input type="button" onclick="this.hidden=true">

// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

Запустятся оба обработчика. Вывод - '1''2'

// Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
// Требования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

// Создать меню, которое по нажатию открывается либо закрывается:

<style>
    .menu ul {
        margin: 0;
        list-style: none;
        padding-left: 20px;
        display: none;
    }
    .menu .title {
        font-size: 18px;
        cursor: pointer;
    }
    .menu .title::before {
        content: '▶ ';
        font-size: 80%;
        color: green;
    }
    .menu.open .title::before {
        content: '▼ ';
    }
    .menu.open ul {
        display: block;
    }
</style>
</head>
<body>
    <div id="sweeties" class="menu">
        <span class="title">Сладости (нажми меня)!</span>
        <ul>
            <li>Пирожное</li>
            <li>Пончик</li>
            <li>Мёд</li>
        </ul>
    </div>
    <script>
        let menuElem = document.getElementById('sweeties');
        let titleElem = menuElem.querySelector('.title');
        titleElem.onclick = function() {
            menuElem.classList.toggle('open');
        };
    </script>
/</body>

// Есть список сообщений.
//При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
//Результат должен выглядеть, как показано здесь:

let panes = document.querySelectorAll('.pane');
    for(let pane of panes) {
        pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
        pane.firstChild.onclick = () => pane.remove();
    }
    
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

<body>

    <div id="carousel" class="carousel">
    <button class="arrow prev"><-</button>
    <div class="gallery">
        <ul>
        <li><img src="https://ru.js.cx/carousel/1.png"></li>
        <li><img src="https://ru.js.cx/carousel/2.png"></li>
        <li><img src="https://ru.js.cx/carousel/3.png"></li>
        <li><img src="https://ru.js.cx/carousel/4.png"></li>
        <li><img src="https://ru.js.cx/carousel/5.png"></li>
        <li><img src="https://ru.js.cx/carousel/6.png"></li>
        <li><img src="https://ru.js.cx/carousel/7.png"></li>
        <li><img src="https://ru.js.cx/carousel/8.png"></li>
        <li><img src="https://ru.js.cx/carousel/9.png"></li>
        <li><img src="https://ru.js.cx/carousel/10.png"></li>
        </ul>
    </div>
    <button class="arrow next">-></button>
    </div>
    <script>
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
        li.style.position = 'relative';
        li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
        i++;
    }
    let width = 130;
    let count = 3;
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');
    let position = 0;
    carousel.querySelector('.prev').onclick = function() {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };
    carousel.querySelector('.next').onclick = function() {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
    </script>
/</body>