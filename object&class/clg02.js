//learning call back data
//let userName = 'mayank';


console.log("user name is : ");
 function profile(userName ,password) {
    
    setTimeout(() => { 
        console.log( userName);  
        password();
    },2000);
}

profile(
    'mayank singh',
    ()=>{
        console.log("your password is : ");
    profile( '12345',()=>{})
});

// this is all about  call back hell learning with the help of sradha didi 
