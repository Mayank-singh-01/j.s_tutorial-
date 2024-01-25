function firstone (num1 ,num2 ) {  
    return num1 + num2

}
console.log(firstone (5 ,6))

function calculateprice ( num2 , num3 , ...num1) {  //...num1 three dots is called rest operator
    return [num2 ,num3 ,  num1];                //we have to use bracket to return other value then ...num1****
}
 console.log(calculateprice(100 , 200 , 400, 500 , 600 , 700))

 //**************using object*******************

const user = { 
    name : "mayank sngh" ,
    price : 299
}
function usingobject (anyObject) { 

    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
//console.log(usingobject(user));

console.log(usingobject({  // we can define object inside console to 
    name: "mayank", 
    price: 100
}))

 //**************using object*******************

 const myarray = [10 , 20 , 30 ,40]

 function usingArray (getArray) {

    console.log(`your marks is ${getArray[2]}`)

    return getArray[3]  //using another method
 }

    console.log( usingArray(myarray))
    console.log(usingArray([200, 400, 500, 1000]));