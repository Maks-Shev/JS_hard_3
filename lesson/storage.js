// Пример 1: Установка и получение значения из LocalStorage

// установка значения в LocalStorage
localStorage.setItem('username', 'John');

// получение значения из LocalStorage
let storedUsername = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUsername);

// Удаоение 

localStorage.removeItem('username');    

// Проверка, что значение удалено

let storedUsername2 = localStorage.getItem('username');
console.log('Значение из LocalStorage:', storedUsername2);

// Очистка LocalStorage

// Установка значений в LocalStorage
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');

// // Очистка LocalStorage
localStorage.clear();

// Проверка, что LocalStorage пустой
console.log('LocalStorage:', localStorage);

// Проверяем, есть ли значение счетчика в LocalStorage
if (localStorage.getItem('counter')) {
    // Если значение счеткика уже есть, увеличиваем его на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    // Иначе устанавливаем значение счетчика равным 1
    localStorage.setItem('counter', '1');
}

// Выводим значение счеткика в консоль
console.log('Счетчик посещений:', localStorage.getItem('counter'));

// Проверяем, есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0;

// Обновляем значение счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
}
// Обновляем значение счетчика и сохраняем его в LocalStorage
const minusCounter = () => {
    counter--;
    localStorage.setItem('counter', counter.toString());
}

// Выводим значение счеткика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
}); 

// Уменьшение счетчика на 1
document.querySelector('.minus').addEventListener('click', () => {
    minusCounter();
    document.querySelector('.counter').textContent = counter;
}); 
