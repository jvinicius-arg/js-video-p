const video = document.querySelector("#video");
const btnSendVideo = document.querySelector("#btn-1");
const bg = document.querySelector("#bg");
var interval = null;
let seconds = 0;
let progressBar;
let progressTrack;
let progressThumb;
var duration;
let percentMin;

// Atribuições para montagem da barra de progresso;

progressBar = document.querySelector("#progress-bar");
progressTrack = document.querySelector("#progress-bar-track");
progressThumb = document.querySelector("#progress-bar-thumb");

// Preparação do player;

const playG = document.querySelector(".play-center-ico");
const playP = document.querySelector(".play-ico");
const controls = document.querySelector("#controls");

if (!video) {
    console.log("Vídeo não encontrado.");
} else {

    // Eventos para inserção de opacidade no controle;

    video.addEventListener("mouseover", () => controls.style.opacity = "1");
    video.addEventListener("mouseout", () => controls.style.opacity = "0");
    controls.addEventListener("mouseover", () => controls.style.opacity = "1");
    controls.addEventListener("mouseout", () => controls.style.opacity = "0");
    playG.addEventListener("mouseover", () => controls.style.opacity = "1");
    playG.addEventListener("mouseout", () => controls.style.opacity = "0");
    
    // Eventos de fim de vídeo;

    video.addEventListener("ended", () => {
        video.style.filter = "saturate(0.4)";
        playG.setAttribute("src", "./assets/images/buttons/replay.png");
        playP.setAttribute("src", "./assets/images/buttons/replay-p.png");
        bg.style.backgroundColor = "rgba(0, 0, 0, 0)";
        bg.style.backdropFilter = "blur(0)";
        });

    // Exibir timer

    const timeContainer = document.querySelector("#time");
    video.onloadedmetadata = function () {
        let duration = (this.duration / 60).toFixed(2);
        let percentMin;

        duration.slice(-2) <= 9 ? percentMin = duration.slice(-1) : percentMin = duration.slice(-2);
        
        percentMin = "0." + percentMin;
        seconds = (parseFloat(percentMin) * 60).toFixed();
        duration = duration.slice(0, 1) + ":" + seconds;
        
        timeContainer.innerHTML = "0:00 / " + duration;
    } 
}