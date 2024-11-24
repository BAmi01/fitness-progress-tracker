// Tabs Functionality
function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Default Tab
document.getElementsByClassName("tab-btn")[0].click();

// Workout Consistency
function addWorkout() {
    const workoutDate = document.getElementById("workout-date").value;
    const calendarOutput = document.getElementById("calendar-output");

    if (workoutDate) {
        const dot = `<span>•</span>`;
        calendarOutput.innerHTML += `<p>${workoutDate} ${dot}</p>`;
    }
}

// Daily Water Intake
function updateWater() {
    const waterInput = document.getElementById("water-input").value;
    const waterProgressBar = document.getElementById("water-progress-bar");
    const waterOutput = document.getElementById("water-output");

    const maxWater = 1; // Target in gallons
    const progress = Math.min((waterInput / maxWater) * 100, 100);
    waterProgressBar.style.width = `${progress}%`;
    waterOutput.textContent = `Progress: ${Math.round(progress)}%`;
}

// Yoga Slideshow
const yogaPoses = [
    { name: "Mountain Pose", image: "pose1.jpg" },
    { name: "Downward Dog", image: "pose2.jpg" },
    { name: "Warrior Pose", image: "pose3.jpg" },
    { name: "Tree Pose", image: "pose4.jpg" },
    { name: "Bridge Pose", image: "pose5.jpg" },
];

let currentPoseIndex = 0;

function showNextPose() {
    const yogaPoseImage = document.getElementById("yoga-pose-image");
    const yogaPoseName = document.getElementById("yoga-pose-name");

    const pose = yogaPoses[currentPoseIndex];
    yogaPoseImage.src = pose.image;
    yogaPoseName.textContent = pose.name;

    currentPoseIndex = (currentPoseIndex + 1) % yogaPoses.length;
}

// Start Yoga Timer
setInterval(showNextPose, 60 * 1000); // 60 seconds
