// отримуємо елемент зображення та кнопки
const image = document.getElementById("image");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// додаємо обробник події на кожну кнопку
button1.addEventListener("click", () => {
    image.src = "city1.png";
});

button2.addEventListener("click", () => {
    image.src = "city2.png";
});

button3.addEventListener("click", () => {
    image.src = "city3.png";
});
