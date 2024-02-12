const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
        
    }
    return color;
 };
// let entervalId;
// const startChangingColor = function(){
// entervalId = setInterval(changeBgColor,1000);


// function changeBgColor(){ 
//     document.body.style.backgroundColor = randomColor();
// }

// };

// document.querySelector('#button01').addEventListener('click', startChangingColor);

// insted of providing function name directly injecting function .

//i get stuck when it come to provide preference to the stop function , its gonna my first project that i solve from another method myself . 

let set;

document.querySelector('#button01').addEventListener('click',function (){ 
   function color()  {
     document.body.style.backgroundColor = randomColor();
   }
   set = setInterval(color , 1000)
});

document.querySelector('#button02').addEventListener('click', function (){ 
     clearInterval(set);
})

