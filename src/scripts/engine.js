const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = [];
let audio = new Audio("src/audio/a.wav");


const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`
    audio.play();

    const clickkedKey = document.querySelector(`[data-key="${key}"]`)
    clickkedKey.classList.add('active');

    setTimeout(() => {
        clickkedKey.classList.remove('active')
    }, 150);
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handvolume = (e) => {
    audio.volume = e.target.value

}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handvolume)

keysCheck.addEventListener("click", showHideKeys)