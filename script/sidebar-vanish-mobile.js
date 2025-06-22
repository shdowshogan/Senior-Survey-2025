const sideBar = document.getElementById('sidebar');
window.addEventListener('onload', function() {
    if (window.innerWidth < 960) {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block';
    }
});