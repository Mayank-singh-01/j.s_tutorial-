const rendomColor = function () {
    const hex = '123456ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
const start =  document.querySelector('.button01'); 

const end =  document.querySelector('.button02');