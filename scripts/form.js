document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Email validation function
        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
        
        // Form submission handling
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate inputs
            let isValid = true;
            let errorMessage = '';
            
            if (name === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
                document.getElementById('name').classList.add('error');
            } else {
                document.getElementById('name').classList.remove('error');
            }
            
            if (email === '') {
                isValid = false;
                errorMessage += 'Please enter your email.\n';
                document.getElementById('email').classList.add('error');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }
            
            if (subject === '') {
                isValid = false;
                errorMessage += 'Please enter a subject.\n';
                document.getElementById('subject').classList.add('error');
            } else {
                document.getElementById('subject').classList.remove('error');
            }
            
            if (message === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }
            
            // If form is valid, an alert should pop up
            if (isValid) {
                alert('Thank you for your message! I will respond soon.');
                contactForm.reset();
            } else {
                alert('Please correct the following errors:\n' + errorMessage);
            }
        });
        

    }
});