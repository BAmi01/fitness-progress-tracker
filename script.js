// Yoga Flow
const yogaPoses = [
    "Downward Dog",
    "Child's Pose",
    "Warrior I",
    "Warrior II",
    "Tree Pose",
    "Bridge Pose",
    "Triangle Pose",
    "Seated Forward Bend",
    "Cat-Cow Pose",
    "Cobra Pose",
];

let currentPoseIndex = 0;
let countdown;

// Begin Yoga Flow
document.getElementById("begin-flow").addEventListener("click", () => {
    currentPoseIndex = 0;
    displayPose();
    beginCountdown(60);
    document.getElementById("begin-flow").style.display = "none";

    // Automatically change poses every minute (60,000 ms)
    yogaInterval = setInterval(() => {
        currentPoseIndex++;
        if (currentPoseIndex < yogaPoses.length) {
            displayPose();
            beginCountdown(60); // Reset countdown for the next pose
        } else {
            clearInterval(yogaInterval);
            clearInterval(countdown);
            document.getElementById("yoga-pose").textContent = "Great job! Flow complete!";
            document.getElementById("pose-timer").textContent = "";
            document.getElementById("begin-flow").style.display = "inline-block";
        }
    }, 60000);
});

// Display Current Pose
function displayPose() {
    document.getElementById("yoga-pose").textContent = `Pose: ${yogaPoses[currentPoseIndex]}`;
}

// Begin Countdown Timer
function beginCountdown(seconds) {
    let timeLeft = seconds;
    document.getElementById("pose-timer").textContent = `Next pose in: ${timeLeft} seconds`;

    // Clear any previous countdowns to avoid overlaps
    clearInterval(countdown);

    countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            document.getElementById("pose-timer").textContent = `Next pose in: ${timeLeft} seconds`;
        } else {
            clearInterval(countdown); // End countdown at 0
        }
    }, 1000); // Update every second
}

// Tab Switching Functionality
const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove "active" class from all tabs and contents
        document.querySelector(".tab-button.active").classList.remove("active");
        document.querySelector(".tab-content.active").classList.remove("active");

        // Add "active" class to the clicked tab and corresponding content
        tab.classList.add("active");
        const targetTab = tab.getAttribute("data-tab");
        document.getElementById(targetTab).classList.add("active");
    });
});

// Workout Consistency: Update Workout Streak
document.getElementById("update-workout").addEventListener("click", () => {
    const days = parseInt(document.getElementById("workout-days").value) || 0;
    document.getElementById("workout-streak").textContent = days;
    alert(`Workout streak updated to ${days} days!`);
});

// Water Intake: Update Water Progress
document.getElementById("update-water").addEventListener("click", () => {
    const cups = parseInt(document.getElementById("water-cups").value) || 0;
    const progress = Math.min((cups / 8) * 100, 100); // Daily goal: 8 cups
    document.getElementById("water-progress").textContent = `${Math.round(progress)}%`;
    document.getElementById("water-bar").style.width = `${progress}%`;
    alert(`Water intake updated: ${cups} cups (${Math.round(progress)}% progress).`);
});

// Step Count: Update Step Total
document.getElementById("update-steps").addEventListener("click", () => {
    const steps = parseInt(document.getElementById("step-count").value) || 0;
    document.getElementById("step-total").textContent = steps;
    alert(`Step count updated to ${steps}!`);
});

// Active Minutes: Update Active Total
document.getElementById("update-active").addEventListener("click", () => {
    const minutes = parseInt(document.getElementById("active-minutes").value) || 0;
    document.getElementById("active-total").textContent = minutes;
    alert(`Active minutes updated to ${minutes}!`);
});

// Yoga Timer: Countdown Timer Feature
let yogaInterval;
document.getElementById("start-timer").addEventListener("click", () => {
    let timeLeft = parseInt(document.getElementById("timer-duration").value) * 60; // Convert minutes to seconds
    const timerDisplay = document.getElementById("timer-display");

    // Clear existing timer if any
    clearInterval(yogaInterval);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    yogaInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(yogaInterval);
            alert("Yoga session complete! Namaste 🧘");
        }
        timeLeft--;
    }, 1000);
});

document.getElementById("stop-timer").addEventListener("click", () => {
    clearInterval(yogaInterval);
    document.getElementById("timer-display").textContent = "0:00";
    alert("Timer stopped.");
});
