// Add interactive functionality for clicks
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".social-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(`Redirecting to: ${button.textContent.trim()}`);
        });
    });
});
