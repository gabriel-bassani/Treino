function simulaPromise(sucesso){
    promise = new Promise((resolve, reject) =>{
        if(sucesso == true) resolve('ok');
        else reject('erro');
    });
    promise.then(data => console.log(data));
    promise.catch(data => console.log(data));
}

simulaPromise(false);