function simulaPromise(sucesso, delay){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(sucesso == true) resolve('ok');
            else reject('erro');
        }, delay);
    });
    promise.then(data => console.log(data));
    promise.catch(data => console.log(data));
}

simulaPromise(true, 2000); // ok
simulaPromise(false, 1000); // not ok

// ordem que aparece no console
// not ok
// ok
