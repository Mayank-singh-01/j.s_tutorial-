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
    constructor(branch){
        super();  // it is used to call parent consteuctor
        this.branch = branch ;
    }
    code(){
        console.log('code');
    }
}

const person2 = new eng();
console.log(person2);