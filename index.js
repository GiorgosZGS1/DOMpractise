const foods = {Apple: 4, Orange: 3, Egg: 2};

function addToSum() {
    let total = 0;
    
}

function createCart(obj) {
    const keys = Object.keys(foods);
    keys.forEach(function(food) {
        const element = document.createElement('div');
        element.innerText = food + ' ' + foods[food] + '$';

        const cart = document.getElementById('cart');
        cart.appendChild(element);
        const addButton = document.createElement('button')
        addButton.innerText = 'Add';
        addButton.style = 'margin-left: 12px';
        addButton.onclick = addToSum;
        element.appendChild(addButton);
    })

}

createCart(foods);