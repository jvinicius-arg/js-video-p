let btnSendVideo = document.querySelector("#btn-1");
let btnExp = document.querySelector("#btn-2");
let videoContainer = document.querySelector(".btn-container");
let playG;
let progressBar;
let progressTrack;
let progressThumb;

function showVideo () {
    videoContainer.outerHTML = 
    `<section class="video-container">
        <video id="video" src="./assets/videos/experimental.mp4"></video>
        <img class="play-center-ico center-btn" onclick="play()" src="./assets/images/buttons/play.png">

        <div id="controls">
            <div id="progress-bar">
                <div id="progress-bar-track">
                </div>
                <div id="progress-bar-thumb">
                </div>
            </div>
            <img class="play-ico" onclick="play()" src="./assets/images/buttons/play-p.jpg">
            <img class="back-ico" src="./assets/images/buttons/back.jpg">
            <img class="fwd-ico" src="./assets/images/buttons/forward.jpg">
            <img class="audio-ico" onclick="mute()" src="./assets/images/buttons/audio-on.jpg">
            <img class="fscreen-ico" src="./assets/images/buttons/fullscreen.jpg">
        </div>
    </section>`;

    // Atribuição de código HTML à página principal;

    progressBar = document.querySelector("#progress-bar");
    progressTrack = document.querySelector("#progress-bar-track");
    progressThumb = document.querySelector("#progress-bar-thumb");

    // Atribuições para montagem da barra de progresso;

    playG = document.querySelector(".play-center-ico");

    let video = document.querySelector("#video");
    let controls = document.querySelector("#controls");

    video.addEventListener("mouseover", () => controls.style.opacity = "1");
    video.addEventListener("mouseout", () => controls.style.opacity = "0");
    controls.addEventListener("mouseover", () => controls.style.opacity = "1");
    controls.addEventListener("mouseout", () => controls.style.opacity = "0");
    playG.addEventListener("mouseover", () => controls.style.opacity = "1");
    playG.addEventListener("mouseout", () => controls.style.opacity = "0");

    // Eventos para inserção de opacidade no controle;
}

function play () {
    let playP = document.querySelector(".play-ico");

    video.addEventListener("mouseover", () => playG.style.opacity = "0.7");
    video.addEventListener("mouseout", () => playG.style.opacity = "0");
    playG.addEventListener("mouseover", () => playG.style.opacity = "0.7");
    playG.addEventListener("mouseout", () => playG.style.opacity = "0");

    // Sincronização de efeitos de opacidade do botão principal com o controle;

    if (playG.getAttribute("src") == "./assets/images/buttons/play.png") {
        playG.setAttribute("src", "./assets/images/buttons/pause.png");
    } else {
        playG.setAttribute("src", "./assets/images/buttons/play.png")
    }
    
    if (playP.getAttribute("src") == "./assets/images/buttons/play-p.jpg") {
        playP.setAttribute("src", "./assets/images/buttons/pause-p.png");
    } else {
        playP.setAttribute("src", "./assets/images/buttons/play-p.jpg");
    }

    // Troca de estilos;
}

function mute () {
    let audio = document.querySelector(".audio-ico");

    if (audio.getAttribute("src") == "./assets/images/buttons/audio-on.jpg") {
        audio.setAttribute("src", "./assets/images/buttons/muted.jpg");
    } else {
        audio.setAttribute("src", "./assets/images/buttons/audio-on.jpg");
    }

    // Troca de estilos;
}

// btnSendVideo.addEventListener("click", selectFile);
btnExp.addEventListener("click", showVideo);