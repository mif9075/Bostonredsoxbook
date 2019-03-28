window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#search2', search2);
    addClick('#search3', search3);
    addClick('#display-all', displayAll);
    addClick('#clear-list',clearList)
}

function search(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].bat === newSearch && data[i].throw === newSearch){
            printSearch2(i);
        }
        }
    document.querySelector('#search-input').value = '';
}

function search2(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].bat === newSearch && data[i].position !== 'pitcher'){
            printSearch2(i);
        }
        }
    document.querySelector('#search-input').value = '';
}

function search3(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].throw === newSearch && data[i].position === 'pitcher'){
            printSearch2(i);
        }
        }
    document.querySelector('#search-input').value = '';
}


function displayAll(event){
    event.preventDefault();
    printSearch();
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

    const ul = document.querySelector('#list');

    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

function printSearch() {
    for (let i=0; i < data.length; i++){
        const newLi = document.createElement('li');
        newLi.innerText = data[i].position + ", " + data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
        const ul = document.querySelector('#list');
        ul.appendChild(newLi);
}
}

function printSearch2(i){
    const newLi = document.createElement('li');
            newLi.innerText = data[i].position + ", " + data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
            const ul = document.querySelector('#list');
            ul.appendChild(newLi);
}