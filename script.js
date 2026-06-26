// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add subtle hover effect to cards
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Very subtle tilt for a professional feel
            const rotateX = ((y - centerY) / centerY) * -2; 
            const rotateY = ((x - centerX) / centerX) * 2;
            
            card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1500px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});
