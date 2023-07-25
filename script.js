document.ondragstart = function () {
    return false
};
const img = document.querySelector('.pro__img a img');
const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menubar i');
menuBar.addEventListener("click", function () {
    menu.classList.toggle('show');
    img.style.transform = 'translateY(0%)'
if (menu.classList.contains('show')) {
    menuBar.classList.replace('fa-bars-staggered', 'fa-times');
}else {
    menuBar.classList.replace('fa-times','fa-bars-staggered');
}
});

