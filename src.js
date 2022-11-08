var now = new Date();


if (now.getMinutes() > 10){
document.body.style.background = 'blue';
}
else {
    document.body.style.background = 'red';
}
let seconds = prompt('Введіть інтервал в секундах для зміни картинки?', 5);

let i = 1;
setInterval(function () {
    
    document.getElementById('img').src = i + '.jpg';
    i = i + 1;
    if (i >= 11) {
        i = 1;
    }
}, seconds * 1000);

