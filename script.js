const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Feature addition: Change button text
    if (document.body.classList.contains('dark-mode')) {
        colorBtn.textContent = "Switch to Light Mode";
    } else {
        colorBtn.textContent = "Switch to Dark Mode";
    }
});