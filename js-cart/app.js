let carts = document.querySelectorAll('.add-card');
let products = [
    {
        name: "Nike-1",
        price: 100,
        inCart: 0
    },
    {
        name: "Nike-2",
        price: 50,
        inCart: 0
    },
    {
        name: "Nike-3",
        price: 200,
        inCart: 0
    }
]


for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', ()=> {
        cardNumbers();
    })
}

function cardNumbers(){
    let productNumbers = localStorage.getItem('cardNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cardNumbers', productNumbers + 1);
        document.querySelector('#card-header span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cardNumbers', 1);
        document.querySelector('#card-header span').textContent = 1;
    }
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cardNumbers');

    if(productNumbers){
        document.querySelector('#card-header span').textContent = productNumbers;
    }
}

onLoadCartNumbers();