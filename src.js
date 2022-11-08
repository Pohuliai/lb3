var now = new Date();


if (now.getMinutes > 15){
document.body.style.background = "#ccc";
}
else {
    document.body.style.background = "#bbb";
}
let seconds = prompt('Введіть інтервал в секундах для зміни картинки?', 5);
const imgLinks = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'
];
let i = 1;
setInterval(function () {
    if (i == undefined){
        i = 2;
        document.getElementById('img').src = i + '.jpg'
    }
    document.getElementById('img').src = i + '.jpg';
    i = i + 1;
    if (i >= 11) {
        i = 1;
    }
}, seconds * 1000);

//document.getElementById('style').body.background-color = rgb(0,0, 0);

// var modal = modal({
//     title: 'Текст заголовка',
//     content: '<p>Содержимое модального окна...</p>',
//     footerButtons: [
//       { class: 'btn btn__cancel', text: 'Отмена', handler: 'modalHandlerCancel' },
//       { class: 'btn btn__ok', text: 'ОК', handler: 'modalHandlerOk' }
//     ]
//   });