const colck = document.querySelector('#clock');

setInterval( function () {
    let time = new Date();
    colck.innerHTML = `${time.toLocaleTimeString()}`
 } , 1000 )
 