let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);

filter.addEventListener('keyup', filteritem)




function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let newDis = document.getElementById('discription1').value;


    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deletebtn);

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-secondary btn-sm float-right';
    editbtn.idName = "bttn";
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);

    let dis = document.createElement('input');
    dis.className = 'disclass';
    dis.idName = 'dis';
    dis.value = newDis;
    li.appendChild(dis);


    itemlist.appendChild(li);


}




function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement
            itemlist.removeChild(li);
        }
    }
}


function filteritem(e) {
    let text = e.target.value.toLowerCase();
    let items = document.getElementsByTagName('li');

    let clsval = document.getElementsByClassName('disclass')


    Array.from(items).forEach(function (item) {

        let itemsname = item.firstChild.textContent;
        let clsval = item.lastElementChild.value;
        console.log(clsval)

        if (itemsname.toLowerCase().indexOf(text) != -1 || clsval.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        }
        else {

            item.style.display = 'none';
        }

    })



}
