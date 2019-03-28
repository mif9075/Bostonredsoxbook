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
        const newLi2 = document.createElement('li');
        const newLi3 = document.createElement('p');
        newLi.innerText = 'Position: ' + data[i].position + ", Number: " + data[i].number +  ", Bats: " + data[i].bat + ", Throw: " +data[i].throw;
        newLi2.innerText = 'Name: ' + data[i].name;
        const ul = document.querySelector('#list');
        ul.appendChild(newLi2);
        ul.appendChild(newLi);
        ul.appendChild(newLi3);
        
}
}

function printSearch(i){
    const newLi = document.createElement('li');
    const newLi2 = document.createElement('li');
    const newLi3 = document.createElement('p');
    newLi.innerText = 'Position: ' + data[i].position + ", Number: " + data[i].number +  ", Bats: " + data[i].bat + ", Throw: " +data[i].throw;
    newLi2.innerText = 'Name: ' + data[i].name;
    const ul = document.querySelector('#list');
    ul.appendChild(newLi2);
    ul.appendChild(newLi);
    ul.appendChild(newLi3);
}