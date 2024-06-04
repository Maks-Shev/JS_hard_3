document.getElementById("save-btn").addEventListener("click", () => {
    const input = document.getElementById("input-text").value;
    localStorage.setItem("savedText", input);
    alert("Текст сохранен!");
});

document.getElementById("load-btn").addEventListener("click", () => {
    // Получить из LocalStorage
    const savedText = localStorage.getItem("savedText");
    // текстконтентом записать значение из localStorage
    document.getElementById("saved-text").textContent = savedText ? savedText : 'Поле не должно быть пустым'
});

document.getElementById("clear-btn").addEventListener("click", () => {
    // удалить значения из LocalStorage
    localStorage.removeItem("savedText");
    document.getElementById("saved-text").textContent =
        "Текст очищен!";
});
