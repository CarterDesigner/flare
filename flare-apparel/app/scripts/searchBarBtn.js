export function SearchBarScript() {
    const searchIcon = document.querySelector('.navigation-container .search-icon');
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
            searchIcon.addEventListener('click', handleSearchIconClick);
            return () => {
                searchIcon.removeEventListener('click', handleSearchIconClick);
            }
        }
}