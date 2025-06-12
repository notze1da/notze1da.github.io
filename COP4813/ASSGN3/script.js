document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    const background = document.getElementById("background-container");
    const message = document.getElementById("message");

    if (hour >= 6 && hour < 12) {
        // Morning
        background.style.backgroundImage = "url(https://i.redd.it/1nqehgvsa9a41.jpg)";
        message.textContent = "Rise and Shine! Let's get the bag!";
        document.body.style.color = "#000000";
    } else if (hour >= 12 && hour < 18) {
        // Afternoon
        background.style.backgroundImage = "url(https://images.unsplash.com/photo-1616559650874-53aec98e6bb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlkZGF5fGVufDB8fDB8fHww)";
        message.textContent = "Keep pushing through! You're doing great!";
        document.body.style.color = "#000000";
    } else {
        // Night (6pm - 6am)
        background.style.backgroundImage = "url(https://images.unsplash.com/photo-1551977724-3791f7837bc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xlbmRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D)";
        message.textContent = "Time to rest and recharge for tomorrow!";
        document.body.style.color = "#FFFFFF";
    }
});
