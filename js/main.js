// AllMyVids — Coming Soon Page JS

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notify');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[name="email"]').value;
            
            // TODO: Implement actual email collection (Mailchimp, ConvertKit, etc.)
            // For now, just show a confirmation
            
            const button = form.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = '✓ Got it!';
            button.style.background = '#22c55e';
            
            form.querySelector('input').value = '';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
            
            console.log('Email signup:', email);
        });
    }
});

// Add some subtle animation on load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
