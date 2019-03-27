window.onload = init;

function init(){
    addClick('#search', search);
    addClick('#display-all', displayAll);
}

function search(){
}

function displayAll(){
    
}


//Helper Function
function addClick(selector, func) {
    document.querySelector(selector)
        .addEventListener('click', func);
}