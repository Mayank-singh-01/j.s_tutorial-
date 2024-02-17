
//****************asyncc await*************************

//its a basic structure of async***************


// function apicall (){
//     return Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('weather data update');
//             resolve(200)   //200 means sucess of resolve 
//         },2000);
//     });
// }


// async function asyncfun(){
//     await apicall();   //1st api call  it will resolve 1st after that any work is done 
//     await apicall();   //2nd api call

// }

// using async await****************

function getdata(dataid) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataid);
            resolve('sucess') ;  //200 means sucess of resolve 
        },2000);
    });
}

async function asyncfun(){
    await getdata('mayank');               //1st api call   
    await getdata('singh');               //2nd api call

}
console.log(asyncfun());   // i was in trouble while executing this code coze i didnt use () parenthises on anyncfun .