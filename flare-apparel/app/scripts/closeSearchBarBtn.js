export function CloseSearchBarBtnScript() {
    const closeIcon = document.querySelector('.search-bar .closeIcon');
    const searchBar = document.querySelector('.navigation .search-bar');
    const page = document.getElementsByTagName('html')[0];
    if (searchBar) {
        const toggleSearchBarVisTRUE = () => {
            const isSearchBarHidden = searchBar.getAttribute('aria-hidden') === 'true';
            searchBar.setAttribute('aria-hidden', !isSearchBarHidden);
        };
        const overflowHidden = () => {
            page.classList.toggle('overflow-y-scroll');
        };
        const handleSearchIconClick = () => {
            toggleSearchBarVisTRUE();
            overflowHidden();
        };
        closeIcon.addEventListener('click', handleSearchIconClick);
        return () => {
            closeIcon.removeEventListener('click', handleSearchIconClick);
        }
    }
}