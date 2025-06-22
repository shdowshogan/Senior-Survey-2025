document.addEventListener('DOMContentLoaded', function() {
    const sideBar = document.getElementById('sidebar');
    const hotspot = document.querySelector('.sidebar-hotspot');
    if (!sideBar || !hotspot) {
        console.warn('Sidebar or hotspot element not found. Sidebar functionality disabled.');
        return;
    }

    let hideTimeout;

    hotspot.addEventListener('mouseenter', () => {
        console.log('Hotspot mouseenter');
        clearTimeout(hideTimeout);
        sideBar.classList.remove('hidden');
    });

    // hotspot.addEventListener('mouseleave', () => {
    //     console.log('Hotspot mouseenter');
    //     clearTimeout(hideTimeout);
    //     sideBar.classList.add('hidden');
    // });

    sideBar.addEventListener('mouseleave', () => {
        console.log('Sidebar mouseleave');
        hideTimeout = setTimeout(() => {
            sideBar.classList.add('hidden');
        }, 500);
        // sideBar.classList.add('hidden');
    });
    
    sideBar.addEventListener('mouseenter', () => {
        console.log('Sidebar mouseenter');
        hideTimeout = setTimeout(() => {
            sideBar.classList.remove('hidden');
        }, 500);
        // clearTimeout(hideTimeout);
    });

    sideBar.classList.add('hidden');
});