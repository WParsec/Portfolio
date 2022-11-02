export function toggleNav() {
    const toggleBtn = document.querySelector('#toggleBtn');
    const menu = document.querySelector('.collapse-nav');

    let menuOpen = false;

    toggleBtn.addEventListener('click', () => {
        if(!menuOpen) {
            toggleBtn.classList.add('open');
            menuOpen = true;
        } else {
            toggleBtn.classList.remove('open');
            menuOpen = false;
        }
        menu.classList.toggle('show');
        menu.classList.toggle('z-10');
    })
}