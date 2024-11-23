// Tab Switching
const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab-button.active").classList.remove("active");
        document.querySelector(".tab-content.active").classList.remove("active");

        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});

// Workout Consistency with Calendar
document.getElementById("update-workout").addEventListener("click", () => {
    const days = parseInt(document.getElementById("workout-days").value) || 0;
    document.getElementById("workout-streak").textContent = days;

    const calendarGrid = document.getElementById("calendar-grid");
    calendarGrid.innerHTML = ""; // Clear previous dots

    for (let i = 1; i <= 31; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        if (i <= days) dayDiv.classList.add("workout-day");
        calendarGrid.appendChild(dayDiv);
    }
});

// Water Intake
document.getElementById("update-water").addEventListener("click", () => {
    const gallons = parseFloat(document.getElementById("water-gallons").value) || 0;
    const progress = Math.min((gallons / 1) * 100, 100); // 1 gallon = 100% goal
    document.getElementById("water-progress").textContent = `${Math.round(progress)}%`;
    document.getElementById("water-bar").style.width = `${progress}%`;
});

// Yoga Timer
let yogaInterval;
document.getElementById("start-timer").addEventListener("click", () => {
    let timeLeft = parseInt(document.getElementById("timer-duration").value) * 60;
    const timerDisplay = document.getElementById("timer-display");

    clearInterval(yogaInterval);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Enter a valid number of minutes.");
        return;
    }

    yogaInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(yogaInterval);
            alert("Yoga session complete!");
        }
        timeLeft--;
    }, 1000);
});

document.getElementById("stop-timer").addEventListener("click", () => {
    clearInterval(yogaInterval);
    document.getElementById("timer-display").textContent = "0:00";
});
