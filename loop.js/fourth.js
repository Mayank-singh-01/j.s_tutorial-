//using multi map on array

const num = [1,2,3,4,5,6,7,8,9,10]

const newNum = num
    .map( (data) => data * 5 )
    .map( (data) => data - 1 )
    .filter( (data)=> data > 30 )

console.log(newNum);

//*******************using reduce******************

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

 const total = shoppingCart.reduce( (item , item2 ) => item + item2.price ,0 )
 console.log(total);