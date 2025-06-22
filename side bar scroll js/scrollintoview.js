document.querySelectorAll('#sidebar a').forEach(link => {
link.addEventListener('mouseenter', () => {
const targetId = link.getAttribute('data-target');
const target = document.getElementById(targetId);
if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});