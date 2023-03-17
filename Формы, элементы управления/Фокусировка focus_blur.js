Создайте <div>, который превращается в <textarea>, если на него кликнуть.
<textarea> позволяет редактировать HTML в элементе <div>.
Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.

<body>
    <ul>
        <li>Кликните на div ниже, чтобы отредактировать текст.</li>
        <li>Нажатие на Enter или потеря фокуса с ввода сохранят содержимое.</li>
    </ul>
    <div id="view" class="view">Текст</div>
<script>
    let area = null;
    let view = document.getElementById('view');
    view.onclick = function() {
        editStart();
    };

    function editStart() {
        area = document.createElement('textarea');
        area.className = 'edit';
        area.value = view.innerHTML
    area.onkeydown = function(event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };
    area.onblur = function() {
        editEnd();
    };
    view.replaceWith(area);
    area.focus();
}
function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}
</script>
</body>


{/* Сделайте ячейки таблицы редактируемыми по клику.
По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
Таблица может иметь множество ячеек. Используйте делегирование событий. */}

<body>
    <link rel="stylesheet" href="bagua.css">
    <link rel="stylesheet" href="my.css">
    <p>Кликните на ячейку таблицы, чтобы редактировать её. Нажмите ОК или ОТМЕНА, когда закончите.</p>
    <table id="bagua-table">
        <tr>
        <th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
        </tr>
        <tr>
        <td class="nw"><strong>Северо-Запад</strong>
            <br>Металл
            <br>Серебро
            <br>Старейшины
        </td>
        <td class="n"><strong>Север</strong>
            <br>Вода
            <br>Синий
            <br>Перемены
        </td>
        <td class="ne"><strong>Северо-Восток</strong>
            <br>Земля
            <br>Жёлтый
            <br>Направление
        </td>
        </tr>
        <tr>
        <td class="w"><strong>Запад</strong>
            <br>Металл
            <br>Золото
            <br>Молодость
        </td>
        <td class="c"><strong>Центр</strong>
            <br>Всё
            <br>Пурпурный
            <br>Гармония
        </td>
        <td class="e"><strong>Восток</strong>
            <br>Дерево
            <br>Синий
            <br>Будущее
        </td>
        </tr>
        <tr>
        <td class="sw"><strong>Юго-Запад</strong>
            <br>Земля
            <br>Коричневый
            <br>Спокойствие
        </td>
        <td class="s"><strong>Юг</strong>
            <br>Огонь
            <br>Оранжевый
            <br>Слава
        </td>
        <td class="se"><strong>Юго-Восток</strong>
            <br>Дерево
            <br>Зеленый
            <br>Роман
        </td>
        </tr>
    </table>
    <script>
        let table = document.getElementById('bagua-table');
        let editingTd;
        table.onclick = function(event) {
        let target = event.target.closest('.edit-cancel,.edit-ok,td');
        if (!table.contains(target)) return;
        if (target.className == 'edit-cancel') {
            finishTdEdit(editingTd.elem, false);
        } 
        else if (target.className == 'edit-ok') {
            finishTdEdit(editingTd.elem, true);
        } 
        else if (target.nodeName == 'TD') {
            if (editingTd) return;
                makeTdEditable(target);
            }
        };
        function makeTdEditable(td) {
        editingTd = {
            elem: td,
            data: td.innerHTML
        };
        td.classList.add('edit-td');
        let textArea = document.createElement('textarea');
        textArea.style.width = td.clientWidth + 'px';
        textArea.style.height = td.clientHeight + 'px';
        textArea.className = 'edit-area';
        textArea.value = td.innerHTML;
        td.innerHTML = '';
        td.appendChild(textArea);
        textArea.focus();
        td.insertAdjacentHTML("beforeEnd",
            '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
        );
        }
        function finishTdEdit(td, isOk) {
            if (isOk) {
                td.innerHTML = td.firstChild.value;
            } 
            else {
                td.innerHTML = editingTd.data;
            }
            td.classList.remove('edit-td');
            editingTd = null;
        }
    </script>
</body>

{/* 
Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:
Демо в новом окне
P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом. */}

<body>
    <p>Кликните по "изображению" мыши и перемещайте её с помощью клавиш со стрелками.</p>

    <pre id="mouse">
 _   _
(q\_/p)
 /. .\
=\_t_/=   __
 /   \   (
((   ))   )
/\) (/\  /
\  Y  /-'
 nn^nn
    </pre>
<script>
    mouse.tabIndex = 0;
    mouse.onclick = function() {
        this.style.left = this.getBoundingClientRect().left + 'px';
        this.style.top = this.getBoundingClientRect().top + 'px';
        this.style.position = 'fixed';
    };
    mouse.onkeydown = function(e) {
        switch (e.key) {
            case 'ArrowLeft':
            this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
            return false;
            case 'ArrowUp':
            this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
            return false;
            case 'ArrowRight':
            this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            return false;
            case 'ArrowDown':
            this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
            return false;
        }
    };
</script>

