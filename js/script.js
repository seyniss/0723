const header = document.querySelector('header');
const navBtn = document.querySelector('.nav-btn');
const scrollTopBtn = document.querySelector('.scroll-top-btn');
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').getBoundingClientRect().height;
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // 모바일 메뉴 닫기
            document.querySelector('header').classList.remove('open');
        }
    });
});
scrollTopBtn.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
navBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
    header.classList.toggle('open')
});
window.addEventListener('scroll', () => {
    let i = window.scrollY;
    console.log(i);
    if (i > 200) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
