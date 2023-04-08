// responsive navbar on mobile
const openMenu = document.querySelector(".mobile_nav_open");
const closeMenu = document.querySelector(".mobile_nav_close");
const mobileNav = document.querySelector(".nav_links");
//open menu
openMenu.addEventListener('click', e => {
    openMenu.classList.add('hidden_active');
    closeMenu.classList.remove('hidden_active');
    mobileNav.style.transform = 'translateX(-' + 0 + '%)';
})
//close menu
closeMenu.addEventListener('click', e => {
    closeMenu.classList.add('hidden_active');
    openMenu.classList.remove('hidden_active');
    mobileNav.style.transform = 'translateX(' + 100 + '%)';
})