import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }


    const profileMenuBtn = document.getElementById('profile-menu');
    const profileDropdown = document.getElementById('profile-dropdown');
    const dropdownName = document.getElementById('dropdown-current-name');
    const dropdownIcon = document.querySelector('.dropdown-profile-icon');

    const setProfileDropdown = () => {
        if (nomePerfil && imagemPerfil) {
            if (dropdownName) dropdownName.textContent = nomePerfil;
            if (dropdownIcon) dropdownIcon.src = imagemPerfil;
        }
    };

    setProfileDropdown();

    if (profileMenuBtn && profileDropdown) {
        profileMenuBtn.addEventListener('click', (event) => {
            event.preventDefault();
            profileDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!profileDropdown.contains(target) && target !== profileMenuBtn && !profileMenuBtn.contains(target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
