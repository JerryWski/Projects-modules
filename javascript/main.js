const navMobile = document.querySelector('.nav-bar.mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer-year');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('mobile--active');
    document.body.classList.toggle('sticky-body');
}

const removeSticky = () => {
    document.body.classList.remove('sticky-body');
    navMobile.classList.remove('mobile--active');
    navBtn.classList.remove('is-active');
}

const currentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year;
}

currentYear();
navBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', removeSticky);