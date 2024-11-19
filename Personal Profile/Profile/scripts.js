document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.tech-item');

    boxes.forEach(box => {
        box.style.transition = 'transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out';
        
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
            box.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });
});
