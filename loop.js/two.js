//************************using map***************** 

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);
for (const [i, mks] of map) {
    // console.log(i, ':-', mks);
}

//************************for in loop***************** 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const mks in myObject) {
   // console.log(`${mks} shortcut is for ${myObject[mks]}`);
}

//***********************using function on array*************************

const mydata = ["mayank","singh","rajput"]

// mydata.forEach ( (data) => { 
//      console.log(data);
// } )

function fundata(data){ 
  console.log(data);
}
mydata.forEach(fundata)


//********************using for-each on array to get object key and value of array  ************** 

const myarray = [ 
    { 
        myname: "mayank singh",
        mygrade: "a"
    },
    { 
        myname: "akki singh",
        mygrade: "b"
    },
    { 
        myname: "mks singh",
        mygrade: "c"
    },
    { 
        myname: "pagal singh",
        mygrade: "d"
    },
    { 
        myname: "unknown singh",
        mygrade: "e"
    },
]

myarray.forEach( (value)=> { 
    console.log(`name is ${value.myname} and grade is ${value.mygrade}`);
} );