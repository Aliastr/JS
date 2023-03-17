// Почему в коде ниже return false не работает?
// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

Потому что создается функция с содержимым тела функции необходимо добавить return в событии onclick.

// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, 
// и если он не хочет, то прерывать переход по ссылке.

contents.onclick = function(event) {
    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a');
    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
    }
};


// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

<body>
<p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>
<ul id="thumbs">
    <li>
        <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
        <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
        <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
        <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
        <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
    </ul>
<script>
    thumbs.onclick = function(event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
  }
    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }
</script>
</body>