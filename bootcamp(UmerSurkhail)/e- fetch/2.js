const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach(element => {
        console.log(element);
    });
  })
  .catch((error) => console.log(error));    // This will only run if there is an error. Try giving invalid link to force error.