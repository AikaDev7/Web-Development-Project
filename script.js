document.addEventListener('DOMContentLoaded', () => {
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        // Add client-side validation before form submission
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                event.preventDefault();
                formStatus.textContent = 'Please fill out all fields.';
                formStatus.style.color = 'red';
                return false;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                event.preventDefault();
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.style.color = 'red';
                return false;
            }
            
            formStatus.textContent = 'Submitting...';
            formStatus.style.color = 'blue';
            // Form will submit normally to the server
        });
    }
    
    // Add form field highlight effect on focus
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        // Change background color when input is focused
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#f0f8ff'; 
            this.style.borderColor = '#007bff';
        });
        
        // Restore original style when focus is lost
        input.addEventListener('blur', function() {
            this.style.backgroundColor = '';
            this.style.borderColor = '';
        });
    });
    
    // Home page animation effect for achievements 
    const achievements = document.querySelectorAll('.achievement');
    if (achievements.length > 0) {
        // Add hover effect to achievement boxes
        achievements.forEach(achievement => {
            achievement.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
            
            achievement.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    }
});