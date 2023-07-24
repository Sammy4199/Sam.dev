document.ondragstart = function () {
    return false
};

const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menubar i');
menuBar.addEventListener("click", function () {
    menu.classList.toggle('show')
if (menu.classList.contains('show')) {
    menuBar.classList.replace('fa-bars', 'fa-times');
}else {
    menuBar.classList.replace('fa-times','fa-bars');
}
});