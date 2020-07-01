"use strict";

fetch('https://randomuser.me/api/?results=10')
.then(
    function (res) {
        return res.json();
    }
).then(
    function ({ results }) {
        addUsers(results);
        removeUser();
    }
).catch(
    function (err) {
        console.log(err);
    }
)




function addUsers(arg) {

        const conteiner = document.getElementsByClassName('conteiner')[0];
        const ul = document.createElement('ul');

        ul.classList.add('user__outer');

        arg.forEach(function (item) {
            const li = document.createElement('li');
            li.classList.add('user__inner');
            li.innerHTML = `
            <div class="user__inner__info">
                <div class="user__inner__info-img ${item.gender === "female" ? "_female" : ''}">
                    <img src="${item.picture.large}" alt="user-img">
                </div>
                <button class="user__inner__info-button" type="button"></button>
                <div class="user__inner__info-name">
                    <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
                </div>
                <div class="user__inner__info-email">
                    <p>${item.email}</p>
                </div>
            </div>
            `;
            ul.appendChild(li);
        })

        conteiner.appendChild(ul);
        document.getElementsByClassName('preloader')[0].remove();

};

function removeUser() {
    const ul = document.querySelector('.user__outer');

    ul.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'button') {
            e.target.parentNode.remove(e);
        }
    })
}
