"use strict";
import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
    });
});