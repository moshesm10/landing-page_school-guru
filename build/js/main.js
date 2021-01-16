"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл
    const scrollLinks = document.querySelectorAll('.menu__links-link-wrapper a');

    scrollLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
    
            const topOffsetToElement = document.querySelector(e.target.hash).offsetTop;

        });
    });

    //smooth-scroll
});