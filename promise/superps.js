// this is for the practice 

class clgdata {
    constructor(email){
        this.email = email ;
    }
    viewData(){
        console.log(`collage data is here`);
    }
}

class user extends clgdata {
    constructor(email , name , gmail){
        super(email)
        this.name = name,
        this.gmail = gmail;
    }
}

const clg = new clgdata('clg@gmail.com')
console.log(clg);

const user1 = new user('clg@gmail.com','mayank','mks@mail')
console.log(user1);

console.log(user1.viewData());