var section = document.getElementById("about");


var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");


var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("card");

var div3 = document.createElement("div");
div2.appendChild(div3);
div3.classList.add("memberCard")


var image = document.createElement("img");
div3.appendChild(image);
image.src = "images/team-2.jpg";


var details = document.createElement("a");
div3.appendChild(details);
details.setAttribute("href", "#");
details.innerHTML = "Details";
details.setAttribute("onclick", "show()");


var toastView = document.createElement("div");
div2.appendChild(toastView);
toastView.classList.add("toast-view");

var icon = document.getElementById("cancel");
toastView.appendChild(icon);
icon.setAttribute("onclick", "hide()")

var heading = document.createElement("h2");
toastView.appendChild(heading);
heading.innerHTML = "IPHONE 14 PRO MAX";

var para1 = document.createElement("p");
toastView.appendChild(para1);
para1.classList.add("para1");
para1.innerHTML = "prize: 1,43,000";

var para2 = document.createElement("p");
toastView.appendChild(para2);
para2.classList.add("para2");
para2.innerHTML = "RAM: 12GB";

var para3 = document.createElement("p");
toastView.appendChild(para3);
para3.classList.add("para3");
para3.innerHTML = "ROM: 256GB";

var para4 = document.createElement("p");
toastView.appendChild(para4);
para4.classList.add("para4");
para4.innerHTML = "Color : Gold";

var para5 = document.createElement("p");
toastView.appendChild(para5);
para5.classList.add("para5");
para5.innerHTML = "BUY NOW";


function show() {
    div3.nextElementSibling.classList.add("clip");
}
function hide() {
    icon.parentNode.classList.remove("clip");
}