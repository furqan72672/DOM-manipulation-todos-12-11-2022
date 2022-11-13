async function fetchProducts() {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    const data = await response.json();
    console.log(data);
}
fetchProducts();