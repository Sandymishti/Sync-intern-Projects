const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPause");
const stopButton = document.getElementById("stop");
const volumeSlider = document.getElementById("volume");

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
});

stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = "Play";
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

audio.addEventListener("ended", () => {
    playPauseButton.textContent = "Play";
});
