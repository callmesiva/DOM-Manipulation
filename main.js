

let item = document.getElementsByClassName("list-group-item");
item[2].style.backgroundColor = "green";

for (let i = 0; i < item.length; i++) {
    item[i].style.fontWeight = 'bold';
}