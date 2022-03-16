let btnSendVideo = document.querySelector("#btn-1");
let playG;
let progressBar;
let progressTrack;
let progressThumb;
var duration;
let seconds = 0;
var interval = null;

progressBar = document.querySelector("#progress-bar");
progressTrack = document.querySelector("#progress-bar-track");
progressThumb = document.querySelector("#progress-bar-thumb");

// Atribuições para montagem da barra de progresso;

playG = document.querySelector(".play-center-ico");

let video = document.querySelector("#video");
let controls = document.querySelector("#controls");

if (!video) {
    console.log("Vídeo não encontrado.")
} else {
    video.addEventListener("mouseover", () => controls.style.opacity = "1");
    video.addEventListener("mouseout", () => controls.style.opacity = "0");
    controls.addEventListener("mouseover", () => controls.style.opacity = "1");
    controls.addEventListener("mouseout", () => controls.style.opacity = "0");
    playG.addEventListener("mouseover", () => controls.style.opacity = "1");
    playG.addEventListener("mouseout", () => controls.style.opacity = "0");

    // Eventos para inserção de opacidade no controle;

    video.addEventListener("ended", () => {
        video.style.filter = "saturate(0.4)";
        playG.setAttribute("src", "./assets/images/buttons/replay.png");
        playP.setAttribute("src", "./assets/images/buttons/replay-p.png");
        });

    // Eventos de fim de vídeo;

    let timeContainer = document.querySelector("#time");
    video.onloadedmetadata = function () {
        let duration = (this.duration / 60).toFixed(2);
        let percentMin;
        let seconds;

        duration.slice(-2) <= 9 ? percentMin = duration.slice(-1) : percentMin = duration.slice(-2);
        
        percentMin = "0." + percentMin;
        seconds = (parseFloat(percentMin) * 60).toFixed();
        duration = duration.slice(0, 1) + ":" + seconds;
        
        timeContainer.innerHTML = "0:00/" + duration;
    } 
    
    // Exibir timer
}