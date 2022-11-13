const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
// const fetchPromise3 = fetch('bad-scheme://invalidURL.com');     // Bad link, should return an error

Promise.all([fetchPromise1, fetchPromise2])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.log(`Failed to fetch: ${error}`)
  });