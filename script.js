// Array of messages
const messages = [
    "Day 1: You are my sunshine on a cloudy day.",
    "Day 2: Every moment with you is a treasure.",
    "Day 3: I can't wait to be with you again!",
    "Day 4: Thank you for being you, my love.",
    "Day 5: Your smile brightens my world.",
    // Add more messages as needed
];


function displayMessage() {
    const currentDate = new Date();
    const startDate = new Date("2024-10-29"); 
    const dayDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const messageIndex = dayDifference % messages.length;
    const messageBox = document.getElementById("daily-message");

   
    messageBox.textContent = messages[messageIndex];
    messageBox.style.opacity = 1; 
    messageBox.classList.remove("fade-slide-in"); 
    void messageBox.offsetWidth; 
    messageBox.classList.add("fade-slide-in"); 
}


function startCountdown() {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

    function updateCountdown() {
        const timeRemaining = nextDay - new Date();
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        document.getElementById("time-remaining").textContent = 
            `${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining < 1000) {
            displayMessage(); 
            startCountdown(); 
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}
displayMessage();
startCountdown();
