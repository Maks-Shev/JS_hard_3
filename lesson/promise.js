// Напишите функцию generateRandomNumber(), которая возвращает Promose, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке.

⁡⁣⁣⁢let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log('Сгененерировано случайное число:', number);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });


// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Ошибка загрузки данных'));
    });
};

fetchData('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then((data) => {
        console.log('Получены данные:', data);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });


// ⁡⁢⁢⁢ Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращвет Promise, выполняющийся через 2 секунды. Promise должен резолвиться, если файл существует, и отклоняться, если файла нет.⁡⁡

// // let checkFileExists2 = (file) => {

// // };⁡

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkFileExists(file);
            if (fileExists) {
                resolve('Файл существует');
            } else {
                reject('Файл не найден');
            }
        }, 2000);
    });
};

checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })

// then Напишите функцию calculateSum(a, b), которая принимает два числа в качестве аргументов и возвращет Promise. Promise должен быть выполнен суммой двух чисел.

let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
};


calculateSum(2, 3)
    .then((sum) => {
        console.log('Сумма:', sum);
    })


// Напишите функцию divideNumbers(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен выполнять делеление первого числа на второею Если число равно 0, Promise должен быть отключен с сообщением о невозможности деления на 0.

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Невозможно делить на 0');
        } else {
            resolve(a / b);
        }
    });
};

divideNumbers(10, 2)
    .then((result) => {
        console.log('Результат:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

// Цепочкки промисов

new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000)
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000)
    });
}).then(function (result) {
    console.log(result);
});

// finally

let processData = (data) => {
    // Implement your logic to process the data
    // Return the processed result
};

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        // Perform the operation with the data
        let result = processData(data);

        // Complete the Promise
        if (result) {
            resolve(result);
        } else {
            reject(new Error('Ошибка операции'));
        }
    }).finally(() => {
        console.log('Операция завершена');
    });
};

performOperation('example')
    .then((result) => {
        console.log('Результат:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])

    .then(console.log)
    .catch(console.log)
// будет ошибка

// // Вы разрбатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстре. Напишите функцию checkServerRespounse(urls). которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответит на запрос.

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

let urls = [
    'https://example.com',
    'https://example.net',
    'https://example.org'
];

checkServerResponse(urls)
    .then((fastestServer) => {
        console.log('Быстрейший сервер:', fastestServer);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });