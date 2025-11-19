function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function toggleSearch() {
    const drawer = document.getElementById('searchDrawer');
    const searchInput = document.getElementById('searchInput');

    if (drawer.classList.contains('-translate-y-full')) {
        drawer.classList.remove('-translate-y-full');
        drawer.classList.add('translate-y-0');
        setTimeout(() => searchInput.focus(), 300);
    } else {
        drawer.classList.add('-translate-y-full');
        drawer.classList.remove('translate-y-0');
    }
}

// Close search drawer on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const drawer = document.getElementById('searchDrawer');
        if (!drawer.classList.contains('-translate-y-full')) {
            toggleSearch();
        }
    }
});