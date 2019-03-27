window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#display-all', displayAll);
    addClick('#clear-list',clearList)
}

function search(event){
    event.preventDefault();
    let newSearch = document.querySelector('#search-input').value;
    console.log(newSearch);
    
    for (let i=0; i < data.length; i++){
        if  (data[i].bat === newSearch  || data[i].throw === newSearch || data[i].name === newSearch){
            console.log(data[i]);
            clearList();
            const ul = document.querySelector('#list');
            const newLi = document.createElement('li');
            newLi.innerText = data[i].number + ", " + data[i].name + ", " + data[i].bat + ", " +data[i].throw;
            ul.appendChild(newLi);
            // console.log(newLi);
        }
    }
    document.querySelector('#search-input').value = '';
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

    const ul = document.querySelector('#list');

    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}