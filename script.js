document.addEventListener('DOMContentLoaded', function () {
    const heartButton = document.getElementById('heartButton');
    const nextPart = document.getElementById('nextPart');
    const container = document.querySelector('.container'); // Select the container

    // Create a heart element
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heartButton.appendChild(heart);

    // Show heart on hover
    heartButton.addEventListener('mouseover', function () {
        heart.style.opacity = '1'; // Make the heart visible
    });

    // Hide heart when not hovering
    heartButton.addEventListener('mouseout', function () {
        heart.style.opacity = '0'; // Hide the heart
    });

    // Handle click event
    heartButton.addEventListener('click', function () {
        heart.innerHTML = '💥'; // Change heart to explosion emoji
        setTimeout(function () {
            heartButton.style.display = 'none'; // Hide the button
            nextPart.classList.remove('hidden'); // Show the next part
            container.style.justifyContent = 'flex-start'; // Uncenter the content
        }, 300); // Delay to show the explosion effect
    });
});