document.addEventListener('DOMContentLoaded', () => {
    // Create the custom touch cursor element
    const cursor = document.createElement('div');
    cursor.id = 'touch-cursor';
    document.body.appendChild(cursor);

    let isTouch = false;

    // Detect if the user is using a touch device
    window.addEventListener('touchstart', () => {
        isTouch = true;
    }, { once: true });

    // When the screen is touched
    document.addEventListener('touchstart', (e) => {
        if (!isTouch) return;
        const touch = e.touches[0];
        cursor.style.left = touch.clientX + 'px';
        cursor.style.top = touch.clientY + 'px';
        cursor.classList.add('active');
    }, { passive: true });

    // When the finger moves on the screen
    document.addEventListener('touchmove', (e) => {
        if (!isTouch) return;
        const touch = e.touches[0];
        cursor.style.left = touch.clientX + 'px';
        cursor.style.top = touch.clientY + 'px';
    }, { passive: true });

    // When the finger leaves the screen
    document.addEventListener('touchend', () => {
        cursor.classList.remove('active');
    });
    
    // Also handle touch cancel
    document.addEventListener('touchcancel', () => {
        cursor.classList.remove('active');
    });
});
