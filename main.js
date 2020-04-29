let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let sec = 55;
let min = 24;
let start = document.querySelector('.start');
let interval = 0;
let rounds = '';
start.addEventListener('click', startPause);
function startPause() {
    if (start.innerHTML == 'Pause'){
        clearInterval(interval);
        start.innerHTML = 'Start';
    } else {
        start.innerHTML = 'Pause';
        interval = setInterval(function() {
        sec += 1;
        seconds.innerHTML = sec < 10 ? '0' + sec : sec;
        minutes.innerHTML = min < 10 ? '0' + min : min;
        if (sec == 60) {
            seconds.innerHTML = '00';
            min += 1;
            sec = 0;
            minutes.innerHTML = min < 10 ? '0' + min : min;
            if (min == 25) {
                min = 0;
                sec = 0;
                seconds.innerHTML = '00';
                minutes.innerHTML = '0' + min;
                clearInterval(interval);
                littlePause();
            }
        }
    }, 1000)}
};

let stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', stop);
function stop() {
    start.innerHTML = 'Start'
    clearInterval(interval);
    sec = 0;
    min = 0;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
    minutes.innerHTML = min < 10 ? '0' + min : min;
};

let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', restart);
function restart() {
    sec = 0;
    min = 0;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
    minutes.innerHTML = min < 10 ? '0' + min : min;
};

function littlePause () {
    min = 0;
    sec = 10;
    pause = setInterval (function () {
        if (sec == 0) {
            min -= 1;
            sec = 59;
            seconds.innerHTML = sec < 10 ? '0' + sec: sec;
            minutes.innerHTML = '0' + min;
        } else {
            sec -= 1;
            seconds.innerHTML = sec < 10 ? '0' + sec: sec;
            if (min == 0 && sec == 0) {
                clearInterval(pause);
                start.innerHTML = 'Start';
                startPause();
            }
        }
    }, 1000)
}