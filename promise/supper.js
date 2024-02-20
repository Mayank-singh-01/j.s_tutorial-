class person {
    constructor(name){
        this.name = name ;
    }
    eat(){
        console.log('eat food');
    }
    sleep(){
        console.log('sleep at night');
    }
}


class eng extends person {
    constructor(name , branch){    // we need to pass previous construcor to.
        super(name);               // it is used to call parent consteuctor
        this.branch = branch ;
    }
    code(){
        console.log('code');
        super.sleep()              // when we inject sleep it will console the feater of sleep 
        
    }
}

 const person2 = new eng('akki','bca');
// console.log(person2.code);

// const person1 = new person('mayank')
// console.log(person1);

console.log(person2.code());

