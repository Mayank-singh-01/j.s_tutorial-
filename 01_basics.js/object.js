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

