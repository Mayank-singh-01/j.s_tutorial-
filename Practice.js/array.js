// using all type of callback on shoping card 

// to find the total price 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//****************************using for_each_loop*************************


let totalprice = 0

shoppingCart.forEach( (myprice) =>totalprice = totalprice + myprice.price )

console.log(` for_each_loop---Total amount you have to pay is  ${totalprice}`);




//****************************using Filter_loop*************************

let newprice = 0 

shoppingCart.filter( (fprice) => newprice += fprice.price  )

console.log(`Filter_loop---Total amount you have to pay is  ${newprice}`);




//****************************using map_loop*************************

let mapprice = 0 

shoppingCart.map( (fprice) => mapprice += fprice.price  )

console.log(` map_loop---Total amount you have to pay is  ${mapprice}`);



//****************************using reduce_loop*************************

const Rtotalprice = shoppingCart.reduce( (val1, val2) => val1+val2.price , 0 )
console.log(` Redce_loop--- total amount you have to pay ${Rtotalprice}`);