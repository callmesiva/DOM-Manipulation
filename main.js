console.dir(document.title)

document.title = "My-First-Page";

console.dir(document.title)

console.dir(document.all);

//document.all[20].innerHTML = "hiiiii";

var head = document.getElementById("main-header");
head.style.borderBottom = "solid 6px red";




let header = document.getElementById('main');
let h1 = header.childNodes[1];
h1.innerHTML = '<b>ADD ITEMS</b>'
h1.style.color = "green"

