// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.innerHTML = body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Pop-Up Modal
function openModal(projectId) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    // Update modal content based on projectId
    if (projectId === 'obstacle-robot') {
        document.getElementById('modal-title').textContent = 'Obstacle Avoiding Robot';
        document.getElementById('modal-description').textContent = 'An autonomous robot that detects and avoids obstacles using ultrasonic sensors. Built with Arduino and C++.';
        document.getElementById('modal-details').innerHTML = `
            <li><strong>Technologies</strong>: Arduino, Ultrasonic Sensor, L298N Motor Driver, C++</li>
            <li><strong>Features</strong>: Real-time obstacle detection, PWM motor control</li>
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// GSAP Animations
gsap.from('nav', { opacity: 0, y: -50, duration: 1 });
gsap.from('#hero', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.section', { opacity: 0, y: 50, duration: 1, stagger: 0.3, scrollTrigger: { trigger: '.section', start: 'top 80%' } });