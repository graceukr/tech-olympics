let timer = null;
let clockTimer = null;
let timeRemaining = 0;
let isTimerRunning = false;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startBtn").addEventListener("click", startTimer);
    document.getElementById("resetBtn").addEventListener("click", resetTimer);
    
    showClock();
});

function startTimer() {
    if (isTimerRunning) return;
    
    const minutes = parseInt(document.getElementById("minutesInput").value);
    if (!minutes || isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes");
        return;
    }
    
    clearAllTimers();
    
    timeRemaining = minutes * 60;
    isTimerRunning = true;
    document.getElementById("status").textContent = "Mode: Timer";
    
    updateTimerDisplay();
    
    timer = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearAllTimers();
            isTimerRunning = false;
            showClock();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    
    const formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    
    document.getElementById("display").textContent = formattedTime;
}

function showClock() {
    clearAllTimers();
    
    document.getElementById("status").textContent = "Mode: Clock";
    
    updateClockDisplay();
    
    clockTimer = setInterval(updateClockDisplay, 1000);
}

function updateClockDisplay() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    
    document.getElementById("display").textContent = formattedTime;
}

function resetTimer() {
    clearAllTimers();
    isTimerRunning = false;
    document.getElementById("minutesInput").value = "";
    
    showClock();
}

function clearAllTimers() {
    if (timer) clearInterval(timer);
    if (clockTimer) clearInterval(clockTimer);
    
    timer = null;
    clockTimer = null;
}