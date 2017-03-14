var savage = document.getElementById("bruh");
var kleer = document.getElementById("cya");
var moo = document.getElementById("cow");

var change_color = function() {
    if (this.getAttribute("fill") == "black"){
	this.setAttribute("fill", "blue");
    }
    else if (this.getAttribute("fill") == "blue") {
	savage.removeChild(this);
	var c_new = create_circle();
	x = Math.random() * 800;
	y = Math.random() * 500;
	c_new.setAttribute( "cx", x );
	c_new.setAttribute( "cy", y );
	savage.appendChild(c_new);
    }
    event.stopPropagation();
};

var create_circle = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("dx", 2);
    c.setAttribute("dy", 3);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "black");
    c.setAttribute("stroke", "green");

    c.addEventListener('click',change_color);
    
    return c;
};

var draw_circle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    var c = create_circle(e);

    c.setAttribute("cx", mouseX);
    c.setAttribute("cy", mouseY);
    
    savage.appendChild(c);
};

var clear = function() {
    while (savage.lastChild) {
	savage.removeChild(savage.lastChild);
    }
};

var intervalID = 0;
var move = function() {
    window.clearInterval(intervalID);
    var invis_line_y = Math.random() * 300 + 100;
    var go = function() {
	var children = savage.children;
	var dy, dx, r, x, y, newC;
	for (var i = 0; i < children.length; i++){
	    r = parseInt(children[i].getAttribute('r'));
	    if (r <= 2) {
		savage.removeChild(children[i]);
		break;
	    }
	    dy = parseInt(children[i].getAttribute('dy'));
	    dx = parseInt(children[i].getAttribute('dx'));
	    x = parseInt(children[i].getAttribute('cx'));
	    y = parseInt(children[i].getAttribute('cy'));
	    
	    if (x <= r && dx < 0) {
		dx *= -1;
	    }
	    else if (x >= 800-r && dx > 0) {
		dx *= -1;
	    }
	    else if (y <= r && dy < 0) {
		dy *= -1;
	    }
	    else if (y >= 500-r && dy > 0) {
		dy *= -1;
	    }

	    y += dy;
	    x += dx;
	    
	    children[i].setAttribute("cy", y);
	    children[i].setAttribute("cx", x);
	    children[i].setAttribute("dy", dy);
	    children[i].setAttribute("dx", dx);
	    
	    if ((dy > 0 && y > invis_line_y - (dy / 2) && y < invis_line_y + (dy / 2)) ||
		(dy < 0 && y < invis_line_y - (dy / 2) && y > invis_line_y + (dy / 2))) {
		r_new = r / 2.0
		children[i].setAttribute("r", r_new);

		c_new = create_circle();
		c_new.setAttribute("cx", x);
		c_new.setAttribute("cy", y);
		c_new.setAttribute("dy", -1*dy);
		c_new.setAttribute("r", r_new);
		savage.appendChild(c_new);
	    }
		
	}
    };
    intervalID = window.setInterval(go, 10);
};

moo.addEventListener('click', move);
savage.addEventListener('click', draw_circle);
kleer.addEventListener('click', clear);
