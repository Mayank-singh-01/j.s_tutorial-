 //******************************switch*********************************
 const month = "fab" ;
 switch (month) {
    case "jan":
        console.log("january");
        break;
    case "fab":
        console.log("fabruary");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log(`value not mached`);
        break;
}

  //*********************chacking array is empty or not *********************

  const newarray = []

  if (newarray.length === 0) { 
        console.log(`array is empty`);
  }

  //*********************chacking object is empty or not *********************

const myObj = {}

if (Object.keys(myObj).length === 0 ) {
    console.log(`object is empty`);
}

  //*********************truthy andfalsy vaue*********************

  // falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}