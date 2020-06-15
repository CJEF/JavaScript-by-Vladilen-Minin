// Event loop

// const timeout = setTimeout(() => {
//     console.log('after timeout'); 
// }, 2500)
// clearTimeout(timeout);

// const interval = setInterval(() => {
//     console.log('after timeout'); 
// }, 2500)
// clearTimeout(timeout);
// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('logs after 2 seconds');   
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так, повторите попытку')
        }, wait)
    }) 
    return promise;
}
// delay(2500)
//     .then(() => {
//         console.log('after 2 seconds');
//     })
    // .catch(err => console.error('Error: ', err)) // undefined if you call reject() Error:  Что-то пошло не так, повторите попытку
    // .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]));
// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data); // Data (7) [1, 1, 2, 3, 5, 8, 13]
    } catch (e) {
        console.log(e);
    } finally {
        console.log('finally');
    }
}
asyncExample()