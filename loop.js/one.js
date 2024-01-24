for (let i = 1; i < 10 ; i++) {
    const element = i;

    if (element == 5) {
      //  console.log("5 is best number");
    }

    // for (let j = 0; j < 5; j++) {
    //     const element =j ;
    //     console.log(element);
    //    // console.log(`5 is the best number`);  
    // }
   // console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
   // console.log(`it's a table of : ${i}`);
   for (let j = 1; j <= 10; j++) {
   // console.log(`Inner loop value ${j} and outer loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );

  // console.log(` ${i} * ${j} = ${i * j}`);
   }
    
}

//*****************************array using loop*******************
const myarray = ["mayank","akki","chhotu","shashi",]

for (let index = 0; index < myarray.length; index++) {

    const element = myarray[index];
   // console.log(element);
    
}

//*****************************brake*********************** 

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (i == 5) {
       // console.log("5 detected");
        break
    }
   // console.log(i);
}


//*****************************continue *********************** 

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (i == 5) {
      //  console.log("5 detected");
        continue
    }
  //  console.log(i);
}

//*****************************for of loop *********************** 
let name = 'mayank singh'

for (const i of name) {
    if (i == " ") {
        continue
    }
    console.log(`later of name is ${i}`);
    
}