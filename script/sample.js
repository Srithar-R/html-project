var id = null;
var elem = document.getElementById("animate");   
var pos = 0;
var updown = true;
clearInterval(id);
id = setInterval(frame, 50);
function frame() {
	if(updown) {
		if (pos == 500) {
			clearInterval(id);
			updown = false;
			id = setInterval(frame, 50);
		} else {
			pos = pos + 10; 
			elem.style.top = pos + 'px'; 
			elem.style.left = pos + 'px'; 
		}
	} else {
		if (pos == 0) {
			clearInterval(id);
			updown = true;
			id = setInterval(frame, 50);
		} else {
			pos = pos - 10;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px'; 
		}
	}
 }