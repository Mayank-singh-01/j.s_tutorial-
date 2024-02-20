
//*************its all about class and constructor********************* 

class Mayank {
    constructor(gmail){
        this.gmail = gmail;
    }
    start(){
        console.log('start working');
    }
    stop(){
        console.log('stop');
    }
    myemail(email){
        this.email = email;
    }
}

const e1 = new Mayank('mks@gmail'); 
console.log(e1);

const e2 = new Mayank('akki@gmail'); 
console.log(e2);




//we can provide ecess to the multipal user 
// const e1 = new Mayank();
// const e2 = new Mayank();
// const e3 = new Mayank();

// const newuser = e1.myemail('mks@gmail')
// console.log(newuser);
// console.log(e2.start);
// console.log(e1.myemail);
// console.log(e1);
