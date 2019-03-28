window.onload = init;

function init(){
    addClick('#search-bat-throw', searchAll);
    addClick('#search-hitter', searchHitter);
    addClick('#search-pitcher', searchPitcher);
    addClick('#display-all', displayAll);
    addClick('#clear-list',clearList)
}

function searchAll(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].bat === newSearch && data[i].throw === newSearch){
            printSearch(i);
        }
        }
    document.querySelector('#search-input').value = '';
}

function searchHitter(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].bat === newSearch && data[i].position !== 'pitcher'){
            printSearch(i);
        }
        }
    document.querySelector('#search-input').value = '';
}

function searchPitcher(event){
    clearList();
    let newSearch = document.querySelector('#search-input').value;
    
    for (let i=0; i < data.length; i++){
        if  (data[i].throw === newSearch && data[i].position === 'pitcher'){
            printSearch(i);
        }
        }
    document.querySelector('#search-input').value = '';
}


function displayAll(event){
    event.preventDefault();
    printDisplay();
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

function printDisplay() {
    for (let i=0; i < data.length; i++){
        const newLi = document.createElement('li');
        newLi.innerText = data[i].position + ", " + data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
        const ul = document.querySelector('#list');
        ul.appendChild(newLi);
}
}

function printSearch(i){
    const newLi = document.createElement('li');
            newLi.innerText = data[i].position + ", " + data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
            const ul = document.querySelector('#list');
            ul.appendChild(newLi);
}