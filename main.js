

// //let list = document.getElementsByClassName('list-group-item')

// let list = document.getElementsByTagName('li')


// for (let i = 0; i < list.length; i++) {
//     list[i].style.backgroundColor = 'red';
// }

// Query Selector
// let item2 = document.querySelector('.list-group-item:nth-child(2)');
// item2.style.backgroundColor = "green";

// let item3 = document.querySelector('.list-group-item:nth-child(3)');
// item3.style.display = 'none';

// //Query Selector ALL
// let fcolor = document.querySelectorAll('.list-group-item');
// fcolor[1].style.color = "white";

// let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "grey";
// }

//Manipulating the DOM
let itemlist = document.querySelector('#items');
//1 console.log(itemlist.parentElement);
//2 console.log(itemlist.lastElementChild.textContent);
//3 console.log(itemlist.lastChild);
//4 console.log(itemlist.children);
//5 console.log(itemlist.firstElementChild.textContent);
//6 console.log(itemlist.firstChild);
//7 console.log(itemlist.nextSibling);
//8 console.log(itemlist.nextElementSibling.textContent);
//9 console.log(itemlist.previousSibling);
//10 console.log(itemlist.previousElementSibling.textContent)
//11 to
let element = document.createElement('h3');
element.setAttribute('class', '1stElement');
let newh3Text = document.createTextNode("Hello");
element.appendChild(newh3Text);
//14

// Exercise 1:
let container = document.getElementsByClassName('container');
let addbefore = document.getElementById('header-title');
container[0].insertBefore(element, addbefore);

//Exercise 2:
// let element1 = document.createElement('h3');
// element1.setAttribute('class', '1stElement');
// let newh13Text = document.createTextNode("Hello");
// element1.appendChild(newh13Text);

let start = document.getElementById('items')
let item1 = document.getElementsByTagName('li')
start.insertBefore(element, item1[0]);

//Sir we have to create 'createElement' each time to add multiple places because it only show in latest "insertBefore".


