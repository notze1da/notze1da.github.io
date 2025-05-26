// This runs after the page loads
document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    const body = document.body;
    const message = document.getElementById("message");

    if(hour >= 6 && hour <= 12) {
        // Morning
        body.style.backgroundColor = "#DDA500"; // Light Goldenrod Yellow
        message.textContent = "Rise and Shine! Let's get the bag!";
        body.style.color = "#000000"; // Black text for contrast
    }
    else if (hour >=12 && hour <= 18) {
        //midday
        body.style.backgroundColor = "#FFFACD"; // Lemon Chiffon
        message.textContent = "Keep pushing through! You're doing great!";
    }
    else if (hour >=18 && hour <= 21) {
        // Evenning
        body.style.backgroundColor = "#F0E68C"; // Khaki
        message.textContent = "Getting close to bedtime!";

    }
    else {
        // Night 
        body.style.backgroundColor = "#2F4F4F"; // Dark Slate Gray
        message.textContent = "Time to rest and recharge for tomorrow!";
        body.style.color = "#FFFFFF"; // White text for contrast
    }

});