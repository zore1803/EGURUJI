// Fetch JSON data
fetch('service.json')
    .then(response => response.json())
    .then(data => {
        // Parse URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Find the product with the matching ID
        const product = data.find(item => item.id === parseInt(id));

        // Update product details on the page
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
    });