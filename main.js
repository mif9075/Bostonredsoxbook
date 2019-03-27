window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#display-all', displayAll);
    addClick('#clear-list',clearList)
}

function search(event){
    event.preventDefault();
    let newSearch = document.querySelector('#search-input').value;
    document.querySelector('#search-input').value = '';
    console.log(newSearch);

    // for (let i=0; i < data.length; i++){
    let i=0;
    if  (data[i].number = newSearch){
        clearList();
        const newLi = document.createElement('li');
        newLi.innerText = data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
        const ul = document.querySelector('#list');
        ul.appendChild(newLi);
        console.log(newLi);
    }
}

function displayAll(event){
    event.preventDefault();
    
    for (let i=0; i < data.length; i++){
    const newLi = document.createElement('li');
    newLi.innerText = data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
    const ul = document.querySelector('#list');
    ul.appendChild(newLi);
}
}


//Helper Function
function addClick(selector, func){
    document.querySelector(selector)
        .addEventListener('click', func);
}

function clearList(){
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {

    const ol = document.querySelector('#list');

    while(ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }
}