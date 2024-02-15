
//***************************first method to write promise code******************************


const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
      //  console.log("some async work is called");
        resolve()  // resolve() is used to pass the value to then()
    },2000);
})

myPromise.then(function(){
    console.log('async work is commpleted');
});

//***************************another method to write same code******************************

new Promise (function(resolve,reject){
    setTimeout(function(){
     //   console.log('some work is called');
        resolve()
    },2000)
}).then(function(){                      //we can directly jion .then to the promise 
    console.log('work has been done');
});

//*************************third method to write the promise code***************************

const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'mayank', title:'singh'})  //*** data provided inside resolve should be object or array .
    },1000)
})

promisetwo.then(function(user){          // we can access data of resolve directly in the function of then 
    console.log(user);
})