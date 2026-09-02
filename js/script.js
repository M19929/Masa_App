const nav = document.getElementById('navbar');
const topBtn = document.getElementById('top');

// ===============================
// Navbar Scroll
// ===============================

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);

    if (topBtn) {
        topBtn.classList.toggle('show', window.scrollY > 500);
    }
});


// ===============================
// Back To Top
// ===============================

if (topBtn) {
    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}


// ===============================
// Mobile Navbar
// ===============================

document.querySelectorAll('#nav .nav-link').forEach(link => {

    link.addEventListener('click', () => {

        const menu = document.getElementById('nav');

        if (menu.classList.contains('show')) {

            const collapse =
                bootstrap.Collapse.getOrCreateInstance(menu);

            collapse.hide();
        }

    });

});
