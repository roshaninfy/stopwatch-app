let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

//function to stop stopwatch timer
function start() {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
        
}
//function to stop stopwatch timer
function Stop() {
    clearInterval(timer);
    isRunning = false;
}
//function to reset stopwatch time to zero
function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    //updateDisplay();
    const display = document.getElementById('display');
    display.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }

// function to update time display

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}