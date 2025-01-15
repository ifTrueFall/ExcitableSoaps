///
// This file contains the code for the catalogue page.
// It displays the products in groups of 12.
// The user can navigate between pages using the "Previous" and "Next" buttons.
// Adversely I decided to use infinite scroll technique to load more products as the user scrolls down the page.
///
const products = [
    { image: "src/pictures/products/product1.png", name: "Candy Apple", url: "Product1.html" },
    { image: "src/pictures/products/product2.png", name: "Sweet Sea Mist", url: "Product2.html" },
    { image: "src/pictures/products/product3.png", name: "Oatmeal milk and honey", url: "Product3.html" },
    { image: "src/pictures/products/product4.png", name: "Jet Set Jack Soap", url: "Product4.html" },
    { image: "src/pictures/products/product5.png", name: "Coconut Lotion Bar", url: "Product5.html" },
    { image: "src/pictures/products/product6.png", name: "Relax Shower Steamers", url: "Product6.html" },
    { image: "src/pictures/products/product7.png", name: "Lucky Irish", url: "Product7.html" },
    { image: "src/pictures/products/product8.png", name: "Blooming Hope", url: "Product8.html" },
    { image: "src/pictures/products/product9.png", name: "Lavender & Lemon", url: "Product9.html" },
    { image: "src/pictures/products/product10.png", name: "Barbara Kay Soap", url: "Product10.html" },
    { image: "src/pictures/products/product11.png", name: "Gum Ball Lotion Bar", url: "Product11.html" },
    { image: "src/pictures/products/product12.png", name: "Midnight Drive Bar", url: "Product12.html" },
    { image: "src/pictures/products/product13.png", name: "Spring Flowers Soap", url: "Product13.html" },
    { image: "src/pictures/products/product14.png", name: "Bubble gum Soap", url: "Product14.html" },
    { image: "src/pictures/products/product15.png", name: "Breathe Shower Steamers", url: "Product15.html" },
    { image: "src/pictures/products/product16.png", name: "Baja Desert Soap", url: "Product16.html" },
    { image: "src/pictures/products/product17.png", name: "Cozy Embrace", url: "Product17.html" },
    { image: "src/pictures/products/product18.png", name: "Snuggly Clean Soap", url: "Product18.html" },
    { image: "src/pictures/products/product19.png", name: "Patchouli & Tea Tree Soap", url: "Product19.html" },
    { image: "src/pictures/products/product20.png", name: "Toasted Cinnamon Soap", url: "Product20.html" },
    { image: "src/pictures/products/product21.png", name: "Lavender & Lemon Soap", url: "Product21.html" },
    { image: "src/pictures/products/product22.png", name: "Bedrock Bam Soap", url: "Product22.html" },
    { image: "src/pictures/products/product23.png", name: "Cocoa Mint Bar Soap", url: "Product23.html" },
    { image: "src/pictures/products/product24.png", name: "Bat Cave Bar Soap", url: "Product24.html" },
    { image: "src/pictures/products/product25.png", name: "Relax Shower Steamers", url: "Product25.html" },
    { image: "src/pictures/products/product26.png", name: "Lavender soap", url: "Product26.html" },
    { image: "src/pictures/products/product27.png", name: "Gummy Bear Soap", url: "Product27.html" },
    { image: "src/pictures/products/product28.png", name: "Oatmeal Sugar Scrub", url: "Product28.html" },
    { image: "src/pictures/products/product29.png", name: "Love At First Sight Sugar Scrub", url: "Product29.html" },
    { image: "src/pictures/products/product30.png", name: "Love at First Sight soap", url: "Product30.html" },
    { image: "src/pictures/products/product31.png", name: "Green Apple Soap", url: "Product31.html" },
    { image: "src/pictures/products/product32.png", name: "Buttery Pumpkin & Apple Bar Soap", url: "Product32.html" },
    { image: "src/pictures/products/product33.png", name: "Harmony Shower Steamers", url: "Product33.html" },
    { image: "src/pictures/products/product34.png", name: "Eucalyptus & Peppermint Bar", url: "Product34.html" },
    { image: "src/pictures/products/product35.png", name: "Cedar, Mahogany, & Teakwood", url: "Product35.html" }
];

const productsPerPage = 12; 
let currentPage = 1;
const productGrid = document.getElementById('product-grid');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

///
// Display products on the page
///
function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productGrid.innerHTML = ''; 

    productsToDisplay.forEach(product => {
        const productElement = `
      <div class="product">
        <a href="${product.url}">
          <div class="product-display">
            <img src="${product.image}" alt="${product.name}">
            <p class="pName">${product.name}</p>
          </div>
        </a>
      </div>
    `;
        productGrid.innerHTML += productElement;
    });

    // Update button states
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = endIndex >= products.length;
}

///
// load the previous or next page of products
///
prevButton.addEventListener('click', () => {
    currentPage--;
    displayProducts();
});

///
// load the previous or next page of products
///
nextButton.addEventListener('click', () => {
    currentPage++;
    displayProducts();
});

///
// Initial display
///
displayProducts();