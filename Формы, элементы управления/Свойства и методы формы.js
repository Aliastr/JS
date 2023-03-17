// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

<select id="genres">
    <option value="rock">Рок</option>
    <option value="blues" selected>Блюз</option>
</select>
let selectedOption = genres.options[genres.selectedIndex];
alert( selectedOption.value );
alert( selectedOption.text );
let newOption = new Option("Классика", "classic");
genres.append(newOption);
newOption.selected = true;


