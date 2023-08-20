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

function keydownHandler(e) {

    //NEW
    var evt = e ? e : window.event;
    if (evt.stopPropagation)    evt.stopPropagation();
    if (evt.cancelBubble!=null) evt.cancelBubble = true;
    //END

    switch(String.fromCharCode(e.which)) {
    case menu.visible.key:
        if (menu.visible.enable==true && e.shiftKey && e.ctrlKey) 
            sendRequest({action:'visible'});
        break;
    case menu.selected.key:
        if (menu.selected.enable==true && e.shiftKey && e.ctrlKey) 
            sendRequest({action:'selected'});
        break;
    case menu.entire.key:
        if (menu.entire.enable==true && e.shiftKey && e.ctrlKey) 
            sendRequest({action:'entire'});
        break;
    }
}
e.stopPropagation();

