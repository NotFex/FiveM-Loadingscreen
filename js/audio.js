var audio = document.getElementById("audioPlayer");
audio.volume = 0.1;

var audio = document.querySelector('audio');

if (audio) {
window.addEventListener('keydown', function (event) {
    var key = event.which || event.keyCode;

    if (key === 32) { // spacebar
    // eat the spacebar, so it does not scroll the page
    event.preventDefault();

    audio.paused ? audio.play() : audio.pause();
    }

    if (audio.paused == true) {
        document.getElementById("simg").src = "https://i.ibb.co/93bSxpB/muted.png";
    } else {
        document.getElementById("simg").src = "https://i.ibb.co/NK78mvV/unmuted.png";
    }
});
}


