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
let yogaInterval;
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