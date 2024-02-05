const mybutton = document.querySelectorAll(".button");
console.log(mybutton);
const body = document.querySelector("body");

mybutton.forEach( function (myfun) {
    myfun.addEventListener( 'click' , function (e) {
        
          switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'skyblue':
                body.style.backgroundColor = e.target.id
                break;
            case 'pink':
                body.style.backgroundColor = e.target.id
                break;
            case 'gray':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                body.style.backgroundColor = green 
                break;
        }
        console.log(e.target);
    })
} )

