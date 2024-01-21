const roll = Symbol("50")

const user = { 
    name: "mayank",
    class :" 10th",
    [roll]: "50",
    subject : ["math","science","english"],
    isactive : false,
}

console.log(user);
//console.log(user["class"])
console.log(user.subject);
console.log(user["subject"][2])

user.name = "mayank kumar "
console.log(user);
 
//***************object-02**************

const usera = { 
    email : "mayank23378@gmail.com",
    fullname: { 
        firstname: "mayank",
        lastname : "singh"
    }
}
console.log(usera.fullname.firstname);
  
const obj = {1:"a", 2 :"b"}
const obj2 = {3:"c", 4 :"d"}
const obj3 = {5:"e", 6 :"f"}

const obj4 = {...obj,...obj2,...obj3}
console.log(obj4);