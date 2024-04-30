/**
 * Adds an event listener to the "Add to Cart" button and updates the cart accordingly.
 */
let addToCartButton = document.querySelector('.add-to-cart');
if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        let productName = document.querySelector('.product-name').textContent;
        let quantity = document.querySelector('.product-quantity').value;
        let productImage = this.getAttribute('data-image');
        let productPrice = this.getAttribute('data-price');

        if (cart[productName]) {
            cart[productName].quantity += Number(quantity);
        } else {
            cart[productName] = {
                quantity: Number(quantity),
                image: productImage,
                price: productPrice
            };
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });
}

/**
 * Toggles the visibility of the cart when the "Cart" button is clicked and updates the cart.
 */
document.querySelector('#cart-button').addEventListener('click', function() {
    let cartDiv = document.querySelector('#cart');
    if (cartDiv.style.display === 'none') {
        cartDiv.style.display = 'block';
    } else {
        cartDiv.style.display = 'none';
    }
    updateCart();
});

/**
 * Creates an event listener that subtracts one quantity from the specified product in the cart.
 * @param {string} product - The name of the product.
 * @returns {Function} - The event listener function.
 */
function createSubtractEventListener(product) {
    return function() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[product] -= 1;
        if (cart[product] <= 0) {
            delete cart[product];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };
}

/**
 * Creates an event listener that clears the specified product from the cart.
 * @param {string} product - The name of the product.
 * @returns {Function} - The event listener function.
 */
function createClearEventListener(product) {
    return function() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        // Set the quantity of the specific item to 0
        cart[product] = 0;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };
}

/**
 * Iterates through the cart and creates HTML elements to display each product and its quantity.
 * Adds event listeners to the subtract and delete buttons for each product.
 */
for (let product in cart) {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>${product}: ${cart[product]}</p><button class="subtract-item">Subtract</button><button class="delete-item">Clear</button>`;
    cartDiv.appendChild(itemDiv);

    itemDiv.querySelector('.subtract-item').addEventListener('click', createSubtractEventListener(product));
    itemDiv.querySelector('.delete-item').addEventListener('click', createClearEventListener(product));
    updateCart();
}

/**
 * Updates the cart by retrieving the cart data from localStorage and displaying it in the cart element.
 */
function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartDiv = document.querySelector('#cart');
    cartDiv.innerHTML = '';

    // Delete products with a quantity of 0 from the cart
    for (let product in cart) {
        if (cart[product] === 0) {
            delete cart[product];
        }
    }

    // Update localStorage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display the updated cart
    for (let product in cart) {
        let itemDiv = document.createElement('div');
        itemDiv.style.border = '1px solid black';
        itemDiv.style.padding = '10px';
        itemDiv.style.margin = '10px';
        itemDiv.innerHTML = `
            <img src="${cart[product].image}" alt="${product}" style="width: 50px; height: 50px;">
            <p>${product}: ${cart[product].quantity}</p>
            <p>Price: ${cart[product].price}</p>
            <button class="subtract-item">Subtract</button>
            <button class="delete-item">Clear</button>
        `;
        cartDiv.appendChild(itemDiv);

        itemDiv.querySelector('.subtract-item').addEventListener('click', createSubtractEventListener(product));
        itemDiv.querySelector('.delete-item').addEventListener('click', createClearEventListener(product));
    }
}

/**
 * Updates the entire cart by setting the quantity of each item to 0.
 * Clears the cart in localStorage and updates the cart display.
 */
document.querySelector('#clear-cart').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    // Set the quantity of each item to 0
    for (let product in cart) {
        cart[product] = 0;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

// Initial update of the cart
updateCart();