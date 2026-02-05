// DOM Elements
const contactForm = document.getElementById('contactForm');
const resetBtn = document.getElementById('resetBtn');
const submitBtn = document.getElementById('submitBtn');
const spinner = document.getElementById('spinner');
const successMessage = document.getElementById('successMessage');
const sendAnotherBtn = document.getElementById('sendAnother');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const charCount = document.getElementById('char-count');
const messageInput = document.getElementById('message');

// Error elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Form validation
function validateForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('your-name').value.trim();
    if (!name) {
        showError(nameError, 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showError(nameError, 'Name must be at least 2 characters');
        isValid = false;
    } else {
        hideError(nameError);
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError(emailError, 'Please enter your email');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    } else {
        hideError(emailError);
    }
    
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        showError(messageError, 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showError(messageError, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        hideError(messageError);
    }
    
    // Privacy policy validation
    const privacyChecked = document.getElementById('privacy').checked;
    if (!privacyChecked) {
        showNotification('Please agree to the privacy policy', 'error');
        isValid = false;
    }
    
    return isValid;
}

// Error handling functions
function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

function hideError(element) {
    element.textContent = '';
    element.classList.remove('show');
}

// Character counter
messageInput.addEventListener('input', function() {
    const length = this.value.length;
    charCount.textContent = length;
    
    if (length > 500) {
        this.value = this.value.substring(0, 500);
        charCount.textContent = 500;
        charCount.style.color = 'var(--accent-color)';
    } else if (length > 450) {
        charCount.style.color = 'var(--warning-color)';
    } else {
        charCount.style.color = 'var(--gray-color)';
    }
});

// Form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Store form data (in a real app, you would send to a server)
        const formData = {
            name: document.getElementById('your-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form submitted:', formData);
        
        showNotification('Message sent successfully!', 'success');
        
    } catch (error) {
        showNotification('Error sending message. Please try again.', 'error');
        console.error('Form submission error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }
});

// Reset form
resetBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to reset the form? All entered data will be lost.')) {
        contactForm.reset();
        charCount.textContent = '0';
        charCount.style.color = 'var(--gray-color)';
        
        // Hide all error messages
        [nameError, emailError, messageError].forEach(hideError);
        
        showNotification('Form has been reset', 'info');
    }
});

// Send another message
sendAnotherBtn.addEventListener('click', function() {
    contactForm.reset();
    contactForm.style.display = 'block';
    successMessage.style.display = 'none';
    charCount.textContent = '0';
    charCount.style.color = 'var(--gray-color)';
    
    // Hide all error messages
    [nameError, emailError, messageError].forEach(hideError);
    
    showNotification('Ready to send another message', 'info');
});

// Notification system
function showNotification(message, type = 'info') {
    notificationText.textContent = message;
    
    // Set color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'var(--success-color)';
            break;
        case 'error':
            notification.style.background = 'var(--accent-color)';
            break;
        case 'info':
            notification.style.background = 'var(--dark-color)';
            break;
    }
    
    notification.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Real-time validation
document.querySelectorAll('input, textarea, select').forEach(element => {
    element.addEventListener('blur', function() {
        if (this.id === 'your-name' || this.id === 'email' || this.id === 'message') {
            validateForm();
        }
    });
});

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to form
    contactForm.style.opacity = '0';
    contactForm.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        contactForm.style.transition = 'all 0.6s ease';
        contactForm.style.opacity = '1';
        contactForm.style.transform = 'translateY(0)';
    }, 300);
    
    // Focus on first input
    document.getElementById('your-name').focus();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl + Enter to submit
    if (e.ctrlKey && e.key === 'Enter') {
        if (contactForm.style.display !== 'none') {
            contactForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to reset
    if (e.key === 'Escape') {
        if (contactForm.style.display !== 'none') {
            resetBtn.click();
        }
    }
});

// Form persistence (optional - using localStorage)
function saveFormState() {
    const formData = {
        name: document.getElementById('your-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    };
    
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function loadFormState() {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        document.getElementById('your-name').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('subject').value = formData.subject || '';
        document.getElementById('message').value = formData.message || '';
        document.getElementById('newsletter').checked = formData.newsletter || false;
        
        // Update character count
        charCount.textContent = formData.message?.length || 0;
    }
}

// Save form state on input
document.querySelectorAll('input, textarea, select').forEach(element => {
    element.addEventListener('input', saveFormState);
    element.addEventListener('change', saveFormState);
});

// Load saved form state on page load
loadFormState();