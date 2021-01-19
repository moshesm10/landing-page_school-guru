"use strict";
import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
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

    // Ссылки на регистрацию
    const buttons = document.querySelectorAll('button[data-click="true"]');
    buttons.forEach(item => {
        item.addEventListener('click', () => {
            document.location = "https://widget.bookform.ru/46754/";
        });
    });
});