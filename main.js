const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

window.addEventListener('scroll', e => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset;
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${id}"]`);
        const top = section.offsetTop - 200;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
});