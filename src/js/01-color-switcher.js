const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartClick() {
    timerId = setInterval(
        () => (document.body.style.backgroundColor = getRandomHexColor()),
        1000
    );

    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', false);
}

function onStopClick() {
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled', false);

    clearInterval(timerId);
}
