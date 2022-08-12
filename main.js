let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);


function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-secondary btn-sm float-right delete';
    editbtn.appendChild(document.createTextNode('E'));
    li.appendChild(editbtn);




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