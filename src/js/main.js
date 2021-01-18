"use strict";
import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
    });

    // Отправка email на почту
    const form = document.querySelector('.callback-block__content-email'),
          formButton = form.querySelector('.callback-block__content-email__button');

          formButton.addEventListener('click', async (e) => {
            e.preventDefault();

            const email = document.querySelector('.callback-block__content-email__input').value;
            if (email) {
                const formData = new FormData();
                formData.append('email', email);

                let res = await fetch('./mail.php', {
                    method: 'POST',
                    body: formData
                });

                
                let result = await res.text();//.json();
                console.log(result);
            }
          });
    
    // Бургер меню
    const burgerButton = document.querySelector('.menu__burger-button'),
          menuWrapper = document.querySelector('.menu__wrapper');
    burgerButton.addEventListener('click', () => {
        menuWrapper.style.left = 0;
        menuWrapper.addEventListener('click', () => {
            menuWrapper.style.left = '-100vw';
        });
    });

});