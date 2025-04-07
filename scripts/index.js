  
    // Typing animation
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const words = ['Junior Frontend Developer', 'Junior IT Support Technician'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 1000; // Pause at the end of the word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 300; // Pause before starting a new word
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // beginning of the typing animation
        setTimeout(type, 1000);
    }
    
    
    