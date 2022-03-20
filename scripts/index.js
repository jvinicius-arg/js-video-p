// Sistema de leitura de vídeos;

let videoURL;

const videoInput = document.querySelector("#video-input");

if (videoInput) {
    videoInput.addEventListener("change", function () { 
        const reader = new FileReader();
        reader.onload = function () {
            console.log("Video enviado.");
            videoURL = reader.result;
            location = "./video.html?inputed=1";
        }
        reader.readAsDataURL(videoInput.files[0]);
    });
}