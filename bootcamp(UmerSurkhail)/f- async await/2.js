function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    return new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))
}

async function main() {
    console.log('main');
    await f3();
    f2();
}

main();

