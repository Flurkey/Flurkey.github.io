dragElement(document.getElementById("window"));
var isDragging = false;

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById("control-bar")) {
        document.getElementById("control-bar").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        isDragging = true;
        document.body.style.cursor = 'grabbing';

        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        isDragging = false;
        document.body.style.cursor = 'grab';
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.getElementById("control-bar").onmouseover = function () {
    if (!isDragging) {
        document.body.style.cursor = 'grab';
    }
};

document.getElementById("control-bar").onmouseleave = function () {
    if (!isDragging) {
        document.body.style.cursor = 'default';
    }
};
