// Находим все эелементы
const newsContainer = document.getElementById("news-container");
const loadNewsButton = document.getElementById("load-news-button");
const newsDate = [
    {
        title: "Новость 1",
        content: "Содержание 1...",
    },
    {
        title: "Новость 2",
        content: "Содержание 2...",
    },
    {
        title: "Новость 3",
        content: "Содержание 3...",
    },
    {
        title: "Новость 4",
        content: "Содержание 4...",
    },
    {
        title: "Новость 5",
        content: "Содержание 5...",
    },
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        // Имитация задержки 2 секунды
        setTimeout(() => {
            // 10% вероятность ошибки
            if (Math.random() > 0.1) {
                resolve(newsDate);
            } else {
                reject(new Error("Ошибка загрузки новостей"));
            }
        }, 2000);
    });
}

// Загрузка новостей
loadNewsButton.addEventListener("click", () => {
    fetchNews()
        .then(data => {
            data.forEach(news => {
            const newsTitleEl = document.createElement('h3');
            newsTitleEl.textContent = news.title;
            newsContainer.appendChild(newsTitleEl);     
            const newsTextEl = document.createElement('p');
            newsTextEl.textContent = news.content;
            newsContainer.appendChild(newsTextEl);
            });
            newsContainer.style.display = "block";
        })
        .catch((error) => {
            // Загрузка ошибки
            newsContainer.textContent = "Ошибка: " + error;
        });
});

// // Отображение новостей
// function displayNews(newsDate) {
//     newsContainer.innerHTML = "";
//     news.array.forEach((article) => {
//         const articleElement = document.createElement("div");
//         articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
//         newsContainer.appendChild(articleElement);
//     });
//     newsContainer.style.display = "block";
// }