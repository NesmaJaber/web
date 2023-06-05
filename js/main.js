
$(function () {
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    
      
});

function changeBg(){
    let nav = document.getElementById("navbar")
    let scrollValue = window.scrollY;
    if(scrollValue < 50){
        navbar.classList.remove("bgColor")

    }else{
        navbar.classList.add("bgColor")

    }
}
window.addEventListener('scroll' , changeBg);



function sleep (ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}
const phrases = [" العام" , "الخاص" , "التطوعي الغير ربحي" ];
const el = document.getElementById("type")
let sleepTime = 100;
let curPhrasesIndex = 0;
const writeloop = async() =>{
    while(true){
        let curword = phrases[curPhrasesIndex];
        for(let i = 0; i<=curword.length;i++){
            el.innerHTML = curword.substring(0,i+1);
            await sleep(sleepTime);

        }
        await sleep(sleepTime * 10);
        for(let i = curword.length; i>0 ; i--){
            el.innerHTML = curword.substring(0,i-1);
            await sleep(sleepTime);

        }
        await sleep(sleepTime * 5);
        if(curPhrasesIndex === phrases.length - 1){
            curPhrasesIndex = 0;
        }else{
            curPhrasesIndex++;
        }

    }
}
writeloop();



let visionn = document.getElementById("vision");
let messagee = document.getElementById("message");
let falsafaa = document.getElementById("falsafa");

let txVision = document.getElementById("tx-vision");
let txMessage = document.getElementById("tx-message");
let txFalsafa = document.getElementById("tx-falsafa");

function vision(){
    txVision.style.visibility = "visible"
    txMessage.style.visibility = "hidden"
    txFalsafa.style.visibility = "hidden"
    visionn.style.cssText = "background-color:#c32231; color:#fff ; border-radius: 10px;"
    messagee.style.cssText = "background-color:transparent; color:#000"
    falsafaa.style.cssText = "background-color:transparent; color:#000"
}
function messag(){
    txVision.style.visibility = "hidden"
    txMessage.style.visibility = "visible"
    txFalsafa.style.visibility = "hidden"
    visionn.style.cssText ="background-color:transparent; color:#000"
    messagee.style.cssText = "background-color:#c32231; color:#fff ; border-radius: 10px;"
    falsafaa.style.cssText = "background-color:transparent; color:#000"
}
function fals(){
    txVision.style.visibility = "hidden"
    txMessage.style.visibility = "hidden"
    txFalsafa.style.visibility = "visible"
    visionn.style.cssText ="background-color:transparent; color:#000"
    messagee.style.cssText = "background-color:transparent; color:#000"
    falsafaa.style.cssText =  "background-color:#c32231; color:#fff; border-radius: 10px;"
}

