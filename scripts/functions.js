function play () {
    bg.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    bg.style.backdropFilter = "blur(5px)";
    let playP = document.querySelector(".play-ico");

    video.style.filter = "saturate(1)";
    video.addEventListener("click", play);
    video.addEventListener("mouseover", () => playG.style.opacity = "0.7");
    video.addEventListener("mouseout", () => playG.style.opacity = "0");
    playG.addEventListener("mouseover", () => playG.style.opacity = "0.7");
    playG.addEventListener("mouseout", () => playG.style.opacity = "0");

    // Sincronização de efeitos de opacidade do botão principal com o controle;

    let pgSrc = "./assets/images/buttons/play.png";
    let pgReplaySrc = "./assets/images/buttons/replay.png";
    let ppSrc = "./assets/images/buttons/play-p.jpg";
    let ppReplaySrc = "./assets/images/buttons/replay-p.png";
    
    if (playG.getAttribute("src") == pgSrc || playG.getAttribute("src") == pgReplaySrc) {
        video.play();
        timer();
        progress();
        playG.setAttribute("src", "./assets/images/buttons/pause.png");
    } else {
        video.pause();
        stop(interval);
        bg.style.backgroundColor = "rgba(0, 0, 0, 0)";
        bg.style.backdropFilter = "blur(0)";
        playG.setAttribute("src", "./assets/images/buttons/play.png")
    }
    
    if (playP.getAttribute("src") == ppSrc || playP.getAttribute("src") == ppReplaySrc) {
        playP.setAttribute("src", "./assets/images/buttons/pause-p.png");
    } else {
        playP.setAttribute("src", "./assets/images/buttons/play-p.jpg");
    }
    // Play do #controls;

    // Funcionalidades de play, pause e troca de estilos quando pressionados;
}

function timer () {
    interval = setInterval(function () {
        let timeContainer = document.querySelector("#time");
        let duration = (video.duration / 60).toFixed(2);
        duration.slice(-2) <= 9 ? percentMin = duration.slice(-1) : percentMin = duration.slice(-2);
        
        percentMin = "0." + percentMin;
        seconds = (parseFloat(percentMin) * 60).toFixed();
        duration = duration.slice(0, 1) + ":" + seconds;

        // Exibição da duração total;

        let min = Math.floor(video.currentTime / 60);
        let sec = (video.currentTime).toFixed();

        var parseSec = min * 60;

        if (sec <= 9) {
            sec = "0" + sec;
        } else if (sec >= 60) {
            sec -= parseSec;
            if (sec <= 9) {
                sec = "0" + sec;
            }
        }
        
        timeContainer.innerHTML = min + ":" + sec + " / " + duration;

        if (video.ended == true) {
            timeContainer.innerHTML = duration + " / " + duration;
        }
    },500);

    return interval;
}

function progress () {
    interval = setInterval(function () {
    let percent = (video.currentTime / video.duration) * 100;
    progressTrack.style.width = percent + "%";

    // progressThumb.style.left = percent + "%";

    // if (progressThumb.style.left > "98.5%") {
    //     progressThumb.style.left = "98.5%";
    //     stop(interval);
    // }

    // Cursor da barra de progresso;

    if (progressTrack.style.width > "99%") {
        progressTrack.style.width = "100%";
        stop(interval);
    }
    },100);
}

function stop (e) {
    clearInterval(e);
}

function mute () {
    let audio = document.querySelector(".audio-ico");

    if (audio.getAttribute("src") == "./assets/images/buttons/audio-on.jpg") {
        video.muted = true;
        audio.setAttribute("src", "./assets/images/buttons/muted.jpg");
    } else {
        video.muted = false;
        audio.setAttribute("src", "./assets/images/buttons/audio-on.jpg");
    }

    // Troca de estilos;
}

function back () {
    let back = document.querySelector(".back-ico");

    video.currentTime -= 10;
    back.style.opacity = 0.5;
    setTimeout(() => back.style.opacity = 1, 100);

    // Volta 10s;
}

function forward () {
    let forward = document.querySelector(".fwd-ico");

    video.currentTime += 10;
    forward.style.opacity = 0.5
    setTimeout(() => forward.style.opacity = 1, 100);

    // Avança 10s;
}

function fullScreen () {
    video.requestFullscreen();
}

function readVideo () {
    const videoInput = document.querySelector("#video-input");

    videoInput.addEventListener("change", () => { 
        const reader = new FileReader();
        reader.readAsDataURL(videoInput.files[0]);

        // function AttVideo () {
        //     video.src = reader.result;
        //     console.log(videoInput.files);
        // }
    });
    
    // Sistema de leitura de vídeos;
}

function AttVideo () {
    video.src = reader.result;
    console.log(videoInput.files);
}

function inputInsert () {
    location.href = "./video.html";
    hasVideo = true;
}