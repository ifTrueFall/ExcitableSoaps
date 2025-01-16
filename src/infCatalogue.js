document.addEventListener('DOMContentLoaded', (event) => {
    ///
    // This file is used to display the products in the catalogue page.
    // It uses an infinite scroll technique to load more products as the user scrolls down the page.
    // The products are displayed in groups of 12.
    ///
    const products = [
        { image: "src/pictures/products/Product1.png", name: "Candy Apple", url: "Product1.html" },
        { image: "src/pictures/products/Product2.png", name: "Sweet Sea Mist", url: "Product2.html" },
        { image: "src/pictures/products/Product3.png", name: "Oatmeal milk and honey", url: "Product3.html" },
        { image: "src/pictures/products/Product4.png", name: "Jet Set Jack Soap", url: "Product4.html" },
        { image: "src/pictures/products/Product5.png", name: "Coconut Lotion Bar", url: "Product5.html" },
        { image: "src/pictures/products/Product6.png", name: "Relax Shower Steamers", url: "Product6.html" },
        { image: "src/pictures/products/Product7.png", name: "Lucky Irish", url: "Product7.html" },
        { image: "src/pictures/products/Product8.png", name: "Blooming Hope", url: "Product8.html" },
        { image: "src/pictures/products/Product9.png", name: "Lavender & Lemon", url: "Product9.html" },
        { image: "src/pictures/products/Product10.png", name: "Barbara Kay Soap", url: "Product10.html" },
        { image: "src/pictures/products/Product11.png", name: "Gum Ball Lotion Bar", url: "Product11.html" },
        { image: "src/pictures/products/Product12.png", name: "Midnight Drive Bar", url: "Product12.html" },
        { image: "src/pictures/products/Product13.png", name: "Spring Flowers Soap", url: "Product13.html" },
        { image: "src/pictures/products/Product14.png", name: "Bubble gum Soap", url: "Product14.html" },
        { image: "src/pictures/products/Product15.png", name: "Breathe Shower Steamers", url: "Product15.html" },
        { image: "src/pictures/products/Product16.png", name: "Baja Desert Soap", url: "Product16.html" },
        { image: "src/pictures/products/Product17.png", name: "Cozy Embrace", url: "Product17.html" },
        { image: "src/pictures/products/Product18.png", name: "Snuggly Clean Soap", url: "Product18.html" },
        { image: "src/pictures/products/Product19.png", name: "Patchouli & Tea Tree Soap", url: "Product19.html" },
        { image: "src/pictures/products/Product20.png", name: "Toasted Cinnamon Soap", url: "Product20.html" },
        { image: "src/pictures/products/Product21.png", name: "Lavender & Lemon Soap", url: "Product21.html" },
        { image: "src/pictures/products/Product22.png", name: "Bedrock Bam Soap", url: "Product22.html" },
        { image: "src/pictures/products/Product23.png", name: "Cocoa Mint Bar Soap", url: "Product23.html" },
        { image: "src/pictures/products/Product24.png", name: "Bat Cave Bar Soap", url: "Product24.html" },
        { image: "src/pictures/products/Product25.png", name: "Relax Shower Steamers", url: "Product25.html" },
        { image: "src/pictures/products/Product26.png", name: "Lavender soap", url: "Product26.html" },
        { image: "src/pictures/products/Product27.png", name: "Gummy Bear Soap", url: "Product27.html" },
        { image: "src/pictures/products/Product28.png", name: "Oatmeal Sugar Scrub", url: "Product28.html" },
        { image: "src/pictures/products/Product29.png", name: "Love At First Sight Sugar Scrub", url: "Product29.html" },
        { image: "src/pictures/products/Product30.png", name: "Love at First Sight soap", url: "Product30.html" },
        { image: "src/pictures/products/Product31.png", name: "Green Apple Soap", url: "Product31.html" },
        { image: "src/pictures/products/Product32.png", name: "Buttery Pumpkin & Apple Bar Soap", url: "Product32.html" },
        { image: "src/pictures/products/Product33.png", name: "Harmony Shower Steamers", url: "Product33.html" },
        { image: "src/pictures/products/Product34.png", name: "Eucalyptus & Peppermint Bar", url: "Product34.html" },
        { image: "src/pictures/products/Product35.png", name: "Cedar, Mahogany, & Teakwood", url: "Product35.html" }
    ];
    ///
    // --- Constants for the catalogue ---
    ///
    const productsPerPage = 16;
    let currentPage = 1;
    let loading = false;
    const productGrid = document.getElementById('product-grid');

    // --- Loading Indicator --- 
    const loadingIndicator = createLoadingIndicator();
    document.getElementById('wrapper').appendChild(loadingIndicator); 

    ///
    // Create the heart loading indicator
    ///
    function createLoadingIndicator() {
        const container = document.createElement('div');
        container.classList.add('center'); // Add the center class
        container.innerHTML = `
    <div class="back"></div>
    <div class="heart"></div>
    `;
        return container;
    }

    ///
    // Animate the heart beat
    ///
    function animateHeartBeat() {
        const heartBeats = document.querySelectorAll('.heart-beat');
        heartBeats.forEach((beat, index) => {
            beat.style.animation = `heartBeat ${1 + index * 0.2}s infinite alternate`;
        });
    }

    ///
    // Show and hide the loading indicator
    ///
    function showLoadingIndicator() {
        loadingIndicator.style.display = 'flex';
        animateHeartBeat();
    }

    ///
    // Hide the loading indicator
    ///
    function hideLoadingIndicator() {
        loadingIndicator.style.display = 'none';
    }


    ///
    // Display products on the page
    ///
    function displayProducts() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToDisplay = products.slice(startIndex, endIndex);

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

        currentPage++;
    }

    ///
    // Load more products when user scrolls to the bottom of the page
    ///
    function loadMoreProducts() {
        if (loading) return;

        showLoadingIndicator();

        loading = true;

        setTimeout(() => {
            displayProducts();
            loading = false;
            hideLoadingIndicator();
        }, 1000);
    }

    // Initial displays
    displayProducts();

    ///
    // Load more products when user scrolls to the bottom of the page
    ///
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreProducts();
        }
    });
});