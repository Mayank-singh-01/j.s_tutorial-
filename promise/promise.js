const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("some async work is called");
        resolve()  // resolve is used to connect this function to then .
    },2000);
})

myPromise.then(function(){
    console.log('async work is commpleted');
})

//***************************another method to write same code******************************

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('some work is called');
        resolve()
    },2000)
}).then(function(){                      //we can directly jion .then to the promise 
    console.log('work has been done');
})