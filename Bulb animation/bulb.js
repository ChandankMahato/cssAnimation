var btn = document.querySelector('.btn');
var body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick = function(){
    body.classList.toggle('on');
    audio.play();
}