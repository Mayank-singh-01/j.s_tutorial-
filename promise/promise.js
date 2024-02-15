const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("my promise file work is done");
        resolve()  // resolve is used to connect this function to then .
    },2000);
})

myPromise.then(function(){
    console.log('then is connected');
})