document.addEventListener("DOMContentLoaded", function () {
    const lights = document.querySelectorAll(".inner"); // Select all lights
    let currentIndex = 0; // Start from red light

    function changeLight() {
        // Remove "active" from all lights
        lights.forEach(light => light.classList.remove("active"));

        // Add "active" to current light
        lights[currentIndex].classList.add("active");

        // Move to next light
        currentIndex = (currentIndex + 1) % lights.length;
    }

    // Initial light setup
    changeLight();

    // Change light every 2 seconds
    setInterval(changeLight, 2000);
});

