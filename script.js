document.addEventListener('DOMContentLoaded', () => {
    // Contact form functionality
    const submitButton = document.getElementById('submitButton');
    const contactForm = document.getElementById('contactForm');
    
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name && email && message) {
                alert('This is a demonstration form.');
                
                contactForm?.reset();
            } else {
                alert('Please fill out all fields.');
            }
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