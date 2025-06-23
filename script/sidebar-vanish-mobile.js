function handleSidebarVisibility() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    if (window.innerWidth < 960) {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Run on load
handleSidebarVisibility();

// Run on resize
window.addEventListener('resize', handleSidebarVisibility);