window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#display-all', displayAll);
    addClick('#clear-list',clearList)
}

function search(event){
    event.preventDefault();
    const newSearch = document.querySelector('#search-input').value;
    document.querySelector('#search-input').value = '';
    console.log(newSearch);
}

function displayAll(event){
    event.preventDefault();
    
    for (let i=0; i < data.length; i++){
    const newLi = document.createElement('li');
    newLi.innerText = data[i];
    const ol = document.querySelector('#list');
    ol.appendChild(newLi);
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