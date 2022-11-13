const myPromise = new Promise((resolve, reject) => {
    let condition = 1;
    if(condition===0) {
        resolve("Promise resolved successfully")
    }
    else {
        reject("Promise rejected");
    }
});
myPromise.then(result => console.log(result))
myPromise.catch(result => console.log(result))