var BackgroundDetails = document.querySelector(".soapBall").style.background;

function brustBubble(){
    document.querySelector(".soapBall").style.border = "2px dashed rgb(0, 183, 255)";
    document.querySelector(".soapBall").style.background="none";
    setInterval(() => {
        document.querySelector(".soapBall").style.border = "none";
    }, 100);
    setInterval(() => {
        document.querySelector(".soapBall").style.background=BackgroundDetails;
    }, 5000);
}