var BackgroundDetails = document.querySelector(".soapBall1").style.background;
var BackgroundDetails = document.querySelector(".soapBall2").style.background;
var BackgroundDetails = document.querySelector(".soapBall3").style.background;
var BackgroundDetails = document.querySelector(".soapBall4").style.background;
var audio = new Audio("bubbleBrustSound.wav");

function brustBubble1(){
    document.querySelector(".soapBall1").style.border = "2px dashed #81e8f6";
    document.querySelector(".soapBall1").style.background="none";
    setInterval(() => {
        document.querySelector(".soapBall1").style.border = "none";
    }, 100);
    audio.play();
    setInterval(() => {
        document.querySelector(".soapBall1").style.background=BackgroundDetails;
    }, 5000);
    
}
function brustBubble2(){
    document.querySelector(".soapBall2").style.border = "2px dashed #81e8f6";
    document.querySelector(".soapBall2").style.background="none";
    setInterval(() => {
        document.querySelector(".soapBall2").style.border = "none";
    }, 100);
    audio.play();
    setInterval(() => {
        document.querySelector(".soapBall2").style.background=BackgroundDetails;
    }, 5000);
}
function brustBubble3(){
    document.querySelector(".soapBall3").style.border = "2px dashed #81e8f6";
    document.querySelector(".soapBall3").style.background="none";
    setInterval(() => {
        document.querySelector(".soapBall3").style.border = "none";
    }, 100);
    audio.play();
    setInterval(() => {
        document.querySelector(".soapBall3").style.background=BackgroundDetails;
    }, 5000);
}
function brustBubble4(){
    document.querySelector(".soapBall4").style.border = "2px dashed #81e8f6";
    document.querySelector(".soapBall4").style.background="none";
    setInterval(() => {
        document.querySelector(".soapBall4").style.border = "none";
    }, 100);
    audio.play();
    setInterval(() => {
        document.querySelector(".soapBall4").style.background=BackgroundDetails;
    }, 5000);
}