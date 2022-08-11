

//let list = document.getElementsByClassName('list-group-item')

let list = document.getElementsByTagName('li')


for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = 'red';
}
