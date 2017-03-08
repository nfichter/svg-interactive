var savage = document.getElementById("bruh");
var kleer = document.getElementById("cya");
var moo = document.getElementById("cow");

var create_circle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", mouseX);
    c.setAttribute("cy", mouseY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "black");
    c.setAttribute("stroke", "green");

    return c;
};

var change_color = function(e) {
    e.setAttribute("fill","blue");
    event.stopPropagation();
}

var draw_circle = function(e) {
    c = create_circle(e);
    c.addEventListener('click',change_color(this),true);
    savage.appendChild(c);
};

var clear = function() {
    while (savage.lastChild) {
	savage.removeChild(savage.lastChild);
    }
};

savage.addEventListener('click', draw_circle);
kleer.addEventListener('click', clear);
