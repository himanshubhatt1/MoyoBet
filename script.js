const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const popup = document.getElementById('popup');
const fireworks = document.getElementById('fireworks');

spinButton.addEventListener('click', () => {
    spinButton.disabled = true;

    // Spin the wheel
    const randomDegree = Math.floor(Math.random() * 3600 + 360);
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Trigger results and animations after the wheel stops spinning
    setTimeout(() => {
        // Display firecracker effect behind the popup
        fireworks.style.visibility = 'visible';
        fireworks.style.opacity = '1'; // Smooth fade-in

        // Show popup
        popup.classList.remove('hidden');

        // Generate coin fall animation
        for (let i = 0; i < 20; i++) {
            const coin = document.createElement('img');
            coin.src = './images/coin.png';
            coin.classList.add('coin-animation');
            coin.style.left = `${Math.random() * 100}vw`;
            document.body.appendChild(coin);

            // Remove coins after animation ends
            setTimeout(() => {
                coin.remove();
            }, 30000);
        }

        // Close popup and reset
        document.querySelector('.claim-button').addEventListener('click', () => {
            popup.classList.add('hidden');
            fireworks.style.opacity = '0'; // Smooth fade-out
            setTimeout(() => (fireworks.style.visibility = 'hidden'), 500); // Hide firecrackers after fade-out
            spinButton.disabled = false;
        });
    }, 3000); // Wait until the spinning animation completes
});
