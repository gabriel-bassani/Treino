function doSomething(callback) {
    console.log('i did something');
    callback();
  }
  
  doSomething(function(){
    console.log('i did something AFTER!');
  })
  