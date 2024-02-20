

//************learning inheritence************************

//it connect two object 

class person {
    eat(){
        console.log('eat food');
    }
    sleep(){
        console.log('sleep at night');
    }
}
const person1 = new person();
person1.eat();


// eng 

class eng extends person {
    code(){
        console.log('code');
    }
}
const person2 = new eng();
person2.eat();
person2.code();



//teacher 

class teacher extends person {
    teach(){
        console.log('teach to student ');
    }
}
const person3 = new teacher();
person3.eat();
person3.teach();
