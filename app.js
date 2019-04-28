function emailFunction() {
    var x = document.getElementsByClassName('phone-email');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "323.555.1234";
    }
}
function expandFunction() {
    let highlight = document.querySelector('.contact-scott');
    highlight.classList.toggle('active');
    let element = document.querySelector('.collapsed');
    element.classList.toggle('expanded');
}