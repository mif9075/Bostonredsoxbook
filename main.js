window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#display-all', displayAll);
}

function search(event){
    event.preventDefault();
    const newSearch = document.querySelector('#search-input').value;
    document.querySelector('#search-input').value = '';
    console.log(newSearch);
}

function displayAll(event){
    event.preventDefault();
}


//Helper Function
function addClick(selector, func){
    document.querySelector(selector)
        .addEventListener('click', func);
}

function clearList(){

}