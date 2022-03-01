const box = document.querySelector('.box');
const uz = document.getElementById('uz');

uz.addEventListener('mouseover', () => {
    box.classList.add('op')
});

uz.addEventListener('mouseout', () => {
    box.classList.remove('op')
});