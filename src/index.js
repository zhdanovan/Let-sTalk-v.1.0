     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';
     
        ReactDOM.render(
            <App/>,
            document.getElementById('root')
    );







 /*   const button = document.getElementById('button');
    const nick = document.getElementById('nick');
    const message = document.getElementById('message');
    const results = document.getElementById('results');
    button.addEventListener('click', function() {
        //const value = input.value;
        let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL
// 3. Отсылаем запрос
        xhr.open('POST', 'http://localhost:3000');
// 4. Этот код сработает после того, как мы получим ответ сервера
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.error('Ошибка!');
            } else {
                const serverMessages = JSON.parse(xhr.response);
                messages.innerHTML = '';
                for (let serverMessage of serverMessages) {
                    messages.innerHTML += `<ul><b>${serverMessage.nick}:</b> ${serverMessage.message}</ul>`;
                }
            }
        };

        xhr.onprogress = function(event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }

        };

        xhr.onerror = function() {
            results.innerText = "Запрос не удался";
        };
        xhr.send(JSON.stringify(
            {
                nick: nick.value ,
                message: message.value
            }))
    });
    setInterval(function() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.error('Ошибка!');
            } else {
                const serverMessages = JSON.parse(xhr.response);
                messages.innerHTML = '';
                for (let serverMessage of serverMessages) {
                    messages.innerHTML += `<ul><b>${serverMessage.nick}:</b> ${serverMessage.message}</ul>`;
                }
            }
        };
    }, 1000);




});

*/
