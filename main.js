

// //let list = document.getElementsByClassName('list-group-item')

// let list = document.getElementsByTagName('li')


// for (let i = 0; i < list.length; i++) {
//     list[i].style.backgroundColor = 'red';
// }

// Query Selector
let item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor = "green";

let item3 = document.querySelector('.list-group-item:nth-child(3)');
item3.style.display = 'none';

//Query Selector ALL
let fcolor = document.querySelectorAll('.list-group-item');
fcolor[1].style.color = "white";

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "grey";
}