let target = document.getElementById("target");
let score = 0;
let timeLeft = 0;
let gameRunning = false;
let timerInterval;

function startGame() {
    score = 0;
    gameRunning = true;

    timeLeft = parseInt(document.getElementById("timeInput").value);
    let targetScore = parseInt(document.getElementById("scoreInput").value);

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = timeLeft;
    document.getElementById("status").innerText = "";

    moveTarget();

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameRunning = false;

            if (score >= targetScore) {
                document.getElementById("status").innerText = "🎉 YOU WIN BRO 😎";
            } else {
                document.getElementById("status").innerText = "💀 YOU LOST";
            }
        }
    }, 1000);
}

function moveTarget() {
    let x = Math.random() * 560;
    let y = Math.random() * 360;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.onclick = () => {
    if (!gameRunning) return;

    score++;
    document.getElementById("score").innerText = score;
    moveTarget();
};

// target moves every second
setInterval(() => {
    if (gameRunning) moveTarget();
}, 1000);
