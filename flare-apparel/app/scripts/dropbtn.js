export function HamburgerBtn() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        const toggleClass = () => {
            hamburger.classList.toggle('is-active');
        };
        hamburger.addEventListener('click', toggleClass);

        return () => {
            hamburger.removeEventListener('click', toggleClass);
        };
    }
}