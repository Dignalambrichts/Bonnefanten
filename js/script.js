var inactivityTime = function () {
    var timer;

    window.onload = timerReset;
    document.onkeypress = timerReset;
    document.onmousemove = timerReset;
    document.onmousedown = timerReset;
    document.ontouchstart = timerReset;
    document.onclick = timerReset;
    document.onscroll = timerReset;
    document.onkeypress = timerReset;

    function timerElapsed() {
        console.log("Timer elapsed");
        window.location.href = 'https://degoedfoutboom.nl/';
    };

    function timerReset() {
        console.log("Reseting timer");
        clearTimeout(timer);
        timer = setTimeout(timerElapsed, 3 * 60 * 1000); // 3 mins
    }
};

inactivityTime();
