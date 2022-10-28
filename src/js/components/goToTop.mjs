export function goToTop() {
    const goToTopButton = document.querySelector('#goToTopButton');
    goToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    })
}
